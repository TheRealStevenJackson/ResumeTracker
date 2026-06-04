# Steven Jackson

Graphics Engineer — Real-Time Rendering and Game Graphics

steven.jackson.gfx@gmail.com · 360-600-0283 · Issaquah, WA 98027
https://linkedin.com/in/steven-jackson-rendering · https://github.com/TheRealStevenJackson

---

## Summary

Graphics engineer with 6+ years in game and mobile graphics, writing high-performance C++ and shader code for production rendering systems. Inventor on patented Variable Rate Shading shipped across millions of devices, with approximately 10% GPU gains while preserving visual fidelity, plus per-title optimization for flagship games including PUBG and Honor of Kings. Building a Vulkan game engine with PBR GLSL shaders, multi-light pipelines, and layered C++ architecture; shipped a 3D Godot game jam title with VFX and designer-facing editor tooling. Experienced balancing cutting-edge rendering techniques against strict GPU budgets and partnering with cross-functional teams from GPU vendors to creative workflows.

---

## Professional Experience

### Software Engineer · InnoPeak Technology Inc
*2020-01 – present · Bellevue, WA*

- Sole owner of a deep R&D initiative into reduced fragment shading—evaluating API-backed Variable Rate Shading in OpenGL and Vulkan, checkerboard and foveated rendering, custom stencil-based alternatives, and image reconstruction to infill undersampled regions—inventor on three related patents; shipped VRS on all company production devices with approximately 10% average rendering performance gains on flagship hardware while maintaining high visual fidelity; delivered internal technical presentations on VRS and emerging GPU rendering techniques, influencing product direction across engineering teams.
- Replaced texture-based per-texture shading in the OpenGL ES game interception layer with frame-based API Variable Rate Shading for third-party titles on company devices, contributing approximately 7–10% rendering performance improvement based on documented production benchmarks.
- Owned per-title optimization modules for PUBG and Honor of Kings on a shared interception platform also covering League of Legends and other top third-party games, reverse-engineering OpenGL call sequences and frame patterns to enable state-specific GPU optimizations.
- Implemented cache invalidation and dirty-region updates in RenderEngine and the composition pipeline so static background content leaves blur, shadows, and rounded corners cached while in-overlay updates repaint only affected regions—avoiding per-frame software composition and restoring hardware-composer eligibility for cached layers.
- Contributed to an AOSP unified rendering initiative that moved user and system UI (including launcher) from per-application buffer-queue compositing to display-list submission to SurfaceFlinger, consolidating GPU work into a single renderer context to reduce driver context switching and improve compositing efficiency; feature now shipping on production devices.
- Collaborated with Android OS teams and GPU vendors including Qualcomm and MediaTek to deploy graphics optimizations at scale across millions of consumer devices; presented VRS research findings and mobile performance bottlenecks at Qualcomm headquarters in San Diego, advocating for desktop-class Vulkan extensions—including sample point relocation for MSAA—to unblock custom variable-rate shading algorithms on mobile GPUs.

---

## Technical Projects

### Vulkan Game Engine
*2025-01 – present · https://github.com/TheRealStevenJackson/VulkanGameEngine*

Personal Vulkan game engine with layered architecture, PBR pipeline, and platform abstraction.

- Evolved a custom Vulkan renderer into a full game engine with a strong emphasis on layered architecture, abstracting low-level graphics and platform concerns away from high-level game code.
- Authored GLSL PBR fragment shaders with TBN normal mapping, metallic/roughness/AO texture sampling, and gamma-correct albedo handling, wired through Vulkan descriptor sets and material uniform buffers.
- Implemented depth buffer resources, camera and light uniform buffers, and a light entity system supporting point, directional, and spot lights integrated into the Vulkan render pipeline.

### TileGame (Godot Game Jam)
*2026-02 – 2026-02 · https://github.com/TheRealStevenJackson/TileGame*

3D turn-based tile exploration game built in Godot 4.6 with Forward Plus rendering, shipped as a Windows PC build.

- Built a fog-of-war visual system using billboard Sprite3D nodes with tweened fade-in and fade-out transitions, revealing map tiles as the player explored.
- Authored an editor-integrated (@tool) script that procedurally generated unique placeholder card art for 100+ card resources and assigned textures directly to card data assets.
- Shipped a playable Windows PC build of a 3D turn-based tile game during a game jam using Godot 4.6 with Forward Plus rendering and Jolt Physics.

---

## Skills

C++ · Vulkan · OpenGL · Unity · Godot · GLSL · HLSL · PBR · Variable Rate Shading · Ray Tracing · GPU Driven Rendering · RenderDoc · Nsight

---

## Education

**Washington State University Vancouver** — Bachelor of Science in Computer Science, 2019-07
Graduated Cum Laude · President's Honor Roll
