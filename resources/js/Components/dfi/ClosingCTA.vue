<template>
  <section class="closing-cta">
    <!-- Decorative shapes -->

    <div class="cta-inner">
      <h2 class="cta-headline">
        Let's build a partnership that makes us both stronger.
      </h2>
      <a href="/contact" class="btn-primary">
        Contact us
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,700&display=swap');

.closing-cta {
  bottom: -5px;
  position: relative;
  background: #203270;
  padding: 100px 32px;
  overflow: hidden;
  font-family: 'Poppins', Helvetica, sans-serif;
}

/* Decorative triangles */
.cta-shapes {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.cta-tri {
  position: absolute;
  overflow: visible;
}

.cta-tri-1 {
  top: 10%; left: 3%;
  width: 120px; height: 120px;
  fill: #4B7FCA; stroke: #4B7FCA;
  transform: rotate(-20deg);
  opacity: 0.12;
}
.cta-tri-2 {
  bottom: 8%; right: 4%;
  width: 150px; height: 150px;
  fill: #B87678; stroke: #B87678;
  transform: rotate(14deg);
  opacity: 0.10;
}
.cta-tri-3 {
  top: 50%; left: 45%;
  width: 90px; height: 90px;
  fill: #7B5EA7; stroke: #7B5EA7;
  transform: rotate(30deg);
  opacity: 0.08;
}

/* Inner content */
.cta-inner {
  position: relative;
  z-index: 1;
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  text-align: center;
}

.cta-headline {
  font-size: 42px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
  letter-spacing: -1px;
  margin: 0;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #4B7FCA;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  padding: 14px 28px;
  border-radius: 24px;
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
  letter-spacing: -0.4px;
  font-family: 'Poppins', Helvetica, sans-serif;
}

.btn-primary:hover {
  background: #3a6cb8;
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(75, 127, 202, 0.4);
}

/* Responsive */
@media (max-width: 640px) {
  .cta-headline {
    font-size: 28px;
  }
  .closing-cta {
    padding: 72px 24px;
  }
}
</style>
