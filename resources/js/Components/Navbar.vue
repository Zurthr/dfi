<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Link } from '@inertiajs/vue3';

const isDropdownOpen = ref(false);
const isMobileMenuOpen = ref(false);
const isVisible = ref(true);
let lastScrollY = 0;

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false;
  isDropdownOpen.value = false;
}

function handleScroll() {
  const currentScrollY = window.scrollY;
  
  if (currentScrollY <= 50) {
    isVisible.value = true;
  } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
    isVisible.value = false;
    isDropdownOpen.value = false;
    isMobileMenuOpen.value = false;
  } else if (currentScrollY < lastScrollY) {
    isVisible.value = true;
  }
  
  lastScrollY = currentScrollY;
}

onMounted(() => {
  lastScrollY = window.scrollY;
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const services = [
  { name: 'Manufacture & Outsourcing', target: '#manufacture' },
  { name: 'Security', target: '#security' },
  { name: 'Driver Services', target: '#driver-services' },
];

function scrollToSection(targetId) {
  isDropdownOpen.value = false;
  isMobileMenuOpen.value = false;
  if (window.location.pathname !== '/') {
    window.location.href = '/' + targetId;
    return;
  }
  const element = document.querySelector(targetId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<template>
  <nav class="navbar" :class="{ 'navbar--hidden': !isVisible }">
    <div class="navbar-inner">
      <Link href="/home" class="navbar-logo" @click="closeMobileMenu">
        <img src="/images/logo-dfi.png" alt="Delta Force Indonesia Logo" class="logo-img" />
        <span class="logo-text">Delta Force Indonesia</span>
      </Link>

      <!-- Mobile Hamburger Button -->
      <button
        class="mobile-toggle"
        :class="{ 'is-active': isMobileMenuOpen }"
        @click="toggleMobileMenu"
        aria-label="Toggle navigation menu"
      >
        <span class="burger-bar"></span>
        <span class="burger-bar"></span>
        <span class="burger-bar"></span>
      </button>

      <!-- Desktop Links -->
      <div class="navbar-links desktop-links">
        <Link href="/home" class="nav-link">Home</Link>
        <Link href="/about" class="nav-link">About Us</Link>
        
        <!-- Dropdown hover wrapper -->
        <div 
          class="nav-dropdown-wrapper"
          @mouseenter="isDropdownOpen = true"
          @mouseleave="isDropdownOpen = false"
        >
          <a href="/#manufacture" class="nav-link nav-link-dropdown" @click.prevent="scrollToSection('#manufacture')">
            Layanan Kami
            <svg 
              class="dropdown-chevron"
              :class="{ 'is-active': isDropdownOpen }"
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2"
            >
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </a>

          <transition name="dropdown-fade">
            <div v-show="isDropdownOpen" class="dropdown-menu">
              <a
                v-for="(service, index) in services"
                :key="index"
                :href="'/' + service.target"
                class="dropdown-item"
                @click.prevent="scrollToSection(service.target)"
              >
                {{ service.name }}
              </a>
            </div>
          </transition>
        </div>

        <Link href="/contact" class="nav-cta">Contact Us</Link>
      </div>
    </div>

    <!-- Mobile Drawer Menu -->
    <transition name="mobile-menu-slide">
      <div v-show="isMobileMenuOpen" class="mobile-drawer">
        <Link href="/home" class="mobile-nav-link" @click="closeMobileMenu">Home</Link>
        <Link href="/about" class="mobile-nav-link" @click="closeMobileMenu">About Us</Link>
        
        <div class="mobile-services-group">
          <div class="mobile-group-title">Layanan Kami</div>
          <a
            v-for="(service, index) in services"
            :key="index"
            :href="'/' + service.target"
            class="mobile-sublink"
            @click.prevent="scrollToSection(service.target)"
          >
            {{ service.name }}
          </a>
        </div>

        <Link href="/contact" class="mobile-cta-btn" @click="closeMobileMenu">Contact Us</Link>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 9999999;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(75, 127, 202, 0.1);
  box-shadow: 0 2px 20px rgba(18, 26, 53, 0.06);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
  transform: translateY(0);
}

.navbar--hidden {
  transform: translateY(-100%);
  opacity: 0;
  pointer-events: none;
}

.navbar-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.logo-img {
  height: 32px;
  width: auto;
  object-fit: contain;
}

.logo-text {
  font-weight: 600;
  font-size: 17px;
  color: #341515;
  letter-spacing: -0.3px;
}

.navbar-links {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-link {
  color: #272947;
  text-decoration: none;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: color 0.2s;
  cursor: pointer;
}

.nav-link:hover {
  color: #4B7FCA;
}

.nav-dropdown-wrapper {
  position: relative;
  padding: 12px 0; /* Creates hit target area so hover doesn't break when moving to menu */
}

.dropdown-chevron {
  transition: transform 0.2s ease;
}

.dropdown-chevron.is-active {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  min-width: 230px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(18, 26, 53, 0.12), 0 2px 8px rgba(75, 127, 202, 0.08);
  border: 1px solid rgba(75, 127, 202, 0.12);
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.dropdown-item {
  color: #272947;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 14px;
  border-radius: 8px;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.dropdown-item:hover {
  background: rgba(75, 127, 202, 0.08);
  color: #4B7FCA;
  transform: translateX(3px);
}

.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(6px) translateX(-50%);
}

.nav-cta {
  background: linear-gradient(90deg, #4B7FCA, #7B5EA7);
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  padding: 9px 22px;
  border-radius: 24px;
  transition: opacity 0.2s, transform 0.2s;
}

.nav-cta:hover {
  opacity: 0.88;
  transform: translateY(-1px);
}

/* ── MOBILE TOGGLE BUTTON ── */
.mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 110;
}

.burger-bar {
  width: 100%;
  height: 2.5px;
  background-color: #121A35;
  border-radius: 4px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.mobile-toggle.is-active .burger-bar:nth-child(1) {
  transform: translateY(8.5px) rotate(45deg);
}

.mobile-toggle.is-active .burger-bar:nth-child(2) {
  opacity: 0;
}

.mobile-toggle.is-active .burger-bar:nth-child(3) {
  transform: translateY(-8.5px) rotate(-45deg);
}

/* ── MOBILE DRAWER ── */
.mobile-drawer {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px 24px 28px;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(75, 127, 202, 0.12);
  box-shadow: 0 16px 36px rgba(18, 26, 53, 0.15);
}

.mobile-nav-link {
  font-size: 16px;
  font-weight: 600;
  color: #121A35;
  text-decoration: none;
}

.mobile-services-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px 0;
  border-top: 1px solid rgba(18, 26, 53, 0.06);
  border-bottom: 1px solid rgba(18, 26, 53, 0.06);
}

.mobile-group-title {
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: #4B7FCA;
}

.mobile-sublink {
  font-size: 14.5px;
  font-weight: 500;
  color: #4b5563;
  text-decoration: none;
  padding-left: 12px;
}

.mobile-cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #4B7FCA, #7B5EA7);
  color: #fff;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  padding: 12px 20px;
  border-radius: 12px;
  text-align: center;
  margin-top: 4px;
}

.mobile-menu-slide-enter-active,
.mobile-menu-slide-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-slide-enter-from,
.mobile-menu-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* ── RESPONSIVE MEDIA QUERIES ── */
@media (max-width: 768px) {
  .desktop-links {
    display: none;
  }

  .mobile-toggle {
    display: flex;
  }

  .logo-text {
    font-size: 15px;
  }
}
</style>
