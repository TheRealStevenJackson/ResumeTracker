# Steven Jackson

Senior Software Engineer — Graphics Productization and Rendering Systems

steven.jackson.gfx@gmail.com · 360-600-0283 · Issaquah, WA 98027
[LinkedIn](https://linkedin.com/in/steven-jackson-rendering) · [GitHub](https://github.com/TheRealStevenJackson)

---

## Summary

Graphics and rendering engineer with 6+ years productizing GPU-focused rendering technology from research prototypes to fleet-wide deployment on millions of devices. Inventor on patented Variable Rate Shading, led layer-caching delivery while onboarding engineers via a reusable architecture template, and built durable game-graphics middleware integrating optimizations into flagship titles including PUBG and Honor of Kings. Hands-on in modern C++, HLSL, and GLSL across Vulkan, OpenGL ES, Unity, and AOSP — with partner-facing technical leadership at Qualcomm and across GPU vendors. Building a C++ Vulkan game engine with PBR pipelines and layered architecture; experienced transforming breakthrough rendering ideas into documented, shippable systems under strict quality and performance bars.

---

## Professional Experience

### Software Engineer · InnoPeak Technology Inc
*2020-01 – present · Bellevue, WA*

- Sole owner of variable-rate shading R&D as inventor on three related patents, shipping API VRS on all company devices with ~10% rendering gains on flagship hardware.
- Led AOSP layer caching to all company production devices with 12% lower power during high-frequency UI interactions, by owning architecture and onboarding two engineers via a reusable template.
- Improved Unity rendering performance ~7% with a Vulkan-intercepted VRS plugin, by writing HLSL shaders and pre-generating shading-rate attachments at instance and device creation before context init.
- Shipped frame-based API Variable Rate Shading on production devices with ~7–10% rendering gains, by replacing texture-based per-texture shading in the OpenGL ES interception layer.
- Contributed to OpenGL ES game interception still used five years after release, by defining per-call analysis APIs and graphics signals for frame structure, game mode, and texture-based shading rates.
- Owned per-title optimization modules for PUBG and Honor of Kings on the shared platform, by reverse-engineering OpenGL call sequences and frame patterns for state-specific GPU tuning.
- Presented VRS research at Qualcomm headquarters and collaborated with Android OS and GPU vendors, deploying optimizations across millions of consumer devices with production VRS rollout.
- Contributed to AOSP unified rendering shipping on production devices, consolidating UI into one SurfaceFlinger renderer context, by replacing per-app buffer queues with display-list submission.

---

## Technical Projects

### Vulkan Game Engine
*2025-01 – present · https://github.com/TheRealStevenJackson/VulkanGameEngine*

Personal Vulkan game engine with layered architecture, PBR pipeline, and platform abstraction.

- Evolved a custom Vulkan renderer into a layered game engine, by abstracting graphics and platform concerns away from high-level game code.
- Authored GLSL PBR shaders with TBN normal mapping and metallic-roughness-AO sampling, by Vulkan descriptor sets and material uniform buffers with gamma-correct albedo.
- Implemented point, directional, and spot lights in the Vulkan pipeline, by depth buffers, camera and light uniform buffers, and a light entity system.

---

## Skills

C++ · Vulkan · OpenGL · Unity · GLSL · HLSL · PBR · Variable Rate Shading · Ray Tracing · GPU Driven Rendering · RenderDoc · Nsight

---

## Education

**Washington State University Vancouver** — Bachelor of Science in Computer Science, 2019-07
Graduated Cum Laude · President's Honor Roll
