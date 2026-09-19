<template>
  <section class="our-story">
    <div class="our-story-inner">
      <!-- Left: text content -->
      <div class="our-story-content">
        <p class="section-eyebrow">
          A decade of <strong>growth</strong>
        </p>

        <h2 class="our-story-headline">Our Story</h2>

        <div class="our-story-paras">
          <p>
            Delta Force Indonesia was established on 31 August 2016 with one ambition: to lead Indonesia's security and workforce management industry. The company was built by business professionals, legal and security practitioners, and alumni of the first cohort of the Master of Police Science program.
          </p>
          <p>
            From day one, we restructured our leadership and management to compete in the ASEAN Economic Community era, positioning ourselves as a partner rather than just a service provider.
          </p>
          <p>
            Today, we are supported by retired senior officers of the Indonesian National Police (Polri) and Armed Forces (TNI), national figures, and senior practitioners serving as strategic advisors, strengthening our credibility and network nationwide.
          </p>
        </div>
      </div>

      <!-- Right: pull quote -->
      <div class="our-story-quote-col">
        <blockquote class="our-story-blockquote">
          <span class="blockquote-mark" aria-hidden="true">"</span>
          <p class="blockquote-text">
            We don't promise perfection. We commit to three simple things: compliance with the law, professionalism in service, and consistency in improvement.
          </p>
          <footer class="blockquote-footer">
            <span class="blockquote-line"></span>
            <cite class="blockquote-attribution">
              Guna Sulta Laksana, S.H., Director
            </cite>
          </footer>
        </blockquote>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,700&display=swap');

.our-story {
  position: relative;
  z-index: 1;
  background: linear-gradient(to bottom, #ffffff 0%, #ffffff 90%, rgba(255, 255, 255, 0));
  padding: 32px 32px 80px;
  font-family: 'Poppins', Helvetica, sans-serif;
}

.our-story-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  gap: 80px;
}

/* ── Left content ─── */
.our-story-content {
  flex: 0 0 auto;
  width: 520px;
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

.our-story-headline {
  font-size: 42px;
  font-weight: 700;
  color: #121A35;
  line-height: 1.1;
  margin: 0;
  letter-spacing: -1px;
}

.our-story-paras {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.our-story-paras p {
  font-size: 16px;
  color: #272947;
  line-height: 1.7;
  letter-spacing: -0.3px;
  margin: 0;
}

/* ── Pull quote ─── */
.our-story-quote-col {
  flex: 1 1 auto;
  padding-top: 64px; /* aligns quote mid-content */
}

.our-story-blockquote {
  position: relative;
  background: linear-gradient(
    140deg,
    rgba(75, 127, 202, 0.06) 0%,
    rgba(123, 94, 167, 0.06) 100%
  );
  border-left: 4px solid #4B7FCA;
  border-radius: 0 16px 16px 0;
  padding: 32px 28px 28px;
  margin: 0;
}

.blockquote-mark {
  position: absolute;
  top: -8px;
  left: 20px;
  font-size: 72px;
  font-weight: 800;
  color: #4B7FCA;
  opacity: 0.2;
  line-height: 1;
  font-style: normal;
  user-select: none;
}

.blockquote-text {
  font-size: 18px;
  font-style: italic;
  color: #121A35;
  line-height: 1.65;
  font-weight: 500;
  margin: 0 0 20px;
  letter-spacing: -0.3px;
}

.blockquote-footer {
  display: flex;
  align-items: center;
  gap: 12px;
}

.blockquote-line {
  display: block;
  width: 28px;
  height: 2px;
  background: #4B7FCA;
  flex-shrink: 0;
}

.blockquote-attribution {
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  color: #4B7FCA;
  letter-spacing: 0.2px;
}

/* ── Responsive ─── */
@media (max-width: 900px) {
  .our-story-inner {
    flex-direction: column;
    gap: 40px;
  }
  .our-story-content {
    width: 100%;
  }
  .our-story-quote-col {
    padding-top: 0;
    width: 100%;
  }
  .our-story-headline {
    font-size: 32px;
  }
}
</style>
