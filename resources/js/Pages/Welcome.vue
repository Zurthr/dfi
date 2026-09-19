<script setup>
import { ref, onMounted } from 'vue';
import { Head } from '@inertiajs/vue3';
import CategorySection from '@/Components/CategorySection.vue';
import Navbar from '@/Components/Navbar.vue';
import Footer from '@/Components/Footer.vue';
import BgTriangles from '@/Components/BgTriangles.vue';

const showErrorModal = ref(false);

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('error') === '404') {
    showErrorModal.value = true;
    // Clean URL query without refreshing page
    window.history.replaceState({}, document.title, window.location.pathname);
  }
});

function closeErrorModal() {
  showErrorModal.value = false;
}

// ── MANUFACTURE & OUTSOURCING ─────────────────────────────────────────────
const manufactureData = {
  label: 'Optimizing personnel productivity',
  title: 'Manufacture &amp; Outsourcing',
  description:
    'Penyediaan tenaga kerja terampil untuk operasional pabrik dan non-core function, sebagai support perusahaan.',
  labelColor: '#933a32',
  variant: 'red',
  imagePosition: 'right',
  bgColor: '#f5f7fb',
  image: '/images/ManufacturerHero.png',
  imageAlt: 'Manufacture & Outsourcing illustration',
  items: [
    {
      id: 'general',
      icon: '/images/categ/O1.png',
      title: 'General Affairs Management',
      content:
        'Dukungan operasional kantor seperti resepsionis, admin, serta layanan umum perusahaan.',
    },
    {
      id: 'payroll',
      icon: '/images/categ/O2.png',
      title: 'Payroll Management Services',
      content:
        'Layanan pengelolaan penggajian karyawan secara menyeluruh dan akurat.',
    },
    {
      id: 'warehouse',
      icon: '/images/categ/O3.png',
      title: 'Warehouse Operations Support',
      content:
        'Solusi tenaga kerja untuk operasional gudang dan logistik perusahaan Anda.',
    },
    {
      id: 'production',
      icon: '/images/categ/O4.png',
      title: 'Production Operations Support',
      content:
        'Penyediaan tenaga kerja terampil untuk mendukung lini produksi pabrik Anda.',
    },
    {
      id: 'cleaning',
      icon: '/images/categ/O5.png',
      title: 'Cleaning Staff Support',
      content:
        'Penyediaan tenaga kebersihan profesional untuk menjaga kebersihan area kantor, pabrik, dan fasilitas perusahaan agar selalu nyaman, higienis, dan representatif untuk mendukung produktivitas aktivitas bisnis perusahaan.',
    },
  ],
};

// ── SECURITY ──────────────────────────────────────────────────────────────
const securityData = {
  label: 'Maximum security enforcement',
  title: 'Security',
  description:
    'Penyediaan tenaga keamanan terbaik untuk memastikan perlindungan aset & keamanan operasional perusahaan.',
  labelColor: '#2c5fa8',
  variant: 'blue',
  imagePosition: 'left',
  bgColor: '#ffffff',
  image: '/images/SecurityHero.png',
  imageAlt: 'Security illustration',
  items: [
    {
      id: 'dedicated',
      icon: '/images/categ/S1.png',
      title: 'Dedicated Security Coverage',
      content:
        'Dukungan operasional kantor seperti resepsionis, satpam, serta layanan umum perusahaan.',
    },
    {
      id: 'access',
      icon: '/images/categ/S2.png',
      title: 'Smart Access Control',
      content:
        'Sistem kontrol akses cerdas untuk memastikan keamanan area perusahaan Anda.',
    },
    {
      id: 'monitoring',
      icon: '/images/categ/S3.png',
      title: 'Proactive Area Monitoring',
      content:
        'Pemantauan area secara proaktif dengan teknologi terkini untuk keamanan optimal.',
    },
    {
      id: 'ai',
      icon: '/images/categ/S4.png',
      title: 'Intelligent AI Surveillance',
      content:
        'Pengawasan berbasis kecerdasan buatan untuk deteksi ancaman secara real-time.',
    },
    {
      id: 'incident',
      icon: '/images/categ/S5.png',
      title: 'Rapid Incident Response',
      content:
        'Tim respons cepat siap menangani insiden keamanan 24/7 di seluruh lokasi Anda.',
    },
  ],
};
const driverData = {
  label: 'Flexible mobility solutions',
  title: 'Driver Services',
  description: 'Penyediaan tenaga pengemudi profesional dan terpercaya untuk mendukung mobilitas serta kebutuhan operasional perusahaan.',
  labelColor: '#51722C',
  variant: 'green',
  imagePosition: 'right',
  bgColor: '#ffffff',
  image: '/images/DriverHero.png',
  imageAlt: 'Driver services illustration',
  items: [
    {
      id: 'professional',
      icon: '/images/categ/D1.png',
      title: 'Professional Driver Placement',
      content: 'Penyediaan pengemudi profesional yang terlatih dan disesuaikan dengan kebutuhan operasional perusahaan.',
    },
    {
      id: 'reliable',
      icon: '/images/categ/D2.png',
      title: 'Reliable Driver Support',
      content: 'Dukungan pengemudi yang andal untuk kebutuhan perjalanan dinas, antar-jemput, dan mobilitas operasional perusahaan.',
    },
    {
      id: 'screening',
      icon: '/images/categ/D3.png',
      title: 'Trusted Driver Selection',
      content: 'Proses seleksi dan verifikasi pengemudi untuk memastikan kompetensi, pengalaman, serta standar keamanan yang sesuai.',
    },
    {
      id: 'availability',
      icon: '/images/categ/D4.png',
      title: 'Flexible Driver Availability',
      content: 'Layanan pengemudi yang fleksibel sesuai jadwal dan kebutuhan perusahaan, baik untuk penggunaan harian maupun jangka panjang.',
    },
  ],
};
</script>


<template>
  <Head title="Delta Force Indonesia - Workforce Solution" />

  <div class="dfi-page">
    <!-- 404 ERROR ALERT MODAL AT TOP -->
    <transition name="modal-slide">
      <div v-if="showErrorModal" class="error-modal-bar">
        <div class="error-modal-inner">
          <div class="error-modal-content">
            <span class="error-badge">404</span>
            <div class="error-text-group">
              <strong class="error-title">Page Not Found</strong>
              <span class="error-message">The page you were looking for doesn't exist. You have been redirected to Home.</span>
            </div>
          </div>
          <button @click="closeErrorModal" class="error-close-btn" aria-label="Close message">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
    </transition>

    <!-- NAVBAR -->
    <Navbar />
    <BgTriangles />

    <!-- HERO SECTION -->
    <section class="hero-section" data-animate="up">
      <div class="hero-content">
        <div class="hero-text-block">
          <p class="hero-subtitle">Your <em>Professionally Trusted</em></p>
          <h1 class="hero-title">WORKFORCE SOLUTION</h1>
          <p class="hero-tagline">Tailored to <em>your needs</em>.</p>
        </div>

        <p class="hero-description">
          Kami hadir sebagai mitra strategis dalam solusi keamanan dan manajemen
          tenaga kerja, dipercaya oleh 99 perusahaan nasional dan multinasional
          sejak 2012 dengan jaringan operasional yang mencakup 5 kantor cabang
          di 36 kota dan kabupaten.
        </p>

        <div class="hero-ctas">
          <a href="#manufacture" class="btn-primary">
            Our Solutions
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="/contact" class="btn-outline">Contact us</a>
        </div>

        <div class="hero-image-outer">
          <!-- <img
            src="/images/hero-bg.png"
            alt="Hero Background"
            class="hero-bg-img"
          /> -->
          <div class="hero-image-wrapper">
            <img
              src="/images/Hero.png"
              alt="Delta Force Indonesia Team"
              class="hero-image"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- CLIENT LOGOS -->
    <section class="clients-section" data-animate="up">
      <div class="clients-inner">
        <div class="clients-logos">
          <div class="client-logo">
            <img src="/images/companies/astra.png" alt="Astra Logo" class="client-logo-img" />
          </div>
          <div class="client-logo">
            <img src="/images/companies/byd.png" alt="BYD Logo" class="client-logo-img" />
          </div>
          <div class="client-logo">
            <img src="/images/companies/lojel.png" alt="LOJEL Logo" class="client-logo-img" />
          </div>
          <div class="client-logo">
            <img src="/images/companies/bca.png" alt="BCA Finance Logo" class="client-logo-img" />
          </div>
          <div class="client-logo">
            <img src="/images/companies/prima.png" alt="PrimaFood Logo" class="client-logo-img" />
          </div>
        </div>
        <p class="clients-caption">
          <em>100+ locations for leading multinational companies.</em>
        </p>
      </div>
    </section>

    <CategorySection
      id="manufacture"
      v-bind="manufactureData"
      data-animate="right"
    />

    <CategorySection
      id="security"
      v-bind="securityData"
      data-animate="left"
    />

    <CategorySection
      id="driver-services"
      v-bind="driverData"
      data-animate="right"
    />


    <!-- STATS SECTION -->
    <section class="stats-section" data-animate="up">
      <div class="stats-inner">
        <p class="stats-label">Built on <em>Trust</em> and <em>Experience</em></p>
        <div class="stats-grid">
          <div class="stat-block">
            <div class="stat-number">100+</div>
            <div class="stat-desc">Klien Korporat</div>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-block">
            <div class="stat-number">4800+</div>
            <div class="stat-desc">Tenaga Kerja</div>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-block">
            <div class="stat-number">36</div>
            <div class="stat-desc">Kota dan Kabupaten</div>
          </div>
        </div>
        <p class="stats-sub">all across <strong>Indonesia</strong></p>
      </div>
    </section>
    
    <!-- FLOATING CTA CARD -->
    <section class="floating-cta-section" data-animate="up">
      <div class="floating-cta-card">
        <div class="cta-content">
          <h3 class="cta-title">Ready to secure your operations?</h3>
          <p class="cta-desc">
            Lindungi aset, perkuat tenaga kerja, dan fokus pada bisnis inti Anda bersama Delta Force Indonesia sebagai mitra jangka panjang.
          </p>
        </div>
        <a href="/contact" class="cta-button">Consult Now</a>
      </div>
    </section>

    <!-- FOOTER -->
    <Footer />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,700&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

.dfi-page {
  font-family: 'Poppins', Helvetica, sans-serif;
  background: #f5f7fb;
  color: #121A35;
}

/* ── HERO ─────────────────────────────────────── */
.hero-section {
  position: relative;
  min-height: 88vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 42px 12px 12px;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;
}
.hero-text-block { display: flex; flex-direction: column; align-items: center; gap: 4px; }
.hero-subtitle { font-size: 20px; font-weight: 400; color: #121A35; }
.hero-subtitle em { font-style: italic; font-weight: 700; }
.hero-title {
  font-size: 64px;
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 1.05;
  background: linear-gradient(90deg, #4B7FCA 0%, #B87678 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero-tagline { font-size: 26px; font-weight: 400; color: #121A35; }
.hero-tagline em { font-style: italic; font-weight: 700; }
.hero-description {
  max-width: 720px;
  font-size: 15px;
  color: #272947;
  line-height: 1.7;
  letter-spacing: -0.3px;
}

.hero-ctas { display: flex; align-items: center; gap: 20px; flex-wrap: wrap; justify-content: center; }
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #4B7FCA;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  padding: 12px 22px;
  border-radius: 24px;
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
  letter-spacing: -0.4px;
}
.btn-primary:hover {
  background: #3a6cb8;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(75,127,202,0.35);
}
.btn-outline {
  display: inline-flex;
  align-items: center;
  border: 1.5px solid #121A35;
  color: #121A35;
  text-decoration: none;
  font-size: 18px;
  font-weight: 300;
  padding: 12px 22px;
  border-radius: 24px;
  transition: background 0.2s, color 0.2s, transform 0.2s;
  letter-spacing: -0.4px;
}
.btn-outline:hover { background: #121A35; color: #fff; transform: translateY(-2px); }

.hero-image-outer {
  position: relative;
  width: 100%;
  max-width: 960px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 10px;
}

/* .hero-bg-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 0;
  pointer-events: none;
  border-radius: 36px;
} */

.hero-image-wrapper {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 850px;
  border-radius: 32px;
  padding: 10px;
  backdrop-filter: blur(12px) brightness(102%) saturate(140%);
  -webkit-backdrop-filter: blur(12px) brightness(102%) saturate(140%);
}

.hero-image {
  width: 100%;
  height: auto;
  border-radius: 24px;
  object-fit: cover;
  display: block;
}

/* ── CLIENTS ──────────────────────────────────── */
.clients-section {  padding: 0px 32px; }
.clients-inner {
  max-width: 1040px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.clients-logos { display: flex; align-items: center; gap: 28px; flex-wrap: wrap; justify-content: center; }
.client-logo { opacity: 0.75; transition: opacity 0.2s, transform 0.2s; }
.client-logo:hover { opacity: 1; transform: scale(1.05); }
.clients-caption { font-size: 13px; color: #555; text-align: center; line-height: 1.6; }

/* ── SOLUTIONS / SECURITY ── now inside CategorySection.vue ── */

/* ── STATS ────────────────────────────────────── */
.stats-section { padding: 70px 32px; background: none; }
.stats-inner { max-width: 800px; margin: 0 auto; text-align: center; }
.stats-label { font-size: 16px; color: #555; margin-bottom: 32px; }
.stats-label em { font-style: italic; font-weight: 600; color: #121A35; }
.stats-grid { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; }
.stat-block { flex: 1; min-width: 140px; padding: 20px; }
.stat-number { font-size: 54px; font-weight: 700; color: #121A35; line-height: 1; margin-bottom: 6px; }
.stat-desc { font-size: 14px; color: #666; }
.stat-divider { width: 1px; height: 70px; background: #d8dce8; flex-shrink: 0; }
.stats-sub { font-size: 15px; color: #555; margin-top: 24px; }
.stats-sub strong { color: #121A35; font-weight: 700; }

/* ── FLOATING CTA CARD ────────────────────────── */
.floating-cta-section {
  position: relative;
  z-index: 10;
  background: none;
  padding: 0 24px 60px;
}

.floating-cta-card {
  position: relative;
  z-index: 10;
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
  padding: 32px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  background: #213062;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 24px rgba(18, 26, 53, 0.05);
}

.cta-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 720px;
}

.cta-title {
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.3;
}

.cta-desc {
  font-size: 14.5px;
  line-height: 1.6;
  color: #e5e5e6;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  background: #121A35;
  color: #ffffff;
  font-weight: 600;
  font-size: 15px;
  border-radius: 8px;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.cta-button:hover {
  background: #4B7FCA;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(75, 127, 202, 0.3);
}

/* ── RESPONSIVE ───────────────────────────────── */
@media (max-width: 768px) {
  .hero-title { font-size: 40px; }
  .stat-number { font-size: 38px; }
  .stat-divider { display: none; }
  .floating-cta-card {
    flex-direction: column;
    align-items: flex-start;
    padding: 28px 24px;
    gap: 20px;
  }
  .cta-button {
    width: 100%;
  }
}

/* ── 404 TOP ALERT MODAL ── */
.error-modal-bar {
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99999;
  width: 90%;
  max-width: 680px;
}

.error-modal-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: #121A35;
  color: #ffffff;
  padding: 14px 20px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(18, 26, 53, 0.25), 0 0 0 1px rgba(184, 118, 120, 0.3);
}

.error-modal-content {
  display: flex;
  align-items: center;
  gap: 14px;
}

.error-badge {
  background: #B87678;
  color: #ffffff;
  font-size: 13px;
  font-weight: 800;
  padding: 4px 10px;
  border-radius: 6px;
  letter-spacing: 0.5px;
  flex-shrink: 0;
}

.error-text-group {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.error-title {
  font-size: 14.5px;
  font-weight: 700;
  color: #ffffff;
}

.error-message {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.4;
}

.error-close-btn {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.2s;
  flex-shrink: 0;
}

.error-close-btn:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.1);
}

.modal-slide-enter-active,
.modal-slide-leave-active {
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-slide-enter-from,
.modal-slide-leave-to {
  opacity: 0;
  transform: translate(-50%, -24px);
}
</style>
