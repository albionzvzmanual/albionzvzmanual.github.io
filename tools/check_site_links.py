"""Check every built local link/anchor and page reachability. Standard library only.
Usage: python tools/check_site_links.py [site-directory]
"""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
import json,sys

class Page(HTMLParser):
    def __init__(self,text):
        super().__init__();self.ids=set();self.links=[];self.feed(text)
    def handle_starttag(self,tag,attrs):
        attrs=dict(attrs)
        if 'id' in attrs:self.ids.add(attrs['id'])
        if tag=='a' and 'href' in attrs:self.links.append(attrs['href'])

root=Path(sys.argv[1] if len(sys.argv)>1 else 'site').resolve()
pages={p:Page(p.read_text(encoding='utf-8')) for p in root.rglob('*.html')}
if not pages:raise SystemExit('No built pages found. Run mkdocs build --strict first.')
bad=[];checked=0;graph={p:set() for p in pages}
for p,page in pages.items():
    for href in page.links:
        u=urlsplit(href)
        if u.scheme or u.netloc:continue
        target=root/unquote(u.path).lstrip('/') if u.path.startswith('/') else p.parent/unquote(u.path)
        if not u.path:target=p
        elif u.path.endswith('/') or target.is_dir():target=target/'index.html'
        target=target.resolve();checked+=1
        if not target.exists():bad.append([str(p.relative_to(root)),href,'missing file'])
        elif target in pages:
            graph[p].add(target)
            if u.fragment and unquote(u.fragment) not in pages[target].ids:bad.append([str(p.relative_to(root)),href,'missing anchor'])
seen=set();todo=[root/'index.html']
while todo:
    p=todo.pop()
    if p in seen:continue
    seen.add(p);todo.extend(graph.get(p,set())-seen)
unreachable=[str(p.relative_to(root)) for p in pages if p not in seen and p.name!='404.html']
print(json.dumps({'pages':len(pages),'links_checked':checked,'broken':bad,'unreachable':unreachable},indent=2))
raise SystemExit(bool(bad or unreachable))
