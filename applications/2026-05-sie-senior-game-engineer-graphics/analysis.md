# Application Analysis

## Role summary

Senior graphics engineer on teamLFG at PlayStation, building a new multiplayer franchise in Unreal Engine 5. Owns rendering systems (lighting, materials, particles, post-processing, shadows, scalability), collaborates with artists on stylized visuals and VFX workflows, and optimizes CPU/GPU/memory performance. Requires strong C++, real-time rendering expertise, and ability to ship production tools and systems with minimal oversight.

## Keyword / requirement match

| Requirement | Master resume match | Notes |
|-------------|---------------------|-------|
| Real-time rendering & modern graphics pipelines | ✅ | VRS patents, PBR engine + GLSL shaders, Vulkan/OpenGL, ray tracing |
| Excellent C++ programming | ✅ | Vulkan engine (~221K LOC C++), AOSP C++ systems |
| Unreal Engine 5 & rendering framework | ❌ | No UE experience in master or GitHub; Godot 4.6 is adjacent engine experience |
| Artist/designer-facing tools & workflows | ⚠️→✅ | GitHub: TileGame `@tool` editor script for card art generation |
| Autonomous technical ownership | ✅ | Patented VRS, led layer caching, architected interception platform |
| Cross-discipline collaboration (engineers + artists) | ✅ | GPU vendor/OS teams; technical presentations influencing direction |
| Rendering performance optimization (CPU/GPU/memory) | ✅ | VRS (~10% gains), layer caching (12% power), game interception |
| Lighting, materials, post-processing, shadows | ⚠️→✅ | GitHub: PBR shaders + light UBOs + depth resources; Godot Forward Plus |
| Particles & VFX workflows | ⚠️ | Fog-of-war tweened VFX in TileGame; no particle systems |
| Gameplay systems in C++ on UE5 | ⚠️ | TileGame gameplay systems in Godot (GDScript), not UE C++ |
| Multi-platform (PC, console) | ⚠️→✅ | GitHub: TileGame Windows PC export; Android at scale professionally |
| Visually expressive, polished experiences | ✅ | VRS with fidelity preserved; fog-of-war, billboard sprites, camera systems |
| Camera techniques | ✅ | GitHub: TileGame orbit camera with zoom and rotation |
| Shaders | ✅ | GitHub: GLSL PBR fragment shaders with normal mapping in VulkanGameEngine |

## GitHub project evidence

Scanned public repos at [TheRealStevenJackson](https://github.com/TheRealStevenJackson) (3 repos).

### VulkanGameEngine — [repo](https://github.com/TheRealStevenJackson/VulkanGameEngine)

| Evidence | Supports requirement |
|----------|-------------------|
| ~221K LOC C++, CMake/vcpkg, layered `src/core`, `src/engine`, `src/platform` | C++, engine architecture, autonomous ownership |
| `Renderer.h`: swapchain, depth resources, camera/light UBOs, PBR pipeline, frame sync | Lighting, materials, shadows (depth), rendering pipeline ownership |
| `Material.h`: PBR UBO with albedo/normal/metallic/roughness/AO maps | Materials, modern graphics pipeline |
| `Light.h`: point, directional, spot lights with intensity/range/cone angles | Lighting systems |
| `spinning_cube.frag`: full PBR shader — TBN normal mapping, texture sampling, gamma correction | Shaders, materials, lighting |
| `SideScroller` + `SpinningCube` samples with custom vert/frag shaders | Expressive visual systems, shader authoring |
| Dependencies: Vulkan, GLFW, glm, fastgltf, VMA | Modern graphics stack |

**Suggested master bullets added:** `bullet-engine-lighting-system`, `bullet-engine-pbr-shaders`

### TileGame — [repo](https://github.com/TheRealStevenJackson/TileGame)

| Evidence | Supports requirement |
|----------|-------------------|
| Godot 4.6, `Forward Plus` renderer, D3D12 driver, Jolt Physics | Game engine rendering (not UE5), PC graphics |
| `export_presets.cfg`: Windows Desktop x86_64 export to `out/game.exe` | PC platform shipping |
| `camera_controller.gd`: orbit camera, zoom, pivot tracking, `look_at` | Camera techniques |
| `fog_of_war.gd`: billboard Sprite3D, tweened alpha fade in/out | Expressive visual systems, VFX-adjacent workflows |
| `generate_card_images.gd`: `@tool extends EditorScript`, batch image gen for 100 cards | Artist/designer-facing tooling |
| Turn manager, map registry, character movement, enemy spawning | Gameplay systems (Godot, not UE C++) |
| Procedural mesh tiles, billboard character sprites | Stylized 3D presentation |

**New master project added:** `proj-tile-game-godot-jam`

### PostGenic — not included

Kotlin LinkedIn post generator; no graphics relevance for this role.

## Gaps — items to add to master resume

- [ ] Unreal Engine experience — still the primary gap; no evidence in master or GitHub
- [ ] Custom shader/post-process effects — partial via GLSL PBR; no post-processing pass or stylized shader work documented
- [ ] Particles — fog-of-war tweens are closest; no GPU/Niagara-style particle systems
- [ ] Multiplayer — TileGame is single-player turn-based; teamLFG is multiplayer
- [ ] Console development — PC export only in GitHub; no console targets

## Bullets to emphasize for this application

**Professional Experience**
- `bullet-innopeak-vrs-patents` — rendering performance, modern GPU techniques, visual fidelity
- `bullet-innopeak-opengl-interception` — game graphics pipeline optimization
- `bullet-innopeak-layer-caching` — system-level rendering optimization with measurable impact
- `bullet-innopeak-gpu-vendor-collab` — cross-functional collaboration at scale
- `bullet-innopeak-gpu-presentations` — technical leadership on rendering direction

**Technical Projects — VulkanGameEngine**
- `bullet-engine-vulkan-architecture` — C++ engine/rendering architecture
- `bullet-engine-pbr-shaders` — GLSL shaders, materials, normal mapping (GitHub-verified)
- `bullet-engine-lighting-system` — depth, lights, UBOs (GitHub-verified)

**Technical Projects — TileGame**
- `bullet-tilegame-fog-of-war` — expressive visual system with animated transitions
- `bullet-tilegame-camera` — camera techniques
- `bullet-tilegame-editor-tooling` — designer-facing editor workflow
- `bullet-tilegame-pc-ship` — shipped PC game build under deadline

## Custom summary

Graphics and rendering engineer with 6+ years designing and shipping GPU-focused performance optimizations and system-level rendering solutions. Patented Variable Rate Shading implementations adopted across millions of devices, with deep expertise in modern graphics pipelines spanning Vulkan, OpenGL, Unity, and ray tracing. Building a custom C++ game engine with PBR shaders, a multi-light rendering pipeline, and layered architecture; shipped a 3D Godot 4.6 game jam title on Windows PC with expressive camera and fog-of-war visual systems. Experienced driving technical initiatives from concept to production, collaborating with cross-functional partners, and balancing visual quality against strict CPU, GPU, and memory constraints.
