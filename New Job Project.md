# New Job Project

Document **work you did at an employer** — internal initiatives at InnoPeak (or a future job). Reference this file with `@New Job Project.md` when you want to add or expand a professional project and its resume bullets.

**Not the same as** `master/projects/` — those are **personal** side projects (Technical Projects on the resume). This file is for **employer work** stored under `master/experience/`.

---

## Prompt (copy or let the agent read this file)

I'm documenting a **professional project** at **[Company / role file]** (e.g. InnoPeak → `master/experience/innopeak-software-engineer.json`).

Follow the Resume Tracker workflow:

1. Read `README.md` and the relevant file under `master/experience/`.
2. Review my notes below and identify **gaps** — anything vague, missing metrics, or unclear scope.
3. **Ask clarifying questions** before finalizing bullets (see **Clarifying questions** at the end of this file). Skip only questions already answered in my notes.
4. After I respond (or if my notes are already complete), add or update a project entry in that file's `projects[]` array (see structure below).
5. Draft or refine **resume bullets** from my notes and answers — each bullet gets a stable `id` and `tags`.
6. Put **cross-cutting work** (spans multiple initiatives) in the role-level `bullets[]` array instead of a project.
7. **Do not** add internal project names to generated `resume.md` output — selected bullets still appear as a flat list under **Professional Experience**.
8. Note any **pending follow-ups** (e.g. benchmark results not yet available) in the project `notes` field.

**Employer / role file:** [e.g. InnoPeak — `innopeak-software-engineer.json`]

**Project name:** [short internal name, e.g. Variable Rate Shading]

**Rough dates:** [e.g. 2021–2023, or ongoing]

**What the project was (your words):**

```
[2–5 sentences: goal, scope, tech, team, outcome]
```

**Existing bullets this belongs to (if any):**

```
[Paste bullet text or IDs from the master file, or say "new project"]
```

**Additional details — metrics, tech, leadership, patents, anything not captured yet:**

```
[Freeform notes, talking points, numbers, partners]
```

---

## What to include (checklist)

| Field | Example |
|-------|---------|
| Project name | AOSP Layer Caching |
| Dates | 2022–2024 |
| Purpose | Reduce GPU power during UI interactions on Android |
| Your role | Led 3 engineers, owned architecture |
| Tech | AOSP, OpenGL, Vulkan, … |
| Impact | 12% power reduction, patent, millions of devices |
| Bullets | 1–4 accomplishment statements for the resume |

---

## Where it is stored

**File:** `master/experience/<company-slug>-<role-slug>.json`

```json
{
  "id": "exp-innopeak-software-engineer",
  "company": "InnoPeak Technology Inc",
  "title": "Software Engineer",
  "start": "2020-01",
  "end": "present",
  "projects": [
    {
      "id": "proj-innopeak-vrs",
      "name": "Variable Rate Shading",
      "start": "YYYY-MM",
      "end": "present",
      "bullets": [
        {
          "id": "bullet-innopeak-vrs-patents",
          "text": "...",
          "tags": ["vulkan", "vrs", "patent"]
        }
      ]
    }
  ],
  "bullets": [
    {
      "id": "bullet-innopeak-ai-development",
      "text": "...",
      "tags": ["ai"]
    }
  ]
}
```

| Array | Use for |
|-------|---------|
| `projects[]` | Distinct initiatives at this employer (VRS, layer caching, …) |
| `bullets` (role level) | Cross-cutting work not tied to one project |

---

## Resume output (unchanged)

Generated resumes still show:

```markdown
### Software Engineer · InnoPeak Technology Inc
*2020-01 – present · Bellevue, WA*

- Selected bullet one
- Selected bullet two
```

Internal project names are for **management and tailoring only**. Selection still uses individual bullet `id`s in `selection.json`.

---

## Tips

- One thread per project is fine if the notes are long; same thread works for quick additions.
- Reuse existing bullet `id`s when moving bullets into a project — don't break past `selection.json` references.
- After adding bullets, skim `master/skills.json` for skills worth tagging or adding.
- Patents tied to a project can be noted in the project entry later (see `TODO.md`).

## Related files

- [`New Job Listing.md`](New%20Job%20Listing.md) — tailoring a resume for a job application
- `master/experience/_template.json` — schema for a new employer role
- `master/projects/_template.json` — personal side projects (Technical Projects on resume)

---

## Clarifying questions (agent)

After reading my project notes, **ask me about anything not already covered**. Do not write final bullets until I have had a chance to answer — unless I explicitly say "skip questions" or my notes already address everything.

Use this checklist. Omit questions that are clearly answered; combine related ones to keep the list short.

### Timeline & ownership

- When did the project start and end (or is it ongoing)?
- Were you solo owner, lead, or contributor? What did you personally own end-to-end?

### Impact & metrics

- Any measurable outcomes? (performance %, power, latency, scale, users/devices, cost, bug reduction)
- Compared to alternatives, baselines, or competitors — any benchmark results with numbers?
- What was inconsistent or weak in other approaches that yours improved?

### Technical scope

- Key technologies, stack, and architecture decisions worth naming on a resume?
- Any custom patches or upstream work — or integration/tuning/configuration only?
- Target hardware, platforms, or environments?

### Context & boundaries

- Relationship to other work at the same employer — standalone or built on prior projects?
- What is **safe to put on a public resume** vs internal-only or NDA?
- End goal: R&D, internal tool, shipping product, customer-facing app?

### Scope & validation

- What was validated, shipped, or demonstrated? (titles, features, catalog size)
- Planned scope not yet done — should it be omitted or mentioned cautiously?

### Resume-specific

- Anything missing from my notes that interviewers would expect for this kind of project?
- Patents, publications, or presentations tied to this work?

---

## After I answer

1. Update `master/experience/<role-file>.json` with the project entry and bullets.
2. Show me the draft bullets for review before treating them as final.
3. Record pending items (e.g. "Qualcomm benchmark TBD") in the project `notes` field and `TODO.md` if needed.
