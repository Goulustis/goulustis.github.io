---
layout: post
title: Siggraph Asia 2025 Overview
date: 2025-12-19 00:51:00
description: Siggraph Asia 2025 Overview
# tags: random
# categories: random
thumbnail: assets/img/siggraph_asia_2025.jpg
---

# Things remembered from SIGGRAPH ASIA 2025

### Papers
- Physics-based Motion Imitation with adversarial differential discriminator
    - Manual tuning is required to balance the different rewards in a RL system for the agent to learn desirable motion. They used a discriminator instead. So the loss becomse $-\log(1-D(\Delta r))$ where $\Delta r$ is the error (assuming supervised learning). True examples would be a zero vector compared to the error vector.
- Temporally Smooth Mesh Extraction for Procedural Scenes with Long-Range Camera Trajectories using Spacetime Octrees 
    - cool tree split in time dimension for different resolution of render from occupancy function
- ASIA: Adaptive 3D Segmentation using Fiew Image Annotations
    - Given image with desired segmentation, learn some correlation embedding in a diffusion model for those regions. Use the embeddings to classify renders of the mesh from different view. Maintain multi-view consistency by voting and consensus between views
- Underwater Optical Backscatter Communication using Acousto-Optic Beam Steering
    - Problem formulation: When under water, WIFI, Radio don't work. Using lazer to communicate for the underwater rover is too engergy intensive + only sending Kb level of data
    - proposed solution: Attatch the lazer on the ship on the surface instead. Attach a mirror on the underwater rover. Play sound onto the reflected light to transmit information back. Information on Kb level
- MVP4D: Multi-View Portrait Video Diffusion for Animatable 4D Avatars
    - Given a single human portrain image, estimate a 3dmm parameter as reference. From that reference, generate facial animations. Yank the animations into a diffusion model and yank some noise in. Voila, a simple dataset of the identity. Yank that to a 4D 3dmm, and voila 3d animatable human
- GS-RoadPatching: Inpainting Gaussians VIA 3D Searching And Placing for Driving Scenes.
    - Inspired by patch inpainting techniques, for missing patches of gaussians, say for a road, find regions of gaussians of simular properties and fill it in. Due to view dependence of retrieved patch, the stiched patch does not look appealing. So, they use the source view of the retrieved patch as psuedo ground truth and train the stiched path to look like the source patch.
- WireDrum: An Interpersonal and Multimodal Skill-Sharing System for an Augmented Drumming Experience
    - Attach electric node on student, when the teacher does a drumm hitting action. Shocks the student's muscle to do the same thing
- Hapticus: A Haptic Customization tool for effective Physical Skill Learning
    - Introduced 2 approaches: 1) electric shock 2) a exoskeleton that will make the finger press on piano key. More experienced learner prefer electric shocks
- Spectral prefiltering of Neural networks:
    - apply kernal to images learned as neural networks
    - consider a image encoded as a MLP with positional encoding, applying a kernal, eg. a bandpass filter, is equivalent to applying the a filter in the fourier space. By generating different gaussian filters and train, the MLP generalize and learns formulations of different filters
- Neural Image Abstraction Using Long Smoothing B-splines
    - Better formulated initialization compared to random init
    - use B-splines for better optimization of stroke positions
- **QMF-BLEND: Quantized Matrix Factorization for Efficient Blendshape Compression** (my favourite)
    - Prelim: A blendshape is a reference head mesh $R$ with $\Delta r$ that describe possible morphing (similar to orthogonal basis). So, $R + W\Delta r$ describes all possible expression
    - Method notable ideas:
        - use matrix factorization to sparcify $\Delta r$ for storage
        - add a laplacian to ensure smoothness. Specifically, the laplacian is on the error of the factorization and not the factorization. If applied on the factorization, facial wrinkles will be removed
        - find locations with surface difformations and push non-zero values to those areas by importance weighting.
        - Finally, quantize
- Gaussian See, Gaussian Do: Semantic 3D Motion Transfer from Multiview Video:
    - Define object centric embeddings based on angles. For different angles use slerp interpolation between the embeddings and to find the inverted motion embedding
    - Condition on a reference identity target image and the motion embeddings to obtain a video of the target identity doing the source motion
    - Yank that onto a gaussian. Voila!
- Fast and stable control of coupled solid-fluid dynamic systems
    - cool ball flying. Looks really cool
- HR $\text{M}^2$ Avatar: High-Fidelity Real-Time Mobile Avatars from Monocular Phone scans$
    - 3D representation of Gaussian that runs on phones

### Camera control video-gen papers
- Context As Memory: Scene-Consistent Interactive Long Video Generation with memory retrieval
    - RAG based retrieval of seen latents based on previous camera trajectory. Makes video generators consistent
- CamCloneMaster: Enabling Reference-based camera control for Video Generation
    - Clones reference camera motion to target scene

### HCI papers (Funny; Posters only)
- GPStroke: A walking Promotion Method using GPS Art with Multiple walking Paths
    - Walk paths such that they look like images. Encourage walking
- Neck-Warn Tactile Choker
    - A neck chocker with different vibrators. Example usage: When following map directions, vibration tells direction so no need to look at phone
- Towards wearable-free Exergame for Orthostatic Dyregulation: Improving Motion Detection with Smartphone-Only Calibration
    - Game that doesn't use hand to play, use legs instead to fix some issues
- Acoustic form: Enhancing the design process for assistive earwear jewlry via material-centric computational sound analysis
    - Stigma towards assistive hearing devices. Here, they make the device looks like jewlery so people will wear them by evaluating geometry and material choice before 

### Manufacture papers
- Curve-Based Slicer for Multi-Axis DLP
    - water based with rotating arm. The arm rotation removes the need for support structures
- INF-3DP: Implicit Neural Fields for Collision-Free multi-axis 3D printing
    - Finds a rotating arm trajectory to 3D print objects without contact
- Can Any Model Be Frabricated? Inverse Operation Based Planning for Hybrid Additive-Subtractive Manufacturing
    - First attempt at printing by adding and subtracting with a voxel based planning approach

### Demos:
- Enhanced Touch: Delivering vibrotile and Thermal feedback without fingerpad contact
    - Different vibrations for touching of different materials on ipad.
    - On water: Vibration + cold
    - On warm water: Vibration + warm
- Pro's Eyes: A Wearable system for synchronous and asynchronous observational pattern learning:
    - a glasses that have recordings of expert. When a user wears the glasses, it will replay the eye movement. Examples:
        - replay the eye movement of a arts professor of how he/she observe the art
        - replay eye movement of a police officer looking for suspect in a crowd

### Memorable company:
- Unicus:
    - Image $\to$ 3d lego pieces. Print the lego and sells it.
