# Albion ZvZ Manual v3.3.2 Curriculum Expansion Patch - Change Log

## v3.3.3 Library Discoverability Patch

Purpose: keep the manual curriculum clean while making the Reference Library easier to discover.

Changes:

- Renamed the Library landing-page heading to **Reference Library**.
- Added a stronger explanation of how the Library supports the main curriculum.
- Added featured reference cards for Mechanics, Playstyles, Fight Concepts, Weapon and Ability Notes, Calling Styles, and Practical Examples.
- Added a curriculum-to-library connection table.
- Added Related Library references to major curriculum overview pages and selected doctrine pages.
- Kept Library material as supporting reference, not the primary learning path.


## Purpose

This update shifts the site from a collection of useful pages into a clearer ZvZ curriculum. The manual remains the main learning tool. The Formation Ledger remains a companion for applying doctrine to comp documentation.

## Major changes

- Added **Foundations** pillar.
- Added **Fight Execution** pillar.
- Added **Calling & Information** pillar.
- Added **Terrain & Objectives** pillar.
- Expanded **Training & VOD Review** into a stronger improvement system.
- Reframed **Formation Ledger** pages as companion tooling only.
- Updated homepage, site map, current scope, README, and publication checklist.
- Preserved older pages under Library instead of deleting them.

## Public-safety decisions

- No batch-note pages were added.
- No private VOD examples were published directly.
- No named player critique was added.
- Great Fire Control remains described only as an example package.
- Exact item values/current-meta claims remain patch-sensitive and should be verified before being treated as current recommendations.

## Build note

The repository was structurally checked for nav paths and internal markdown links. `mkdocs` was not installed in the runtime used to prepare this package, so a full local MkDocs render was not run here.


## QA patch note

- Added the cleaned Formation Ledger V6.3 XLSX as a direct downloadable companion artifact and made it the primary Ledger link.


## v3.3.2 patch

- Added a dedicated Library landing page so the Library tab no longer opens on Fight Concepts.
- Checked the Library section nav and kept Fight Concepts, Mechanics, Playstyles, Weapon and Ability Notes, Role and Tool Library, Calling Styles, Practical Examples, and Learning Paths as supporting reference sections.
- Renamed the public Ledger download to a stable filename: `Albion_ZvZ_Formation_Ledger_Public_Template.xlsx`.
- Kept the Ledger version visible as page text instead of making it part of the public URL.
- Added Discord contact `saadvii` for comp-package submissions and corrections.