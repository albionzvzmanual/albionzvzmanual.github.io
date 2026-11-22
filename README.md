# Albion ZvZ Manual v4

## Preview locally

From this directory, use the pinned dependencies and run the MkDocs preview.

    python -m pip install -r requirements-lock.txt
    python -m mkdocs serve

Open the local HTTP address printed by MkDocs. Serve the site over HTTP so Material search can load its index.

## Verify the source

    python -m mkdocs build --strict
    python tools/check_site_links.py

Compare the downloaded workbook against the checksum in LEDGER_SHA256.txt. The homepage illustration and all styling assets are served locally.

## Publish after approval

Import this source into the existing GitHub Pages repository. Keep the production URL in mkdocs.yml and select GitHub Actions as the Pages source. Review the source on a branch, then merge the approved files into main. Run the manual **Deploy MkDocs site to GitHub Pages** workflow from main. It checks the approved workbook hash, builds the site and checks navigation before uploading. After deployment, verify the homepage, a historical lesson URL, search and the workbook download.
