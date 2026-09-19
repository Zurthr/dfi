<script setup>
const values = [
  {
    icon: '⚖️',
    name: 'Integrity',
    desc: 'Honesty, transparency, and legal compliance.',
    color: '#4B7FCA',
  },
  {
    icon: '🤝',
    name: 'Trustworthiness',
    desc: 'Keeping every commitment with full responsibility.',
    color: '#B87678',
  },
  {
    icon: '🏅',
    name: 'Professionalism',
    desc: 'The highest standards, discipline, and commitment to excellence.',
    color: '#7B5EA7',
  },
  {
    icon: '🔗',
    name: 'Collaboration',
    desc: 'Long-term partnerships with every stakeholder.',
    color: '#4B7FCA',
  },
  {
    icon: '💡',
    name: 'Innovation',
    desc: 'New technology and methods for better outcomes.',
    color: '#B87678',
  },
  {
    icon: '🌿',
    name: 'Sustainability',
    desc: 'Managing risk to protect our client&apos;s continuity.',
    color: '#7B5EA7',
  },
];
</script>

<template>
  <section class="core-values">
    <div class="core-values-inner">
      <!-- Header -->
      <div class="core-values-header">
        <p class="section-eyebrow">
          What <strong>guides</strong> us
        </p>
        <h2 class="core-values-headline">Our Core Values</h2>
      </div>

      <!-- Values grid -->
      <div class="values-grid">
        <div
          v-for="val in values"
          :key="val.name"
          class="value-card"
        >
          <div class="value-icon" :style="{ background: val.color + '18' }">
            <span class="value-emoji">{{ val.icon }}</span>
          </div>
          <h3 class="value-name">{{ val.name }}</h3>
          <p class="value-desc">{{ val.desc }}</p>
          <div class="value-accent" :style="{ background: val.color }"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,700&display=swap');

.core-values {
  background: #f5f7fb;
  padding: 80px 32px;
  font-family: 'Poppins', Helvetica, sans-serif;
}

.core-values-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 44px;
}

/* Header */
.core-values-header {
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

.core-values-headline {
  font-size: 42px;
  font-weight: 700;
  color: #121A35;
  line-height: 1.1;
  margin: 0;
  letter-spacing: -1px;
}

/* Values grid */
.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.value-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  overflow: hidden;
  border: 1.5px solid rgba(18, 26, 53, 0.06);
  transition: transform 0.22s, box-shadow 0.22s;
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 40px rgba(18, 26, 53, 0.10);
}

.value-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.value-emoji {
  font-size: 22px;
  line-height: 1;
}

.value-name {
  font-size: 18px;
  font-weight: 700;
  color: #121A35;
  margin: 0;
  line-height: 1.2;
}

.value-desc {
  font-size: 14px;
  color: #272947;
  line-height: 1.6;
  margin: 0;
  letter-spacing: -0.2px;
}

/* Bottom accent stripe */
.value-accent {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  opacity: 0;
  transition: opacity 0.22s;
}

.value-card:hover .value-accent {
  opacity: 1;
}

/* Responsive */
@media (max-width: 900px) {
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .core-values-headline {
    font-size: 32px;
  }
}

@media (max-width: 560px) {
  .values-grid {
    grid-template-columns: 1fr;
  }
}
</style>
