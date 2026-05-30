# Resume Tracker

A file-based system for maintaining a **master resume** and generating **tailored resumes** per job application.

## How it works

1. **Master data** lives in `master/` — one JSON file per job and per project, plus profile, skills, and education.
2. **Applications** live in `applications/<company-role>/` — job listing, gap analysis, bullet selection, and generated output.
3. **Generation** merges master + selection into Markdown via `templates/resume.md`.

## Resume section mapping

When generating a tailored resume, master data maps to these section headings:

| Master source | Resume section |
|---------------|----------------|
| `master/experience/*.json` | **Professional Experience** |
| `master/projects/*.json` | **Technical Projects** |

Jobs and project work are never mixed in the same section.

## Directory layout

```
master/
  profile.json              # Contact info, links, default summary
  skills.json               # Grouped skills index
  education.json            # Degrees and certifications
  experience/
    _template.json          # Copy this when adding a new job
    *.json                  # One file per role (e.g. acme-corp-senior-engineer.json)
  projects/
    _template.json          # Copy this when adding a personal/side project
    *.json                  # One file per project (e.g. game-engine.json)

applications/
  _template/                # Copy this folder for each new application
    job-description.md
    analysis.md
    selection.json
    resume.md               # Generated tailored resume (output)

templates/
  resume.md                 # Markdown template for generated resumes
```

## Adding a new job to your master resume

1. Copy `master/experience/_template.json` to `master/experience/<company-slug>-<role-slug>.json`.
2. Fill in company, title, dates, and accomplishment bullets.
3. Add `tags` to each bullet — these help match job listings later.

## Adding a personal project

Keep projects separate from jobs — they have different metadata (repo link, ongoing status) and you often include them selectively per application.

1. Copy `master/projects/_template.json` to `master/projects/<project-slug>.json`.
2. Fill in name, short description, URL, dates, and accomplishment bullets.
3. Use `status`: `active`, `completed`, or `paused`.

## Starting a new application

1. Open a **new Cursor thread** and reference [`New Job Listing.md`](New%20Job%20Listing.md) — fill in company/role and paste the job description.
2. Or manually: copy `applications/_template/` to `applications/<YYYY-MM>-<company>-<role>/`.
3. Paste the job listing into `job-description.md`.
4. Work through gap analysis in `analysis.md` (with Cursor).
5. Scan public GitHub repos (from `profile.json` → `links.github`) for evidence of missing skills — see `New Job Listing.md` step 5.
6. Select bullets by ID in `selection.json`.
7. Generate `resume.md` from master data + selection.

## IDs and references

- Each job has an `id` like `exp-acme-senior-engineer`.
- Each project has an `id` like `proj-game-engine`.
- Each bullet has an `id` like `bullet-acme-migration` or `bullet-proj-rendering`.
- Application `selection.json` references these IDs — no duplicated text.

## Privacy

This repo contains personal career data. Keep it **private** if using a remote git host.

## TODO

See [TODO.md](TODO.md) for open items and periodic checklist.
