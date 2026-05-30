# New Job Listing

Start a **new Cursor thread** for each job application. Reference this file with `@New Job Listing.md`, fill in the placeholders, and paste the job description at the end.

---

## Prompt (copy or let the agent read this file)

I'm applying to **[Company]** for **[Role Title]**.

Follow the Resume Tracker workflow in this repo:

1. Read `README.md` and all files under `master/`.
2. Copy `applications/_template/` to `applications/[YYYY-MM]-[company-slug]-[role-slug]/`.
3. Save the job description to `job-description.md`.
4. Run gap analysis in `analysis.md` — match requirements against master resume items; note gaps to add later.
5. **GitHub project scan** — for any skill gaps (❌ or ⚠️), fetch public repos from `master/profile.json` → `links.github` via the GitHub API. Review READMEs and repo structure for evidence of those skills. Document findings in the **GitHub project evidence** section of `analysis.md`. Suggest new master resume bullets or tags where a project supports a missing requirement — do not claim skills without repo or master resume evidence.
6. Build `selection.json` — pick bullets by ID from `master/experience/` and `master/projects/`. Include project bullets surfaced by the GitHub scan when relevant.
7. Generate `resume.md` using `templates/resume.md` with these section rules:
   - **Professional Experience** — items from `master/experience/` only
   - **Technical Projects** — items from `master/projects/` only
8. Derive years of experience from `master/profile.json` → `experienceStart` when tailoring the summary.

**Job listing URL (optional):** [paste URL or leave blank]

**Paste the job description below:**

```
[paste full job description here]
```

---

## What the agent should produce

| File | Purpose |
|------|---------|
| `job-description.md` | Saved listing |
| `analysis.md` | Requirement match, gaps, GitHub project evidence, bullets to emphasize |
| `selection.json` | Selected bullet IDs and custom summary |
| `resume.md` | Tailored resume ready for review |

## Tips

- One thread per application — use this file to bootstrap each new one.
- To revise a resume, stay in the **same thread** for that application.
- After applying, check off the item in `TODO.md`.
