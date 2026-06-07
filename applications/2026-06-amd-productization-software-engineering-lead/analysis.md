# Application Analysis

## Role summary

Productization software engineering **lead** on AMD Advanced Rendering and Engineering — bridge graphics research and shipping products for game developers on AMD hardware. Owns team leadership, schedules, POC-to-product maturation, partner integration with external studios, and hands-on C++/compute-shader work (HLSL SM6, GLSL, Slang). Requires AAA game/engine/middleware shipping pedigree plus GPU/APU programming and machine learning background. US or Canada; no visa sponsorship.

## Keyword / requirement match

| Requirement | Master resume match | Notes |
|-------------|---------------------|-------|
| Lead / manage games/graphics engineers | ⚠️ | Led 2 engineers on layer caching; solo technical owner on VRS and x86 stack — not formal people-manager title or large-team lead |
| Project schedules & deliverables | ⚠️ | Shipped multiple fleet-wide initiatives on timeline; schedule ownership not explicitly documented |
| Research POC → mature product | ✅ | VRS R&D (checkerboard, foveated, stencil explored) → API VRS shipped on all devices; layer caching template scaled to team |
| External game dev partner integration | ⚠️→✅ | Per-title modules for PUBG and Honor of Kings; Unity VRS plugin for game engines; Qualcomm/OS vendor partnerships |
| Modern C++ | ✅ | AOSP C++ systems, Vulkan engine, interception platform |
| Compute shader & high-level shader code | ⚠️→✅ | HLSL (Unity VRS), GLSL (Vulkan PBR); compute shaders not named explicitly in master |
| HLSL SM6 | ⚠️ | Production HLSL in Unity VRS plugin; SM6 version not documented |
| GLSL | ✅ | Vulkan engine PBR shaders (master + GitHub) |
| Slang | ❌ | No evidence in master or GitHub |
| GPU/APU programming | ✅ | Vulkan, OpenGL ES, mobile SoCs (Qualcomm, MediaTek), ray tracing + VRS |
| Machine learning | ⚠️ | AI-assisted development workflow only — not graphics ML or training pipelines |
| Real-time rendering / AAA algorithms | ✅ | VRS, PBR, layer caching, game interception, ray-tracing integration |
| Planning under changing requirements | ⚠️ | Multiple pivots in VRS R&D notes (checkerboard/foveated not shipped); adaptive delivery implied |
| Shipping AAA games, engines, or middleware | ⚠️ | Middleware-adjacent: 5-year interception platform, Unity plugin, AOSP shipping; optimized AAA mobile titles (PUBG, HoK, LoL) — not credited on shipped AAA PC/console title |
| Communication / presentations | ✅ | ~90-min presentation to ~30 engineers; Qualcomm HQ presentation |
| Bachelor's CS | ✅ | WSU Vancouver B.S. CS, 2019 |
| US location | ✅ | Issaquah, WA |

## GitHub project evidence

Scanned public repos at [TheRealStevenJackson](https://github.com/TheRealStevenJackson) via GitHub REST API (5 repos).

| Repo | Language | Relevance |
|------|----------|-----------|
| [VulkanGameEngine](https://github.com/TheRealStevenJackson/VulkanGameEngine) | C++ | C++ game engine, GLSL shaders, layered architecture — engine shipping evidence |
| [TileGame](https://github.com/TheRealStevenJackson/TileGame) | GDScript | Shipped PC game build; weaker fit for AMD lead role |
| PostGenic, CardScanner, ResumeTracker | — | No graphics relevance |

### VulkanGameEngine

| Evidence | Supports requirement |
|----------|-------------------|
| C++ CMake engine, `Renderer` / `Material` / `Light` | Modern C++, game-engine architecture |
| `spinning_cube.frag`: PBR, TBN, texture sampling | GLSL shader proficiency (adjacent to HLSL/SM6) |
| Layered `src/core`, `src/engine`, `src/platform` | Packageable, maintainable C++ codebase |
| Point/directional/spot lights, depth resources | Real-time rendering algorithms |

**Suggested actions:** No new master bullets required — `bullet-engine-vulkan-architecture`, `bullet-engine-pbr-shaders`, and `bullet-engine-lighting-system` cover GitHub evidence. Slang and compute-shader gaps remain unaddressed in public repos.

## Gaps — items to add to master resume

- [ ] Formal engineering management / larger team lead scope — current evidence is technical lead + 2-engineer onboarding
- [ ] Slang shader language — not documented
- [ ] Compute shaders explicitly — likely in GPU work but not on resume
- [ ] Machine learning for graphics — only AI dev-tooling bullet exists
- [ ] Project schedule / program management artifacts — consider adding if you owned roadmaps or milestone planning
- [ ] AAA PC/console ship credit — mobile fleet-scale and per-title optimization is closest evidence
- [ ] HLSL SM6 version specificity — Unity VRS HLSL is documented; SM6 level is not

## Bullets to emphasize for this application

**Professional Experience — productization & leadership**
- `bullet-innopeak-vrs-patents` — sole owner, R&D → patented product shipped fleet-wide (~10% gains)
- `bullet-innopeak-layer-caching` — led initiative, onboarded 2 engineers, shipped to all production devices
- `bullet-innopeak-vrs-unity` — HLSL + game-engine integration, productized VRS for Unity titles
- `bullet-innopeak-vrs-interception` — production OpenGL ES middleware with measurable gains
- `bullet-innopeak-interception-platform` — durable middleware still in use five years later
- `bullet-innopeak-interception-games` — external AAA title integration (PUBG, Honor of Kings)
- `bullet-innopeak-vrs-qualcomm` — partner relationships, technical presentations, millions of devices
- `bullet-innopeak-x86-stack-architecture` — end-to-end architecture leadership, first-principles stack design
- `bullet-innopeak-unified-rendering-architecture` — research initiative matured to production AOSP shipping

**Professional Experience — de-emphasize for space**
- Testbed / sensor bullets — not relevant to AMD gaming graphics lead
- `bullet-innopeak-ai-development` — only include if covering ML keyword; frames as prototyping acceleration, not graphics ML

**Technical Projects — VulkanGameEngine**
- `bullet-engine-vulkan-architecture` — C++ game engine from first principles
- `bullet-engine-pbr-shaders` — GLSL shader authoring
- `bullet-engine-lighting-system` — real-time rendering pipeline

## Custom summary

Graphics and rendering engineer with 6+ years productizing GPU-focused rendering technology from research prototypes to fleet-wide deployment on millions of devices. Inventor on patented Variable Rate Shading, led layer-caching delivery while onboarding engineers via a reusable architecture template, and built durable game-graphics middleware integrating optimizations into flagship titles including PUBG and Honor of Kings. Hands-on in modern C++, HLSL, and GLSL across Vulkan, OpenGL ES, Unity, and AOSP — with partner-facing technical leadership at Qualcomm and across GPU vendors. Building a C++ Vulkan game engine with PBR pipelines and layered architecture; experienced transforming breakthrough rendering ideas into documented, shippable systems under strict quality and performance bars.

## Fit assessment (honest)

**Strong:** Productization arc (VRS, layer caching, interception), C++/shader depth, real-time rendering algorithms, external partner work (studios + Qualcomm), technical influence and presentations, US-based.

**Stretch:** This is a **lead** role expecting management of an experienced graphics team and extensive AAA engine/middleware shipping — your profile reads as senior IC / technical lead with emerging people leadership. Worth applying if you want to grow into management; cover letter should address team leadership examples (layer caching onboarding, cross-team knitting) without overstating formal management years.
