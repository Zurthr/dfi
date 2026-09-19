<script setup>
const checklist = [
  'Security personnel certified at Gada Pratama level',
  'Routine OHS, fire drill, and first aid training',
  'Experienced supervisors with TNI/Polri backgrounds',
  'ISO 9001:2015 (Quality Management) and ISO 45001:2018 (Occupational Health & Safety) certified',
  'Officially licensed by Indonesian National Police Headquarters (SIO Mabes Polri)',
  'Member of ABUJAPI (Indonesian Security Services Business Association)',
];
</script>

<template>
  <section class="why-dfi">
    <div class="why-dfi-inner">
      <!-- Left column: text -->
      <div class="why-dfi-text">
        <p class="section-eyebrow">
          Standards you can <strong>verify</strong>
        </p>
        <h2 class="why-dfi-headline">Why Delta Force Indonesia</h2>
        <p class="why-dfi-intro">
          Every placement is backed by certified people, recognized systems, and official licensing.
        </p>

        <!-- Checklist -->
        <ul class="why-checklist">
          <li v-for="(item, i) in checklist" :key="i" class="checklist-item">
            <span class="check-icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </span>
            <span class="check-text">{{ item }}</span>
          </li>
        </ul>
      </div>

      <!-- Right column: decorative certifications block -->
      <div class="why-dfi-visual">
        <div class="cert-card">
          <div class="cert-card-header">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/>
            </svg>
            <span>Certified & Licensed</span>
          </div>

          <div class="cert-badges">
            <div class="cert-badge cert-badge--blue">
              <span class="cert-short">ISO</span>
              <span class="cert-full">9001:2015</span>
              <span class="cert-sub">Quality Management</span>
            </div>
            <div class="cert-badge cert-badge--purple">
              <span class="cert-short">ISO</span>
              <span class="cert-full">45001:2018</span>
              <span class="cert-sub">Health & Safety</span>
            </div>
            <div class="cert-badge cert-badge--dark">
              <span class="cert-short">SIO</span>
              <span class="cert-full">Mabes Polri</span>
              <span class="cert-sub">Official License</span>
            </div>
            <div class="cert-badge cert-badge--rose">
              <span class="cert-short">ABUJAPI</span>
              <span class="cert-full">Member</span>
              <span class="cert-sub">Security Association</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,700&display=swap');

.why-dfi {
  padding: 80px 32px;
  font-family: 'Poppins', Helvetica, sans-serif;
}

.why-dfi-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 72px;
}

/* ── Text column ─── */
.why-dfi-text {
  flex: 0 0 auto;
  width: 500px;
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

.why-dfi-headline {
  font-size: 42px;
  font-weight: 700;
  color: #121A35;
  line-height: 1.1;
  margin: 0;
  letter-spacing: -1px;
}

.why-dfi-intro {
  font-size: 16px;
  color: #272947;
  line-height: 1.65;
  margin: 0;
  letter-spacing: -0.3px;
}

/* Checklist */
.why-checklist {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.checklist-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.check-icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  background: rgba(75, 127, 202, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4B7FCA;
  margin-top: 1px;
}

.check-text {
  font-size: 15px;
  color: #272947;
  line-height: 1.55;
  letter-spacing: -0.2px;
}

/* ── Visual column ─── */
.why-dfi-visual {
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
}

.cert-card {
  background: #121A35;
  border-radius: 20px;
  padding: 28px;
  width: 100%;
  max-width: 360px;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 12px 40px rgba(18, 26, 53, 0.22);
}

.cert-card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 700;
  color: rgba(255,255,255,0.9);
}

.cert-badges {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.cert-badge {
  border-radius: 12px;
  padding: 16px 14px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.cert-badge--blue   { background: #4B7FCA; border: none; }
.cert-badge--purple { background: #7B5EA7; border: none; }
.cert-badge--dark   { background: rgba(255,255,255,0.10); border: 1px solid rgba(255,255,255,0.14); }
.cert-badge--rose   { background: #B87678; border: none; }

.cert-short {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: rgba(255,255,255,0.75);
}

.cert-full {
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
}

.cert-sub {
  font-size: 11px;
  color: rgba(255,255,255,0.65);
  line-height: 1.4;
  margin-top: 2px;
}

/* Responsive */
@media (max-width: 900px) {
  .why-dfi-inner {
    flex-direction: column;
    gap: 40px;
  }
  .why-dfi-text {
    width: 100%;
  }
  .cert-card {
    max-width: 100%;
  }
  .why-dfi-headline {
    font-size: 32px;
  }
}
</style>
