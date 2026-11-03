# Albion ZvZ Manual v3.4.2

A composition-neutral learning resource for large-scale Albion warfare. The Formation Ledger is an optional practical companion.

Production address: https://albionzvzmanual.github.io/

## Build and check

Use Python 3.12 in a virtual environment:

```text
python -m pip install -r requirements-lock.txt
python -m mkdocs build --strict
python tools/check_site_links.py
```

The generated website is in `site/`; it is not committed. Only this directory is uploaded to GitHub Pages. Public curriculum and downloads are under `docs/`.

## Publishing

The repository's Pages publishing source must be **GitHub Actions**. The workflow `.github/workflows/deploy-pages.yml` runs on pushes to `main` and manual dispatch. Its build verifies the Ledger checksum, performs a strict MkDocs build, and checks all local links before uploading the generated site. Deployment uses the `github-pages` environment.

The production address uses the repository's standard GitHub Pages hostname; no custom-domain `CNAME` is required. A push to `main` can publish the site, so prepare and review releases before that push.

## Formation Ledger

The stable public filename is `Albion_ZvZ_Formation_Ledger_Public_Template.xlsx`. `LEDGER_SHA256.txt` identifies the approved workbook included in v3.4.2. Its embedded revision remains V6.3.1-dev.1 to preserve the tested file without modification.

## Release

See [the v3.4.2 release notes](CHANGELOG_V3_4_2.md). Earlier public release notes are retained. Private source archives, research records, and internal review reports are not part of this repository.
