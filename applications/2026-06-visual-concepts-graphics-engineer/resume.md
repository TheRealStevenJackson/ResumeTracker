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

- Sole owner of variable-rate shading R&D as inventor on three related patents, shipping API VRS on all company devices with ~10% rendering gains on flagship hardware.
- Shipped frame-based API Variable Rate Shading on production devices with ~7–10% rendering gains, by replacing texture-based per-texture shading in the OpenGL ES interception layer.
- Owned per-title optimization modules for PUBG and Honor of Kings on the shared platform, by reverse-engineering OpenGL call sequences and frame patterns for state-specific GPU tuning.
- Restored hardware-composer eligibility for cached UI layers, by dirty-region invalidation in RenderEngine that repaints only overlay-affected regions during blur and shadows.
- Contributed to AOSP unified rendering shipping on production devices, consolidating UI into one SurfaceFlinger renderer context, by replacing per-app buffer queues with display-list submission.
- Presented VRS research at Qualcomm headquarters and collaborated with Android OS and GPU vendors, deploying optimizations across millions of consumer devices with production VRS rollout.

---

## Technical Projects

### Vulkan Game Engine
*2025-01 – present · https://github.com/TheRealStevenJackson/VulkanGameEngine*

Personal Vulkan game engine with layered architecture, PBR pipeline, and platform abstraction.

- Evolved a custom Vulkan renderer into a layered game engine, by abstracting graphics and platform concerns away from high-level game code.
- Authored GLSL PBR shaders with TBN normal mapping and metallic-roughness-AO sampling, by Vulkan descriptor sets and material uniform buffers with gamma-correct albedo.
- Implemented point, directional, and spot lights in the Vulkan pipeline, by depth buffers, camera and light uniform buffers, and a light entity system.

### TileGame (Godot Game Jam)
*2026-02 – 2026-02 · https://github.com/TheRealStevenJackson/TileGame*

3D turn-based tile exploration game built in Godot 4.6 with Forward Plus rendering, shipped as a Windows PC build.

- Built a fog-of-war visual system with tweened Sprite3D billboards, revealing map tiles as the player explored the 3D turn-based world.
- Generated unique placeholder art for 100+ card resources in-editor, by an integrated @tool script assigning procedural textures directly to card data assets.
- Shipped a playable Windows PC build of a 3D turn-based tile game in a game jam, by Godot 4.6 Forward Plus rendering and Jolt Physics.

---

## Skills

C++ · Vulkan · OpenGL · Unity · Godot · GLSL · HLSL · PBR · Variable Rate Shading · Ray Tracing · GPU Driven Rendering · RenderDoc · Nsight

---

## Education

**Washington State University Vancouver** — Bachelor of Science in Computer Science, 2019-07
Graduated Cum Laude · President's Honor Roll
