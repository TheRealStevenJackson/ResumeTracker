# Application Analysis

## Role summary

Graphics engineer on the NBA 2K team at Visual Concepts, focused on C/C++ rendering code and HLSL shaders. Owns new rendering tech, GPU performance, and collaboration with art/design on VFX, lighting, and post-processing. Participates in system-wide rendering upgrades. Open to junior through senior; remote US.

## Keyword / requirement match

| Requirement | Master resume match | Notes |
|-------------|---------------------|-------|
| C/C++ high-performance rendering code | ✅ | Vulkan engine (C++), AOSP/RenderEngine C++ systems |
| HLSL shaders | ⚠️→✅ | GLSL PBR shaders in engine (job allows comparable); HLSL listed in `skills.json` — no HLSL files in public GitHub |
| 3+ years game or graphics development | ✅ | `experienceStart` 2020-01 → 6+ years; flagship game optimization (PUBG, LoL, HoK) |
| Bachelor's CS or equivalent | ✅ | WSU Vancouver B.S. CS, 2019 |
| 3D math | ✅ | Engine cameras/lights, PBR TBN, glm stack (GitHub) |
| Optimization techniques & trade-offs | ✅ | VRS (~10%), layer caching (12% power), interception, unified rendering hitch reduction |
| Efficient, portable, readable code | ✅ | Layered engine architecture, AOSP shipping initiatives |
| New rendering technologies | ✅ | VRS patents, PBR pipeline, unified rendering contribution |
| GPU performance optimization | ✅ | VRS, game interception, ray-tracing VRS integration, Winlator benchmarks |
| Partner with art/design | ⚠️→✅ | GitHub: TileGame `@tool` card art generator; compositor blur/shadow/rounded-corner caching for UI polish |
| VFX, lighting, post-processing | ⚠️→✅ | Lighting: engine light system + PBR; VFX: fog-of-war tweens, layer-caching visual effects; post-processing: no dedicated pass documented |
| System-wide rendering upgrades | ✅ | Unified rendering AOSP initiative; VRS/layer caching shipped fleet-wide |
| AAA title shipped | ⚠️ | Optimizations on AAA-tier mobile titles (PUBG, LoL); not credited on a shipped AAA console/PC title |
| PBR | ✅ | Engine PBR pipeline + GLSL shaders (master + GitHub) |
| Real-time GI | ❌ | No evidence in master or GitHub |
| Post-processing effects (nice-to-have) | ⚠️ | Depth + PBR forward path; no bloom/tonemap stack documented |
| ML for graphics (nice-to-have) | ⚠️ | AI-assisted dev bullet only; not graphics ML |
| Remote US | ✅ | Issaquah, WA |

## GitHub project evidence

Scanned public repos at [TheRealStevenJackson](https://github.com/TheRealStevenJackson) via GitHub REST API (5 repos; `gh` CLI unavailable).

| Repo | Language | Relevance |
|------|----------|-----------|
| [VulkanGameEngine](https://github.com/TheRealStevenJackson/VulkanGameEngine) | C++ | C++ engine, GLSL PBR shaders, lighting/depth — strongest match for C++ + comparable shading |
| [TileGame](https://github.com/TheRealStevenJackson/TileGame) | GDScript | Forward Plus 3D, fog-of-war VFX, orbit camera, editor tooling for art workflow |
| PostGenic | Kotlin | No graphics relevance |
| CardScanner, ResumeTracker | — | No graphics relevance |

### VulkanGameEngine

| Evidence | Supports requirement |
|----------|-------------------|
| C++ CMake engine, `Renderer` / `Material` / `Light` | C/C++ rendering systems |
| `spinning_cube.frag`: PBR, TBN, texture sampling | Comparable shading language proficiency |
| Point/directional/spot lights, depth resources | Lighting systems |
| Layered `src/core`, `src/engine`, `src/platform` | Readable, maintainable engine code |

### TileGame

| Evidence | Supports requirement |
|----------|-------------------|
| Godot 4.6 Forward Plus, Windows PC export | Game shipping under deadline |
| `fog_of_war.gd`: billboard sprites, tweened alpha | VFX-adjacent visual features |
| `camera_controller.gd`: orbit/zoom/rotation | 3D presentation, sports-adjacent camera thinking |
| `generate_card_images.gd`: `@tool` EditorScript | Art/design workflow support |

**Suggested actions:** No new master bullets required — existing `bullet-engine-pbr-shaders`, `bullet-engine-lighting-system`, and TileGame bullets cover GitHub gaps for this listing.

## Gaps — items to add to master resume

- [ ] HLSL-specific work samples — if you have Unity/Unreal HLSL snippets, add a bullet or project note; until then lean on GLSL + "comparable" wording in summary/skills only
- [ ] Dedicated post-processing stack (bloom, color grading, motion blur) — not documented
- [ ] Real-time global illumination — not in portfolio
- [ ] AAA console/PC ship credit — mobile fleet-scale shipping is the closest evidence
- [ ] NBA/sports-specific rendering — no direct match; emphasize general game graphics + VFX/lighting

## Bullets to emphasize for this application

**Professional Experience**
- `bullet-innopeak-vrs-patents` — new rendering tech, GPU performance, visual fidelity preserved
- `bullet-innopeak-vrs-interception` — third-party game rendering optimization (7–10% gains)
- `bullet-innopeak-interception-games` — PUBG, Honor of Kings, LoL — game studio credibility
- `bullet-innopeak-layer-caching-composition` — blur, shadows, rounded corners (VFX/UI polish)
- `bullet-innopeak-unified-rendering-architecture` — system-wide rendering upgrade, production shipping
- `bullet-innopeak-vrs-qualcomm` — cross-functional partnership at scale

**Technical Projects — VulkanGameEngine**
- `bullet-engine-vulkan-architecture` — C++ game engine structure
- `bullet-engine-pbr-shaders` — shader authoring (GLSL, comparable to HLSL)
- `bullet-engine-lighting-system` — lighting pipeline

**Technical Projects — TileGame**
- `bullet-tilegame-fog-of-war` — VFX-style visual system
- `bullet-tilegame-editor-tooling` — art-facing workflow
- `bullet-tilegame-pc-ship` — shipped game build

## Custom summary

Graphics engineer with 6+ years in game and mobile graphics, writing high-performance C++ and shader code for production rendering systems. Inventor on patented Variable Rate Shading shipped across millions of devices, with approximately 10% GPU gains while preserving visual fidelity, plus per-title optimization for flagship games including PUBG and Honor of Kings. Building a Vulkan game engine with PBR GLSL shaders, multi-light pipelines, and layered C++ architecture; shipped a 3D Godot game jam title with VFX and designer-facing editor tooling. Experienced balancing cutting-edge rendering techniques against strict GPU budgets and partnering with cross-functional teams from GPU vendors to creative workflows.
