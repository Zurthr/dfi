<template>
  <div class="bg-triangles" aria-hidden="true">
    <!-- Left flank shapes -->
    <svg class="triangle triangle-1" viewBox="0 0 100 100"><polygon points="50,18 84,78 16,78" stroke-linejoin="round" stroke-width="12"/></svg>
    <svg class="triangle triangle-2" viewBox="0 0 100 100"><polygon points="50,18 84,78 16,78" stroke-linejoin="round" stroke-width="12"/></svg>
    <svg class="triangle triangle-3" viewBox="0 0 100 100"><polygon points="50,18 84,78 16,78" stroke-linejoin="round" stroke-width="12"/></svg>
    <svg class="triangle triangle-5" viewBox="0 0 100 100"><polygon points="50,18 84,78 16,78" stroke-linejoin="round" stroke-width="12"/></svg>
    <svg class="triangle triangle-6" viewBox="0 0 100 100"><polygon points="50,18 84,78 16,78" stroke-linejoin="round" stroke-width="12"/></svg>
    <svg class="triangle triangle-7" viewBox="0 0 100 100"><polygon points="50,18 84,78 16,78" stroke-linejoin="round" stroke-width="12"/></svg>

    <!-- True Center shapes -->
    <svg class="triangle triangle-c1" viewBox="0 0 100 100"><polygon points="50,18 84,78 16,78" stroke-linejoin="round" stroke-width="12"/></svg>
    <svg class="triangle triangle-c2" viewBox="0 0 100 100"><polygon points="50,18 84,78 16,78" stroke-linejoin="round" stroke-width="12"/></svg>
    <svg class="triangle triangle-c3" viewBox="0 0 100 100"><polygon points="50,18 84,78 16,78" stroke-linejoin="round" stroke-width="12"/></svg>

    <!-- Right flank shapes -->
    <svg class="triangle triangle-8" viewBox="0 0 100 100"><polygon points="50,18 84,78 16,78" stroke-linejoin="round" stroke-width="12"/></svg>
    <svg class="triangle triangle-9" viewBox="0 0 100 100"><polygon points="50,18 84,78 16,78" stroke-linejoin="round" stroke-width="12"/></svg>
    <svg class="triangle triangle-10" viewBox="0 0 100 100"><polygon points="50,18 84,78 16,78" stroke-linejoin="round" stroke-width="12"/></svg>
    <svg class="triangle triangle-11" viewBox="0 0 100 100"><polygon points="50,18 84,78 16,78" stroke-linejoin="round" stroke-width="12"/></svg>
    <svg class="triangle triangle-13" viewBox="0 0 100 100"><polygon points="50,18 84,78 16,78" stroke-linejoin="round" stroke-width="12"/></svg>
    <svg class="triangle triangle-14" viewBox="0 0 100 100"><polygon points="50,18 84,78 16,78" stroke-linejoin="round" stroke-width="12"/></svg>
  </div>
</template>

<style scoped>
.bg-triangles {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1440px;
  height: 100vh;
  pointer-events: none;
  z-index: 0;
}

.triangle {
  position: absolute;
  pointer-events: none;
  overflow: visible;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.02));
}

/* Left Flank Shapes */
.triangle-1 {
  top: 4%; left: 2%; width: 140px; height: 140px;
  fill: #4B7FCA; stroke: #4B7FCA; transform: rotate(-18deg); opacity: 0.14;
}
.triangle-2 {
  top: 22%; left: 12%; width: 90px; height: 90px;
  fill: #B87678; stroke: #B87678; transform: rotate(24deg); opacity: 0.12;
}
.triangle-3 {
  top: 42%; left: 1%; width: 110px; height: 110px;
  fill: #7B5EA7; stroke: #7B5EA7; transform: rotate(-12deg); opacity: 0.10;
}
.triangle-4 {
  top: 60%; left: 9%; width: 130px; height: 130px;
  fill: #4B7FCA; stroke: #4B7FCA; transform: rotate(15deg); opacity: 0.12;
}
.triangle-5 {
  top: 78%; left: 3%; width: 150px; height: 150px;
  fill: #B87678; stroke: #B87678; transform: rotate(-20deg); opacity: 0.13;
}
.triangle-6 {
  top: 91%; left: 14%; width: 75px; height: 75px;
  fill: #4B7FCA; stroke: #4B7FCA; transform: rotate(10deg); opacity: 0.09;
}
.triangle-7 {
  top: 30%; left: 18%; width: 60px; height: 60px;
  fill: #7B5EA7; stroke: #7B5EA7; transform: rotate(-30deg); opacity: 0.08;
}

/* True Center Shapes */
.triangle-c1 {
  top: 12%; left: 50%; width: 100px; height: 100px;
  fill: #4B7FCA; stroke: #4B7FCA; transform: translateX(-50%) rotate(8deg); opacity: 0.11;
}
.triangle-c2 {
  top: 45%; left: 48%; width: 120px; height: 120px;
  fill: #B87678; stroke: #B87678; transform: translateX(-50%) rotate(-15deg); opacity: 0.09;
}
.triangle-c3 {
  top: 76%; left: 52%; width: 110px; height: 110px;
  fill: #7B5EA7; stroke: #7B5EA7; transform: translateX(-50%) rotate(22deg); opacity: 0.10;
}
.triangle-c4 {
  top: 32%; left: 51%; width: 70px; height: 70px;
  fill: #4B7FCA; stroke: #4B7FCA; transform: translateX(-50%) rotate(-6deg); opacity: 0.08;
}

/* Right Flank Shapes */
.triangle-8 {
  top: 6%; right: 3%; width: 145px; height: 145px;
  fill: #B87678; stroke: #B87678; transform: rotate(16deg); opacity: 0.13;
}
.triangle-9 {
  top: 24%; right: 11%; width: 95px; height: 95px;
  fill: #4B7FCA; stroke: #4B7FCA; transform: rotate(-18deg); opacity: 0.11;
}
.triangle-10 {
  top: 44%; right: 2%; width: 115px; height: 115px;
  fill: #7B5EA7; stroke: #7B5EA7; transform: rotate(22deg); opacity: 0.10;
}
.triangle-11 {
  top: 64%; right: 10%; width: 135px; height: 135px;
  fill: #B87678; stroke: #B87678; transform: rotate(-15deg); opacity: 0.12;
}
.triangle-12 {
  top: 80%; right: 4%; width: 125px; height: 125px;
  fill: #4B7FCA; stroke: #4B7FCA; transform: rotate(12deg); opacity: 0.14;
}
.triangle-13 {
  top: 93%; right: 15%; width: 80px; height: 80px;
  fill: #7B5EA7; stroke: #7B5EA7; transform: rotate(-10deg); opacity: 0.09;
}
.triangle-14 {
  top: 34%; right: 17%; width: 65px; height: 65px;
  fill: #4B7FCA; stroke: #4B7FCA; transform: rotate(32deg); opacity: 0.08;
}
</style>
