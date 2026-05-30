# Resume Tracker — TODO

Periodic checklist. Update items as you complete them.

## Your action items

- [ ] **Patent details** — Find patent numbers/titles for VRS, layer caching, and related work. Decide later whether to cite on resumes or keep as searchable metadata only.
- [ ] **Additional side projects** — Add new files under `master/projects/` when ready.
- [ ] **Portfolio website** — Optional: host project videos/screenshots; add URL to `master/profile.json` → `links.portfolio` when live.
- [ ] **Prior work experience** — Optional: add pre-InnoPeak roles if you decide they belong on future resumes.
- [ ] **Practice job application** — Start a new thread with `@New Job Listing.md`, paste a job listing, and run through the workflow.

## Project / tooling

- [ ] **Resume generator script** — Automate merging `master/` + `selection.json` → `resume.md`.
- [ ] **Sync templates with live schema** — Update `profile.json` template to include `headline` and `experienceStart`; align `skills.json` template with current categories.
- [ ] **First real application folder** — Copy `applications/_template/` for an actual job listing.
- [ ] **Optional: JSON schema validation** — Catch missing fields or typos in master files.
- [ ] **Optional: section title override** — Per-application custom heading for Technical Projects (e.g. "Graphics and Rendering Projects").
- [ ] **Optional: GitHub index script** — Cache public repo metadata under `master/github-index.json` for faster repeated scans (manual API fetch works for now).

- [ ] **Git init & private remote** — Initialize repo and push to a private GitHub repo if desired.

## Completed

- [x] Game engine repo URL → [VulkanGameEngine](https://github.com/TheRealStevenJackson/VulkanGameEngine)
- [x] Game engine start date → `2025-01`
- [x] InnoPeak start date corrected → `2020-01`
- [x] Summary updated → 6+ years (from `experienceStart` in Jan 2020)
- [x] Resume sections → Professional Experience / Technical Projects
- [x] GitHub project scan — added to `New Job Listing.md` workflow and `analysis.md` template

## Reference

**Years of experience** — Calculate from `master/profile.json` → `experienceStart` (`2020-01`), not a hard-coded number in the summary. When generating resumes, derive the current count from that date and update the summary wording if needed.
