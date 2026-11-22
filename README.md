# Albion ZvZ Manual v4

Install the locked dependencies and validate from this directory.

    python -m pip install -r requirements-lock.txt
    python -m mkdocs build --strict
    python tools/check_site_links.py

After approval, import these source files into the existing GitHub Pages repository and configure GitHub Pages to use GitHub Actions. Run the Deploy MkDocs site to GitHub Pages workflow manually on the approved main branch.
