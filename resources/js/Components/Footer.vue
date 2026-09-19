<script setup>
import { Link } from '@inertiajs/vue3';
</script>

<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <!-- Top Two Columns Block -->
      <div class="footer-columns">
        <!-- Column 1: Brand Info -->
        <div class="footer-col footer-col-brand">
          <Link href="/home" class="footer-logo">
            <img src="/images/logo-dfi.png" alt="Delta Force Indonesia Logo" class="footer-logo-img" />
            <span>Delta Force Indonesia</span>
          </Link>
          <p class="footer-tagline">
            Mitra strategis terpercaya dalam solusi pengamanan dan pengelolaan sumber daya manusia profesional di Indonesia.
          </p>
        </div>

        <!-- Column 2: Quick Links & Contact -->
        <div class="footer-col footer-col-links">
          <h4 class="footer-col-title">Quick Links &amp; Contact</h4>
          <ul class="footer-link-list">
            <li><Link href="/home">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><a href="/#manufacture">Manufacture &amp; Outsourcing</a></li>
            <li><a href="/#security">Security Services</a></li>
            <li><a href="/#driver-services">Driver Services</a></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      <!-- Bottom Row: Address & Copyright -->
      <div class="footer-bottom-row">
        <div class="footer-address">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>Jl. Raya Jakarta - Serang km. 4 Komplek Ruko Serang Boulevard Blok C - 09 Kota Serang, Banten</span>
        </div>
        <p class="footer-copy">© 2024 PT Delta Force Indonesia. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,700&display=swap');

.site-footer {
  position: relative;
  z-index: 999999;
  background: #121A35;
  color: rgba(255, 255, 255, 0.7);
  padding: 48px 32px 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  font-family: 'Poppins', Helvetica, sans-serif;
}

.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 36px;
}

.footer-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
}

.footer-col-brand {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
}

.footer-logo-img {
  height: 32px;
  width: auto;
  object-fit: contain;
}

.footer-tagline {
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.65);
  max-width: 440px;
}

.footer-col-links {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.footer-col-title {
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
}

.footer-link-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0;
  margin: 0;
}

.footer-link-list a {
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  font-size: 13.5px;
  transition: color 0.2s ease;
}

.footer-link-list a:hover {
  color: #4B7FCA;
}

.footer-bottom-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  flex-wrap: wrap;
}

.footer-address {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
}

.footer-address svg {
  color: #4B7FCA;
  flex-shrink: 0;
}

.footer-copy {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
}

/* ── RESPONSIVE ───────────────────────────────── */
@media (max-width: 768px) {
  .footer-columns { grid-template-columns: 1fr; gap: 32px; }
  .footer-bottom-row { flex-direction: column; align-items: flex-start; gap: 12px; }
}
</style>
