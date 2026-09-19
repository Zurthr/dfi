<template>
  <section class="about-hero">
    <div class="about-hero-inner">
      <!-- Text column -->
      <div class="about-hero-text">
        <!-- Eyebrow -->
        <p class="section-eyebrow">
          Built on <strong>trust</strong> and experience
        </p>

        <h1 class="about-hero-headline">
          More than a vendor.<br>Your long-term partner.
        </h1>

        <p class="about-hero-body">
          Since 2016, Delta Force Indonesia has helped national and multinational
          companies build systems, work discipline, and long-term trust through
          security services and workforce management that are compliant,
          professional, and continuously improving.
        </p>
      </div>

      <!-- Image column -->
      <div class="about-hero-image-col">
        <div class="about-hero-image-wrap">
          <img
            src="/images/Hero.png"
            alt="Delta Force Indonesia team on site"
            class="about-hero-img"
          />
          <!-- Floating badge bottom left -->
          <div class="about-hero-badge">
            <span class="badge-num">Since</span>
            <span class="badge-year">2016</span>
          </div>
          <!-- Floating logo badge top right -->
          <div class="about-hero-logo-badge">
            <img src="/images/logo-dfi.png" alt="Delta Force Indonesia Logo" class="badge-logo-img" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,700&display=swap');

.about-hero {
  position: relative;
  background: #f5f7fb;
  padding: 100px 32px 80px;
  overflow: hidden;
  font-family: 'Poppins', Helvetica, sans-serif;
}

/* ── inner layout ─── */
.about-hero-inner {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 64px;
}

/* ── text ─── */
.about-hero-text {
  flex: 0 0 auto;
  width: 480px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.section-eyebrow {
  font-size: 20px;
  font-weight: 400;
  color: #4B7FCA;
  margin: 0;
}
.section-eyebrow strong {
  font-weight: 700;
}

.about-hero-headline {
  font-size: 44px;
  font-weight: 700;
  color: #121A35;
  line-height: 1.15;
  margin: 0;
  letter-spacing: -1px;
}

.about-hero-body {
  font-size: 16px;
  color: #272947;
  line-height: 1.7;
  letter-spacing: -0.3px;
  margin: 0;
}

/* ── image ─── */
.about-hero-image-col {
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-hero-image-wrap {
  position: relative;
  width: 100%;
  max-width: 560px;
}

.about-hero-img {
  width: 100%;
  height: auto;
  border-radius: 24px;
  object-fit: cover;
  box-shadow: 0 12px 48px rgba(18, 26, 53, 0.14);
  display: block;
}

.about-hero-badge {
  position: absolute;
  bottom: -18px;
  left: -18px;
  background: #4B7FCA;
  color: #fff;
  border-radius: 16px;
  padding: 14px 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 8px 24px rgba(75, 127, 202, 0.35);
}

.badge-num {
  font-size: 11px;
  font-weight: 500;
  opacity: 0.85;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.badge-year {
  font-size: 28px;
  font-weight: 800;
  line-height: 1;
}

.about-hero-logo-badge {
  position: absolute;
  top: -32px;
  right: -32px;
  border-radius: 16px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.badge-logo-img {
  height: 64px;
  width: auto;
}

/* ── responsive ─── */
@media (max-width: 900px) {
  .about-hero-inner {
    flex-direction: column;
    gap: 40px;
  }
  .about-hero-text {
    width: 100%;
  }
  .about-hero-headline {
    font-size: 34px;
  }
  .about-hero-badge {
    bottom: -14px;
    left: 12px;
  }
  .about-hero-logo-badge {
    top: -14px;
    right: 12px;
  }
}
</style>
