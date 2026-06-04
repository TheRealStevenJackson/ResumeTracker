# Resume bullets

Canonical style guide for accomplishment bullets in the master resume (`master/experience/` and `master/projects/`).

Reference with `@Resume Bullets.md` when:

- Documenting employer work ([`New Job Project.md`](New%20Job%20Project.md))
- Tailoring an application and **adding or suggesting new master bullets** ([`New Job Listing.md`](New%20Job%20Listing.md))
- Editing bullet `text` in any master JSON file

---

## Google X–Y–Z formula

Every bullet must follow:

> **Accomplished [X]** as measured by **[Y]**, by doing **[Z]**.

| Part | What to write |
|------|----------------|
| **X** | Outcome or deliverable (shipped feature, patent, module, pipeline) |
| **Y** | Measurable proof — %, FPS, device count, latency, power, scale, patents |
| **Z** | How you did it — one focused method, not a stack dump |

**Template (adapt, do not paste verbatim):**

`[Strong verb] [X], [Y metric/context], by [Z — primary technique].`

### Good

- Reduced frame hitching from ~30% to under 1% by fixing client–renderer race conditions during GPU resource sync.
- Shipped API Variable Rate Shading on all production devices with ~10% rendering gains by replacing texture-based shading with frame-based OpenGL interception.

### Bad

Paragraph-style bullets that stack multiple accomplishments, bury Y, or list every technology touched — e.g. opening with “Sole owner of a deep R&D initiative into reduced fragment shading—evaluating API-backed Variable Rate Shading in OpenGL and Vulkan, checkerboard and foveated rendering…” and continuing for several clauses.

---

## Length

| Constraint | Limit |
|------------|--------|
| **Words** | **20–40 words** (hard max **45**) |
| **Lines** | One resume line; two only if the PDF still fits one visual row |
| **Sentences** | Prefer **one** sentence; never more than two |

Count words on the `text` field before saving. If notes need more detail, put it in project `notes`, not in `text`.

---

## One bullet = one accomplishment

- Do **not** chain unrelated wins with semicolons, em dashes, or “also / and / while”.
- Missing a metric? Ask the user or use a conservative Y (“on all production devices”) — do not pad Z with every technology touched.
- Split work into **separate bullets** with distinct `id`s (e.g. architecture vs performance vs leadership).

---

## Voice and content

- Start with a **strong past-tense verb** (Shipped, Reduced, Built, Led, Designed, Collaborated).
- Name **technologies sparingly** — only what supports Z or the job tags (2–4 max per bullet).
- **Ownership** in one phrase if needed (“Sole owner”, “Primary driver”, “Contributor”) — not a paragraph of scope.
- **Facts only** — no speculation; align with project `notes` and user answers.
- **Public resume safe** — omit NDA-only product names unless the user confirms.

---

## `id` and `tags`

- `id`: `bullet-<company-or-proj-slug>-<short-topic>` — stable once used in `selection.json`; do not rename after an application references it.
- `tags`: 3–8 lowercase tokens for job matching; add new skills to `master/skills.json` when appropriate.

---

## Agent workflow

1. Gather **X, Y, Z** from user notes, gap analysis, or clarifying questions **before** drafting.
2. Draft bullets; **count words** and verify XYZ coverage.
3. Show drafts for review; revise if any bullet is over 40 words or reads like a paragraph.
4. Prefer **3–4 bullets per project**, not one mega-bullet.
5. When a job listing workflow suggests new master bullets, add them to the correct `master/experience/` or `master/projects/` file — same rules apply.

---

## Quick self-check

- [ ] Can you point to X, Y, and Z in one read?
- [ ] 20–40 words?
- [ ] One main accomplishment?
- [ ] Would this fit on one line of a printed resume?
