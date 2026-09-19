<script setup>
const milestones = [
  { period: '2016',      milestone: 'Rebranded as PT Delta Force Indonesia with a full management restructuring', clients: '1 client'    },
  { period: '2017–2018', milestone: 'Expanded into Banten and Lampung',                                          clients: '7 clients'   },
  { period: '2019–2020', milestone: 'Entered Sumatra and Central Java',                                          clients: '20 clients'  },
  { period: '2021–2022', milestone: 'Expanded into Kalimantan and Sulawesi',                                     clients: '38 clients'  },
  { period: '2023–2024', milestone: 'Continued nationwide growth',                                               clients: '78 clients'  },
  { period: '2025–2026', milestone: 'Operating across 36 cities and regencies',                                  clients: '100+ clients'},
];
</script>

<template>
  <section class="our-journey">
    <div class="our-journey-inner">
      <div class="our-journey-header">
        <p class="section-eyebrow">Growing <strong>together</strong> with our clients</p>
        <h2 class="our-journey-headline">Our Journey</h2>
      </div>

      <div class="timeline">
        <div
          v-for="(entry, index) in milestones"
          :key="index"
          class="timeline-item"
        >
          <!-- Year pill -->
          <div class="timeline-year-col">
            <div class="timeline-year-pill">{{ entry.period }}</div>
          </div>

          <!-- Spine -->
          <div class="timeline-spine">
            <div class="spine-dot"></div>
            <div v-if="index < milestones.length - 1" class="spine-line"></div>
          </div>

          <!-- Content -->
          <div class="timeline-card">
            <p class="timeline-milestone">{{ entry.milestone }}</p>
            <span class="timeline-clients">{{ entry.clients }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,700&display=swap');

.our-journey {
  padding: 72px 32px;
  font-family: 'Poppins', Helvetica, sans-serif;
}

.our-journey-inner {
  max-width: 820px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 36px;
}

/* Header */
.our-journey-header { display: flex; flex-direction: column; gap: 6px; }

.section-eyebrow { font-size: 20px; font-weight: 400; color: #4B7FCA; margin: 0; }
.section-eyebrow strong { font-weight: 700; }

.our-journey-headline {
  font-size: 42px; font-weight: 700; color: #121A35;
  line-height: 1.1; margin: 0; letter-spacing: -1px;
}

/* Timeline */
.timeline { display: flex; flex-direction: column; }

.timeline-item {
  display: grid;
  grid-template-columns: 112px 36px 1fr;
  align-items: flex-start;
  min-height: 56px;
}

/* Year column */
.timeline-year-col {
  display: flex;
  justify-content: flex-end;
  padding-top: 8px;
}

.timeline-year-pill {
  background: #121A35;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 11px;
  border-radius: 20px;
  white-space: nowrap;
  letter-spacing: 0.3px;
}

/* Spine */
.timeline-spine {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 11px;
}

.spine-dot {
  width: 12px; height: 12px;
  border-radius: 50%;
  background: #4B7FCA;
  border: 2px solid #f5f7fb;
  box-shadow: 0 0 0 3px rgba(75, 127, 202, 0.22);
  flex-shrink: 0;
}

.spine-line {
  width: 2px;
  flex: 1;
  min-height: 24px;
  background: linear-gradient(to bottom, #4B7FCA, rgba(75, 127, 202, 0.12));
  margin-top: 4px;
}

/* Content */
.timeline-card {
  padding: 6px 0 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.timeline-milestone {
  font-size: 15px; font-weight: 500;
  color: #121A35; line-height: 1.45; margin: 0;
}

.timeline-clients {
  font-size: 12px; font-weight: 600;
  color: #4B7FCA;
  background: rgba(75, 127, 202, 0.10);
  border-radius: 20px;
  padding: 2px 10px;
  display: inline-block;
  width: fit-content;
}

/* Responsive */
@media (max-width: 580px) {
  .timeline-item { grid-template-columns: 90px 30px 1fr; }
  .our-journey-headline { font-size: 32px; }
  .timeline-year-pill { font-size: 11px; padding: 3px 8px; }
  .timeline-milestone { font-size: 14px; }
}
</style>
