# Website editor fixes

This update addresses the editor issues reported:

- Projects now render on the website and the editor always has a `projects` array, so the Projects tab no longer crashes when the content file has no projects.
- About highlight cards can be added, edited, and deleted.
- Design & Sections now lets you add/remove the supported page sections, toggle visibility, and reorder sections.
- Content lists can be added/deleted in About paragraphs, Academic Background entries, Skills groups, Interests cards, Projects, and Social links. Skill items and coursework are edited as comma-separated lists.
- Social links have up/down controls to change their order.
- Interests cards have more breathing room and use a two-column desktop layout, collapsing to one column on smaller screens.
- “Currently pursuing” wording in the uploaded Academic Background content is retained.

## Files changed

`content.json`, `editor.js`, `editor.css`, `renderer.js`, `site.js`, `style.css`

## Important: publish to the `changes` branch

Copy these six files into the root of your repository on the `changes` branch, replacing the existing versions. Do not replace the whole repository with a nested folder.

After deployment, open `editor.html`. The editor stores edits in this browser's local storage. The existing saved data is preserved and normalized; it is not automatically overwritten by the new defaults. If you want to load the supplied `content.json` as a fresh starting point, use Reset in the editor (this clears local editor changes), then download `content.json` and publish it.
