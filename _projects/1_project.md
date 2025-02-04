---
layout: page
title: (Multiview wire art) MVWA - Dreamwire Relaxed
description: Given 2 or 3 images of line drawing, find a bunch of line in 3D such that when look at a certain direction will see the given image
img: assets/img/mvwa.png
importance: 1
category: work
---

This project is inspired by [dream wire](https://dreamwireart.github.io/). Their work looks really cool. But:
- I don't like the fact that I need to differentiate through a diffusion model for gradient step update
- I think the images could look a lot better if you don't include the constraint that the whole art is **ONE** wire.

I followed [dream wire](https://dreamwireart.github.io/) and extended [diffsvg](https://github.com/BachiLi/diffvg) to 3D. I, then, mimize the MSE loss between the rendering of [diffsvg](https://github.com/BachiLi/diffvg) and the target image to obtain a list 3D bezier curves.

### Notable findings:
- The thicker the lines, the better the results, as it is less constraint
- Three images are really hard to find solutions for. As a result there are a lot of thin floating wires around. Causes:
    - Part of the wire contribute to the stroke of the drawing, part of it is not. As a result, it thins itself
    - If part of the curve is initialized far away from a stroke, there are no gradients that goes to the control points and move it.

Enjoy the results below!