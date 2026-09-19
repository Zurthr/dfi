<script setup>
const missions = [
  { num: '01', title: 'Security Technology Innovation',  desc: 'Implementing AI-powered CCTV, access control systems, and digital monitoring to make our services more effective, efficient, and responsive.' },
  { num: '02', title: 'Quality Service',                 desc: 'Delivering professional, reliable security and outsourcing services that keep client operations running.' },
  { num: '03', title: 'National Security Partnership',   desc: 'Collaborating with TNI, Polri, and local governments to provide trained personnel who strengthen security for businesses and communities.' },
  { num: '04', title: 'Human Capital Development',       desc: 'Running continuous training, certification, and coaching to raise workforce competence and professionalism.' },
  { num: '05', title: 'Operational Expansion',           desc: 'Growing our service network by opening branch offices in strategic cities.' },
  { num: '06', title: 'Sustainability & Social Responsibility', desc: 'Operating responsibly toward the environment and actively running CSR programs.' },
];

const values = [
  { initial: 'I', name: 'Integrity',       desc: 'Honesty, transparency, and legal compliance.',                              color: '#4B7FCA' },
  { initial: 'T', name: 'Trustworthiness', desc: 'Keeping every commitment with full responsibility.',                        color: '#B87678' },
  { initial: 'P', name: 'Professionalism', desc: 'The highest standards, discipline, and commitment to excellence.',          color: '#7B5EA7' },
  { initial: 'C', name: 'Collaboration',   desc: 'Long-term partnerships with every stakeholder.',                            color: '#4B7FCA' },
  { initial: 'I', name: 'Innovation',      desc: 'New technology and methods for better outcomes.',                           color: '#B87678' },
  { initial: 'S', name: 'Sustainability',  desc: "Managing risk to protect our clients' continuity.",                         color: '#7B5EA7' },
];
</script>

<template>
  <section class="vm-section">
    <div class="vm-inner">

      <!-- ─── VISION & MISSION ─────────────────────────────── -->
      <div class="vm-header">
        <p class="section-eyebrow">Where we're <strong>heading</strong></p>
        <h2 class="vm-headline">Vision &amp; Mission</h2>
      </div>

      <!-- Vision — solid dark block -->
      <div class="vision-card">
        <div class="vision-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
          </svg>
          Vision
        </div>
        <p class="vision-text">
          To be a nationally and regionally recognized security and workforce management company, delivering integrated, technology-driven solutions that support our clients' business continuity.
        </p>
      </div>

      <!-- Mission label -->
      <div class="sub-label-row">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
        Mission
      </div>

      <!-- Mission grid -->
      <div class="mission-grid">
        <div v-for="item in missions" :key="item.num" class="mission-card">
          <span class="mission-num">{{ item.num }}</span>
          <h3 class="mission-title">{{ item.title }}</h3>
          <p class="mission-desc">{{ item.desc }}</p>
        </div>
      </div>

      <!-- ─── DIVIDER ──────────────────────────────────────── -->
      <div class="section-divider"></div>

      <!-- ─── CORE VALUES ──────────────────────────────────── -->
      <div class="cv-header">
        <p class="section-eyebrow">What <strong>guides</strong> us</p>
        <h2 class="vm-headline">Our Core Values</h2>
      </div>

      <div class="values-grid">
        <div v-for="val in values" :key="val.name" class="value-card">
          <!-- Left: colored initial block -->
          <div class="value-initial" :style="{ background: val.color }">{{ val.initial }}</div>
          <!-- Right: text -->
          <div class="value-body">
            <h3 class="value-name">{{ val.name }}</h3>
            <p class="value-desc">{{ val.desc }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,700&display=swap');

.vm-section {
  position: relative;
  z-index: 500;
  padding: 80px 32px;
  font-family: 'Poppins', Helvetica, sans-serif;
}

.vm-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

/* ── Eyebrow / headline shared ── */
.section-eyebrow { font-size: 20px; font-weight: 400; color: #4B7FCA; margin: 0; }
.section-eyebrow strong { font-weight: 700; }

.vm-headline {
  font-size: 42px; font-weight: 700; color: #121A35;
  line-height: 1.1; margin: 0; letter-spacing: -1px;
}

.vm-header   { display: flex; flex-direction: column; gap: 6px; }
.cv-header   { display: flex; flex-direction: column; gap: 6px; }

/* ── Vision card — solid dark ── */
.vision-card {
  background: #121A35;
  border-radius: 16px;
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.vision-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(75, 127, 202, 0.25);
  color: #91b4e8;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  padding: 4px 12px;
  border-radius: 20px;
  width: fit-content;
}

.vision-text {
  font-size: 17px;
  color: rgba(255, 255, 255, 0.88);
  line-height: 1.7;
  font-weight: 400;
  margin: 0;
  letter-spacing: -0.2px;
}

/* ── Sub label (Mission / Core Values) ── */
.sub-label-row {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  color: #4B7FCA;
  margin-bottom: -8px;
}

/* ── Mission grid ── */
.mission-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.mission-card {
  background: #f5f7fb;
  border-radius: 12px;
  padding: 20px 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  border: 1.5px solid transparent;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
}

.mission-card:hover {
  border-color: rgba(75, 127, 202, 0.22);
  box-shadow: 0 6px 22px rgba(75, 127, 202, 0.08);
  transform: translateY(-2px);
}

.mission-num {
  font-size: 11px; font-weight: 700;
  color: #4B7FCA; opacity: 0.6; letter-spacing: 1px;
}

.mission-title {
  font-size: 15px; font-weight: 700;
  color: #121A35; margin: 0; line-height: 1.3;
}

.mission-desc {
  font-size: 13px; color: #272947;
  line-height: 1.55; margin: 0; letter-spacing: -0.15px;
}

/* ── Divider ── */
.section-divider {
  height: 1px;
  background: rgba(18, 26, 53, 0.08);
  margin: 8px 0;
}

/* ── Values grid ── */
.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.value-card {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #f5f7fb;
  border-radius: 12px;
  padding: 18px 16px;
  border: 1.5px solid transparent;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
}

.value-card:hover {
  border-color: rgba(75, 127, 202, 0.18);
  box-shadow: 0 5px 18px rgba(18, 26, 53, 0.07);
  transform: translateY(-2px);
}

.value-initial {
  flex-shrink: 0;
  width: 36px; height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.5px;
  margin-top: 1px;
}

.value-body {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.value-name {
  font-size: 15px; font-weight: 700;
  color: #121A35; margin: 0; line-height: 1.2;
}

.value-desc {
  font-size: 13px; color: #272947;
  line-height: 1.5; margin: 0; letter-spacing: -0.15px;
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .mission-grid, .values-grid { grid-template-columns: repeat(2, 1fr); }
  .vm-headline { font-size: 32px; }
}

@media (max-width: 560px) {
  .mission-grid, .values-grid { grid-template-columns: 1fr; }
  .vision-card { padding: 22px 18px; }
}
</style>
