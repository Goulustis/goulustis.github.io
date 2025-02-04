---
layout: page
title: Multi-View wire art(MVWA) - Dreamwire Relaxed
description: Given 2 or 3 images of line drawing, find a bunch of line in 3D such that when look at a certain direction will see the given image
img: assets/img/mvwa.png
importance: 1
category: work
---

This project is inspired by [dream wire](https://dreamwireart.github.io/). Their work looks really cool. But:
- I don't like the fact that I need to differentiate through a diffusion model for gradient step update
- I think the images could look a lot better if you don't include the constraint that the whole art is **ONE** wire.

I followed [dream wire](https://dreamwireart.github.io/) and extended [diffsvg](https://github.com/BachiLi/diffvg) to 3D. I, then, mimize the MSE loss between the rendering of [diffsvg](https://github.com/BachiLi/diffvg) and the target image to obtain a list 3D bezier curves. I then added a bunch of secret sauces to get it working correctly.

### Notable findings:
- The thicker the lines, the better the results, as it is less constraint
- Three images are really hard to find solutions for. As a result there are a lot of thin floating wires around. Causes:
    - Part of the wire contribute to the stroke of the drawing, part of it is not. As a result, it thins itself
    - If part of the curve is initialized far away from a stroke, there are no gradients that goes to the control points and move it.

Enjoy the results below!

<h2 style="text-align: center;">Projection of 3D Curve</h2>

<div style="display: flex; justify-content: center;">
  <table>
    <tr>
        <th style="text-align: center;">Two Image Input Results</th>
        <th style="text-align: center;">Three Image Input Results</th>
    </tr>
    <tr>
      <td>{% include figure.liquid path="assets/img/proj_1/anime_2.png" title="Anime 2" class="img-fluid rounded" %}</td>
      <td>{% include figure.liquid path="assets/img/proj_1/anime_3.png" title="Anime 3" class="img-fluid rounded" %}</td>
    </tr>
    <tr>
      <td>{% include figure.liquid path="assets/img/proj_1/guys.png" title="Guys" class="img-fluid rounded" %}</td>
      <td>{% include figure.liquid path="assets/img/proj_1/pokemon.png" title="Pokemon" class="img-fluid rounded" %}</td>
    </tr>
  </table>
</div>


<style>
  /* 
    Example CSS for .loadMoreButton 
    - Rounded corners 
    - Blue-ish background 
    - White text 
    - Simple hover effect
  */
  .loadMoreButton {
    display: inline-block;
    padding: 10px 20px;
    border-radius: 8px;         /* Rounded corners */
    background-color: #007bff;  /* Blue-ish background */
    color: #fff;                /* White text */
    border: none;               /* Remove default border */
    cursor: pointer;            /* Pointer cursor on hover */
    font-size: 16px;            /* Increase font size slightly */
    transition: background-color 0.2s ease; /* Smooth hover transition */
  }

  /* Optional: Change color slightly on hover */
  .loadMoreButton:hover {
    background-color: #0056b3;  /* Darker blue on hover */
  }
</style>

<hr>
<div class="section" id="gallery">
  <div class="title" style="text-align: center; font-weight: bold; font-size: 2em;">Gallery</div>
  <p class="rp" style="text-align: center;">
    See the results in 3D! Loading takes a little time. Then swing the thing around to experience all the different perspectives!
  </p>

  <!-- Buttons -->
  <div style="text-align: center;">
    <button id="prevButton" class="loadMoreButton">Show the Previous!</button>
    <button id="nextButton" class="loadMoreButton">Show the Next!</button>
  </div>

  <!-- Container for currently visible group -->
  <div id="contentContainer" style="margin-top: 1rem;"></div>
</div>

<script>
  // Array of "groups" to show, one at a time.
  // Replace 'label' and 'iframeSrc' with your real data/files.
  const groups = [
    {
      label: "2D Result 1",
      iframeSrc: "/assets/html/proj_1/anime_2.html"
    },
    {
      label: "2D Result 2",
      iframeSrc: "/assets/html/proj_1/guys.html"
    },
    {
      label: "3D result 1",
      iframeSrc: "/assets/html/proj_1/anime_3.html"
    },
    {
      label: "3D result 2",
      iframeSrc: "/assets/html/proj_1/pokemon.html"
    }
  ];

  // Keep track of which group is displayed
  let currentIndex = 0;

  // Grab DOM elements for convenience
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  const contentContainer = document.getElementById("contentContainer");

  // Renders the currently selected group into the page
  function renderGroup() {
    const { label, iframeSrc } = groups[currentIndex] || {};
    
    // Replace content with the new group
    contentContainer.innerHTML = `
      <div class="group">
        <p class="box_tt" style="text-align: center; font-size: 1.5em;">${label}</p>
        <iframe 
          src="${iframeSrc}" 
          width="100%" 
          height="800px" 
          frameborder="0">
        </iframe>
        <hr>
      </div>
    `;
    
    // Update button states
    updateButtons();
  }

  // Enable/disable buttons if we're at the ends
  function updateButtons() {
    prevButton.disabled = (currentIndex <= 0);
    nextButton.disabled = (currentIndex >= groups.length - 1);
  }

  // Click handlers
  nextButton.addEventListener("click", () => {
    if (currentIndex < groups.length - 1) {
      currentIndex++;
      renderGroup();
    }
  });

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      renderGroup();
    }
  });

  // Render the initial group on page load
  renderGroup();
</script>