# Steven Jackson

Senior Software Engineer — Graphics and Rendering Systems

steven.jackson.gfx@gmail.com · 360-600-0283 · Issaquah, WA 98027
[LinkedIn](https://linkedin.com/in/steven-jackson-rendering) · [GitHub](https://github.com/TheRealStevenJackson)

---

## Summary

Graphics and rendering engineer with 6+ years designing and shipping GPU-focused performance optimizations and system-level rendering solutions. Patented Variable Rate Shading implementations adopted across millions of devices, with deep expertise in modern graphics pipelines spanning Vulkan, OpenGL, Unity, and ray tracing. Building a custom C++ game engine with PBR shaders, a multi-light rendering pipeline, and layered architecture; shipped a 3D Godot 4.6 game jam title on Windows PC with expressive camera and fog-of-war visual systems. Experienced driving technical initiatives from concept to production, collaborating with cross-functional partners, and balancing visual quality against strict CPU, GPU, and memory constraints.

---

## Professional Experience

### Software Engineer · InnoPeak Technology Inc
*2020-01 – present · Bellevue, WA*

- Designed and patented custom Variable Rate Shading implementations across OpenGL and Vulkan, achieving approximately 10% average rendering performance improvements on flagship devices and approximately 7% improvements in Unity engine integrations and ray tracing pipelines, while maintaining high visual fidelity.
- Architected the foundation for an OpenGL game interception platform by reverse engineering pipelines to identify systemic optimization opportunities, remaining a central internal standard five years post release.
- Designed and led a team of engineers to implement an AOSP system-wide layer caching feature reducing power consumption by 12% during high-frequency interaction scenarios, ultimately improving battery life on production devices.
- Collaborated directly with Android OS teams and GPU vendors including Qualcomm and MediaTek to deploy graphics optimizations at scale, ensuring consistent performance and power improvements across millions of consumer devices.
- Delivered internal technical presentations on emerging GPU features and forward-looking rendering techniques, influencing product direction and guiding adoption of advanced graphics capabilities across teams.

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
- Implemented a 3D orbit camera with mouse-wheel zoom and keyboard rotation around a character pivot, enabling expressive camera control for tile-based exploration.
- Authored an editor-integrated (@tool) script that procedurally generated unique placeholder card art for 100+ card resources and assigned textures directly to card data assets.
- Shipped a playable Windows PC build of a 3D turn-based tile game during a game jam using Godot 4.6 with Forward Plus rendering and Jolt Physics.

---

## Skills

C++ · Vulkan · OpenGL · Godot · Unity · GDScript · GLSL · HLSL · PBR · Variable Rate Shading · Ray Tracing · GPU Driven Rendering · RenderDoc · Nsight

---

## Education

**Washington State University Vancouver** — Bachelor of Science in Computer Science, 2019-07
Graduated Cum Laude · President's Honor Roll
