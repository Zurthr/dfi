<script setup>
const stats = [
  { value: '100+', label: 'Corporate Clients' },
  { value: '4,800+', label: 'Workforce' },
  { value: '5', label: 'Branch Offices' },
  { value: '36', label: 'Cities & Regencies' },
];

/**
 * Indonesia SVG map — simplified outline with pins.
 * Pins are placed at approximate SVG coordinate positions.
 * viewBox: 0 0 1000 500
 */
const mapPins = [
  // Sumatra (west)
  { cx: 155, cy: 210, label: 'Lampung' },
  { cx: 125, cy: 185, label: 'Palembang' },
  { cx: 85,  cy: 150, label: 'Medan' },
  // Java
  { cx: 245, cy: 255, label: 'Head Office · Serang', isHQ: true },
  { cx: 285, cy: 258, label: 'Jakarta' },
  { cx: 340, cy: 260, label: 'Semarang' },
  { cx: 385, cy: 265, label: 'Surabaya' },
  // Kalimantan
  { cx: 500, cy: 195, label: 'Balikpapan' },
  { cx: 450, cy: 165, label: 'Pontianak' },
  // Sulawesi
  { cx: 630, cy: 210, label: 'Makassar' },
  { cx: 665, cy: 175, label: 'Palu' },
];
</script>

<template>
  <section class="our-reach">
    <div class="our-reach-inner">
      <!-- Header -->
      <div class="our-reach-header">
        <p class="section-eyebrow">
          Protection <strong>all across</strong> Indonesia
        </p>
        <h2 class="our-reach-headline">Our Reach</h2>
      </div>

      <!-- Stats row -->
      <div class="reach-stats">
        <div
          v-for="(stat, i) in stats"
          :key="i"
          class="reach-stat-block"
        >
          <div class="reach-stat-value">{{ stat.value }}</div>
          <div class="reach-stat-label">{{ stat.label }}</div>
          <div v-if="i < stats.length - 1" class="reach-stat-divider"></div>
        </div>
      </div>

      <!-- Body -->
      <p class="reach-body">
        Headquartered in Serang, Banten, with operations stretching from Sumatra to Sulawesi.
      </p>

      
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,700&display=swap');

.our-reach {
  position: relative;
  z-index: 1;
  background: linear-gradient(to top, #ffffff 0%, #ffffff 90%, rgba(255, 255, 255, 0));
  padding: 80px 32px;
  font-family: 'Poppins', Helvetica, sans-serif;
}

.our-reach-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 44px;
}

/* Header */
.our-reach-header {
  display: flex;
  flex-direction: column;
  gap: 8px;
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

.our-reach-headline {
  font-size: 42px;
  font-weight: 700;
  color: #121A35;
  line-height: 1.1;
  margin: 0;
  letter-spacing: -1px;
}

/* Stats row */
.reach-stats {
  display: flex;
  align-items: stretch;
  gap: 0;
  background: #f5f7fb;
  border-radius: 16px;
  border: 1.5px solid rgba(18,26,53,0.06);
  overflow: hidden;
}

.reach-stat-block {
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 28px 20px;
  text-align: center;
}

.reach-stat-value {
  font-size: 48px;
  font-weight: 800;
  color: #121A35;
  line-height: 1;
  letter-spacing: -1px;
  background: linear-gradient(90deg, #4B7FCA 0%, #7B5EA7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.reach-stat-label {
  font-size: 13px;
  color: #666;
  margin-top: 6px;
  font-weight: 500;
}

.reach-stat-divider {
  width: 1px;
  background: rgba(18, 26, 53, 0.1);
  align-self: stretch;
  flex-shrink: 0;
}

/* Body */
.reach-body {
  font-size: 16px;
  color: #272947;
  line-height: 1.65;
  margin: 0;
  letter-spacing: -0.3px;
}

/* Map */
.map-container {
  background: linear-gradient(
    145deg,
    rgba(75, 127, 202, 0.04) 0%,
    rgba(123, 94, 167, 0.03) 100%
  );
  border: 1.5px solid rgba(75, 127, 202, 0.12);
  border-radius: 20px;
  padding: 32px 24px;
  overflow: hidden;
}

.indo-map {
  width: 100%;
  height: auto;
}

/* Responsive */
@media (max-width: 700px) {
  .reach-stats {
    flex-direction: column;
  }
  .reach-stat-divider {
    width: auto;
    height: 1px;
    align-self: auto;
  }
  .our-reach-headline {
    font-size: 32px;
  }
  .reach-stat-value {
    font-size: 38px;
  }
}
</style>
