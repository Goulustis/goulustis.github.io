---
layout: page
title: Image To Line Art
description: Takes any generic image and turn it into line art
img: assets/img/img2lineart_example.png
importance: 1
category: work
---

It is 2025 and I can't believe there isn't a reasonable project that turns images into line art available online with all the
ai widzary going on. So I did it myself.

## Details
This is done with image2image with canny control net using [stable diffusion(SD) webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui)'s api.
The initial image for the SD model is a blank image. Most importantly `denoising_strength` is set between `0.9 - 0.95`. Using control net, the diffusion model generates the image conditioned on the canny edge with.
With a text prompt on the lines of this:
- `line art drawing, line art, black line art, black line, black color, black lines, a line drawing, monochrome`

The SD will give you reasonable pencil drawing results which is not exactly line art yet. This is problem is actually suprising easy to fix.
Passing the output through the same pipeline will improve result significantly.

Code is available here [https://github.com/Goulustis/img2lineart/tree/main](https://github.com/Goulustis/img2lineart/tree/main)



<h2 style="text-align: center;">Example result</h2>
<div style="max-width: 600px; margin: auto;">
  {% include figure.liquid loading="eager" path="assets/img/img2lineart_example.png" class="img-fluid rounded z-depth-1" %}
</div>