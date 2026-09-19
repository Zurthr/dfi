<script setup>
import { Head } from '@inertiajs/vue3';
import Navbar from '@/Components/Navbar.vue';
import Footer from '@/Components/Footer.vue';
import BgTriangles from '@/Components/BgTriangles.vue';
</script>

<template>
  <Head title="Contact Us – Delta Force Indonesia" />

  <div class="contact-page">
    <Navbar />
    <BgTriangles />

    <!-- SECTION 1: CONTACT HERO -->
    <section class="contact-hero-section" data-animate="up">
      <div class="contact-hero-inner">
        <!-- Left column: text content -->
        <div class="contact-hero-text">
          <p class="section-eyebrow">Let’s discuss!</p>
          <h1 class="contact-hero-headline">
            Get in touch<br>with us.
          </h1>
          <p class="contact-hero-desc">
            Baik Anda mencari mitra pengamanan dan tenaga kerja untuk perusahaan, maupun ingin berkarier bersama kami, tim kami siap membantu.
          </p>

          <div class="contact-links">
            <a href="#corporate" class="link-primary">
              <span>For <strong>Corporate Clients</strong></span>
              <svg class="link-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#careers" class="link-secondary">
              <span>Explore <strong>Careers</strong></span>
              <svg class="link-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Right column: image placeholder / illustration -->
        <div class="contact-hero-image-col">
          <div class="hero-image-wrap">
            <img
              src="/images/ContactHero.png"
              alt="Customer Service Representative"
              class="hero-img"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2: CORPORATE CTA CARD -->
    <section id="corporate" class="cta-section" data-animate="left">
      <div class="cta-card cta-card-blue">
        <div class="cta-content">
          <h2 class="cta-title">Ready to secure your operations?</h2>
          <p class="cta-desc">
            Konsultasikan kebutuhan perusahaan Anda dengan kami. Tim kami siap menyusun solusi pengamanan dan penyediaan tenaga kerja yang sesuai dengan operasional bisnis Anda.
          </p>
        </div>
        <div class="cta-action">
          <a
            href="https://wa.me/6281285856502"
            target="_blank"
            rel="noopener noreferrer"
            class="cta-btn cta-btn-white"
          >
            Chat on Whatsapp
          </a>
        </div>
      </div>
    </section>

    <!-- SECTION 3: FIND US -->
    <section class="find-us-section" data-animate="right">
      <div class="find-us-inner">
        <!-- Left: embedded map -->
        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.0840024880163!2d106.19633637521494!3d-6.119394760007533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e41f504086125c7%3A0x7c71d2aca89a9027!2sRuko%20Serang%20Boulevard!5e0!3m2!1sen!2sid!4v1789637981505!5m2!1sen!2sid"
            style="border:0; width:100%; height:100%; display:block;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
            title="Delta Force Indonesia Head Office Map">
          </iframe>
        </div>

        <!-- Right: contact info -->
        <div class="contact-info-col">
          <h2 class="find-us-title">Find us</h2>

          <div class="info-group">
            <h3 class="info-subheading">Our Location</h3>
            <p class="info-address">
              Jl. Raya Jakarta - Serang km. 4 Komplek Ruko Serang Boulevard Blok C - 09 Kota Serang, Banten
            </p>
          </div>

          <div class="info-group">
            <h3 class="info-subheading">Our Contact</h3>

            <div class="contact-detail-list">
              <!-- Phone -->
              <a href="tel:+6281285856502" class="contact-detail-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>+62 81285856502</span>
              </a>

              <!-- Instagram -->
              <a
                href="https://instagram.com/deltaforceindonesia"
                target="_blank"
                rel="noopener noreferrer"
                class="contact-detail-item"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                <span>@deltaforceindonesia</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4: CAREERS CTA CARD -->
    <section id="careers" class="cta-section" data-animate="left" style="margin-bottom:32px;">
      <div class="cta-card cta-card-red">
        <div class="cta-content">
          <h2 class="cta-title">Want to build your career with us?</h2>
          <p class="cta-desc">
            Kami membuka kesempatan bagi tenaga keamanan dan tenaga kerja profesional untuk tumbuh bersama Delta Force Indonesia di berbagai kota di Indonesia.
          </p>
        </div>
        <div class="cta-action cta-action-col">
          <a href="https://www.instagram.com/deltaforceindonesia/" class="cta-btn cta-btn-white">Cek Lowongan</a>
          <div class="cta-notes">
            <p class="cta-note-email">
              and send your cv at <a href="mailto:recruitment@deltaforceindonesia.com">recruitment@deltaforceindonesia.com</a>
            </p>
            <p class="cta-note-disclaimer">
              Delta Force Indonesia never charges any fees during recruitment.
            </p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,700&display=swap');

.contact-page,
.contact-page *,
.contact-page *::before,
.contact-page *::after {
  font-family: 'Poppins', Helvetica, sans-serif !important;
}

.contact-page {
  background: #f5f7fb;
  color: #121A35;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* ── SECTION 1: CONTACT HERO ── */
.contact-hero-section {
  position: relative;
  z-index: 10;
  padding: 80px 32px 60px;
}

.contact-hero-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
}

.contact-hero-text {
  flex: 1;
  max-width: 520px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section-eyebrow {
  font-size: 18px;
  font-weight: 500;
  color: #555566;
  margin: 0;
}

.contact-hero-headline {
  font-size: 54px;
  font-weight: 800;
  color: #121A35;
  line-height: 1.1;
  letter-spacing: -1px;
}

.contact-hero-desc {
  font-size: 15px;
  line-height: 1.6;
  color: #4b5563;
  margin-top: 4px;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
}

.link-primary, .link-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  width: fit-content;
}

.link-primary {
  font-size: 18px;
  color: #121A35;
  transition: color 0.2s;
}

.link-primary strong {
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-color: #121A35;
}

.link-secondary {
  font-size: 16px;
  color: #7b849b;
  transition: color 0.2s;
}

.link-secondary strong {
  font-weight: 600;
  color: #B87678;
}

.link-arrow {
  opacity: 0;
  transform: translateX(-6px);
  transition: opacity 0.25s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  color: #121A35;
}

.link-secondary .link-arrow {
  color: #B87678;
}

.link-primary:hover .link-arrow,
.link-secondary:hover .link-arrow {
  opacity: 1;
  transform: translateX(0);
}

/* Hero Right Image */
.contact-hero-image-col {
  flex: 1;
  max-width: 480px;
  display: flex;
  justify-content: center;
}

.hero-image-wrap {
  position: relative;
  width: 100%;
  border-radius: 24px;
  overflow: hidden;
}

.hero-img {
  width: 100%;
  height: 340px;
  object-fit: cover;
  display: block;
}

/* ── SECTION 2 & 4: CTA CARD SHELL ── */
.cta-section {
  position: relative;
  z-index: 10;
  padding: 12px 32px 12px;
}

.cta-card {
  max-width: 1100px;
  margin: 0 auto;
  padding: 16px 24px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 36px;
  color: #ffffff;
  box-shadow: 0 8px 30px rgba(18, 26, 53, 0.08);
}

.cta-card-blue {
  background: #213062;
}

.cta-card-red {
  background: #801919;
}

.cta-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 720px;
}

.cta-title {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.3;
}

.cta-desc {
  font-size: 14.5px;
  line-height: 1.6;
  opacity: 0.9;
}

.cta-action {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.cta-action-col {
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
}

.cta-btn-white {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  background: #ffffff;
  color: #121A35;
  font-weight: 700;
  font-size: 15px;
  border-radius: 8px;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.cta-btn-white:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.cta-notes {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  text-align: right;
}

.cta-note-email {
  font-size: 13px;
  opacity: 0.85;
}

.cta-note-email a {
  color: #ffffff;
  text-decoration: underline;
}

.cta-note-disclaimer {
  font-size: 11.5px;
  opacity: 0.65;
}

/* ── SECTION 3: FIND US ── */
.find-us-section {
  position: relative;
  z-index: 10;
  padding: 12px 32px;
}

.find-us-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: stretch;
  gap: 24px;
  background: #ffffff;
  padding: 16px;
  border-radius: 16px;
  border: 1px solid rgba(18, 26, 53, 0.06);
}

.map-container {
  flex: 8;
  min-height: 380px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(18, 26, 53, 0.08);
}

.contact-info-col {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 8px 0;
}

.find-us-title {
  font-size: 32px;
  font-weight: 800;
  color: #121A35;
  letter-spacing: -0.5px;
  text-decoration: underline;
  text-underline-offset: 6px;
  text-decoration-color: #121A35;
}

.info-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.info-subheading {
  font-size: 18px;
  font-weight: 700;
  color: #121A35;
}

.info-address {
  font-size: 14.5px;
  line-height: 1.6;
  color: #4b5563;
}

.contact-detail-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 4px;
}

.contact-detail-item {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #121A35;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: color 0.2s;
}

.contact-detail-item svg {
  color: #4B7FCA;
  flex-shrink: 0;
}

.contact-detail-item:hover {
  color: #4B7FCA;
}

/* ── RESPONSIVE ── */
@media (max-width: 900px) {
  .contact-hero-inner {
    flex-direction: column;
    gap: 40px;
  }
  .contact-hero-text, .contact-hero-image-col {
    max-width: 100%;
    width: 100%;
  }
  .cta-card {
    flex-direction: column;
    align-items: flex-start;
    padding: 32px 28px;
    gap: 24px;
  }
  .cta-action-col, .cta-notes {
    align-items: flex-start;
    text-align: left;
    width: 100%;
  }
  .cta-btn-white {
    width: 100%;
  }
  .find-us-inner {
    flex-direction: column;
    padding: 20px;
  }
  .map-container {
    min-height: 280px;
  }
}
</style>
