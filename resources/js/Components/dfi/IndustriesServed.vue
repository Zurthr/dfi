<script setup>
const industries = [
  { label: 'Food, Livestock & Agribusiness', icon: '🌾' },
  { label: 'Banking & Multifinance', icon: '🏦' },
  { label: 'Chemicals & Petrochemicals', icon: '⚗️' },
  { label: 'Automotive', icon: '🚗' },
  { label: 'Manufacturing', icon: '🏭' },
  { label: 'Retail', icon: '🛒' },
  { label: 'Property & Township Development', icon: '🏙️' },
  { label: 'Healthcare', icon: '🏥' },
  { label: 'Construction', icon: '🏗️' },
  { label: 'Logistics & Services', icon: '📦' },
];
</script>

<template>
  <section class="industries-section">
    <div class="industries-inner">
      <!-- Header -->
      <div class="industries-header">
        <p class="section-eyebrow">
          Trusted <strong>across</strong> sectors
        </p>
        <h2 class="industries-headline">Industries We Serve</h2>
      </div>

      <!-- Industry grid -->
      <div class="industries-grid">
        <div
          v-for="ind in industries"
          :key="ind.label"
          class="industry-chip"
        >
          <span class="industry-icon">{{ ind.icon }}</span>
          <span class="industry-label">{{ ind.label }}</span>
        </div>
      </div>

      <!-- Supporting line -->
      <p class="industries-support">
        Trusted by <strong>Charoen Pokphand Indonesia</strong>, <strong>Bank Central Asia</strong>, <strong>Astra International</strong>, <strong>Ciputra</strong>, <strong>BYD</strong>, <strong>Lojel</strong>, and many more.
      </p>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,700&display=swap');

.industries-section {
  padding: 80px 32px;
  font-family: 'Poppins', Helvetica, sans-serif;
}

.industries-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

/* Header */
.industries-header {
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

.industries-headline {
  font-size: 42px;
  font-weight: 700;
  color: #121A35;
  line-height: 1.1;
  margin: 0;
  letter-spacing: -1px;
}

/* Industry chips grid */
.industries-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 14px;
}

.industry-chip {
  background: #ffffff;
  border: 1.5px solid rgba(18, 26, 53, 0.08);
  border-radius: 12px;
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
  cursor: default;
}

.industry-chip:hover {
  border-color: rgba(75, 127, 202, 0.28);
  box-shadow: 0 6px 20px rgba(75, 127, 202, 0.08);
  transform: translateY(-4px);
}

.industry-icon {
  font-size: 28px;
  line-height: 1;
}

.industry-label {
  font-size: 13px;
  font-weight: 500;
  color: #272947;
  line-height: 1.4;
  letter-spacing: -0.1px;
}

/* Supporting line */
.industries-support {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin: 0;
  padding-top: 8px;
  border-top: 1px solid rgba(18, 26, 53, 0.08);
}
.industries-support strong {
  color: #121A35;
  font-weight: 600;
}

/* Responsive */
@media (max-width: 900px) {
  .industries-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .industries-headline {
    font-size: 32px;
  }
}

@media (max-width: 560px) {
  .industries-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
