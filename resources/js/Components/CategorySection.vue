<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  /**
   * Small label above the title (e.g. "Your workforce solution")
   */
  label: { type: String, required: true },

  /**
   * Section heading (e.g. "Manufacture & Outsourcing")
   */
  title: { type: String, required: true },

  /**
   * Paragraph below the heading
   */
  description: { type: String, required: true },

  /**
   * Accent color for the label text (hex / CSS color)
   * Default: reddish accent from the design
   */
  labelColor: { type: String, default: '#933a32' },

  /**
   * Array of accordion items.
   * Each item: { id, icon (img src | null), title, content }
   * The first item is expanded by default.
   */
  items: {
    type: Array,
    required: true,
    // [{ id: String, icon: String|null, title: String, content: String }]
  },

  /**
   * src for the side image (placeholder or real)
   */
  image: { type: String, default: null },

  /**
   * alt text for the side image
   */
  imageAlt: { type: String, default: 'Section image' },

  /**
   * 'right' → content left, image right (default, Manufacture)
   * 'left'  → image left, content right (Security)
   */
  imagePosition: {
    type: String,
    default: 'right',
    validator: (v) => ['left', 'right'].includes(v),
  },

  /**
   * Active item gradient variation: 'red' | 'blue' | 'green'
   * Default: 'red'
   */
  variant: {
    type: String,
    default: 'red',
    validator: (v) => ['red', 'blue', 'green'].includes(v),
  },

  /**
   * Background color of the section wrapper
   */
  bgColor: { type: String, default: '#f5f7fb' },
});

const labelParts = computed(() => {
  const words = props.label.trim().split(/\s+/);
  return {
    first: words[0] || '',
    second: words[1] || '',
    rest: words.slice(2).join(' '),
  };
});

// Track which accordion item is open; default = first item's id
const activeId = ref(props.items.length ? props.items[0].id : null);

function toggle(id) {
  // Radio-style: always keep one item open; clicking the active one does nothing
  activeId.value = id;
}
</script>

<template>
  <section :class="['cat-section', `cat-section--${variant}`]" :style="{ background: none }">
    <div
      class="cat-inner"
      :class="imagePosition === 'left' ? 'cat-inner--reverse' : ''"
    >
      <!-- ── CONTENT COLUMN ───────────────── -->
      <div class="cat-content">
        <!-- Label + Title -->
        <div class="cat-header">
          <p class="cat-label" :style="{ color: labelColor }">
            <span class="cat-label-normal">{{ labelParts.first }}</span>
            {{ ' ' }}
            <span class="cat-label-bold">{{ labelParts.second }}</span>
            <template v-if="labelParts.rest">
              {{ ' ' }}
              <span class="cat-label-normal">{{ labelParts.rest }}</span>
            </template>
          </p>
          <!-- Render raw HTML so callers can pass "Manufacture &amp; Outsourcing" etc. -->
          <h2 class="cat-title" v-html="title"></h2>
        </div>

        <p class="cat-desc">{{ description }}</p>

        <!-- Accordion -->
        <div class="cat-accordion">
          <div
            v-for="(item, index) in items"
            :key="item.id"
            class="cat-acc-item"
            :class="{ 'cat-acc-item--active': activeId === item.id }"
          >
            <button class="cat-acc-header" @click="toggle(item.id)">
              <!-- 32×32 icon: img src or blank placeholder -->
              <span class="cat-acc-icon">
                <img
                  v-if="item.icon"
                  :src="item.icon"
                  :alt="item.title + ' icon'"
                  width="32"
                  height="32"
                  class="cat-acc-icon-img"
                />
                <span
                  v-else
                  class="cat-acc-icon-placeholder"
                  aria-hidden="true"
                ></span>
              </span>

              <span class="cat-acc-title">{{ item.title }}</span>

              <!-- Chevron arrow -->
              <span
                class="cat-acc-arrow"
                :class="{ 'cat-acc-arrow--open': activeId === item.id }"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2.5">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </span>
            </button>

            <!-- Expanded body: uses CSS grid animation, always rendered -->
            <div class="cat-acc-body" :class="{ 'cat-acc-body--open': activeId === item.id }">
              <div class="cat-acc-body-inner">
                <p class="cat-acc-text">{{ item.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── IMAGE COLUMN ────────────────── -->
      <div class="cat-image-col">
        <img
          v-if="image"
          :src="image"
          :alt="imageAlt"
          class="cat-image"
        />
        <!-- 32×32 placeholder if no image supplied -->
        <div v-else class="cat-image-placeholder">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU5ErkJggg=="
            alt="placeholder"
            width="32"
            height="32"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── SECTION SHELL ───────────────────────── */
.cat-section {
  padding: 24px 32px;
}

.cat-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 56px;
  justify-content: space-between;
}

/* Flip columns when image goes left */
.cat-inner--reverse {
  flex-direction: row-reverse;
}

/* ── CONTENT COLUMN ──────────────────────── */
.cat-content {
  display: flex;
  flex-direction: column;
  gap: 17px;
  flex: 0 0 auto;
  width: 480px;
  max-width: 100%;
}

/* Label */
.cat-label {
  font-family: 'Poppins', 'Sansation-Regular', Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  margin: 0;
}
.cat-label-normal { font-weight: 400; }
.cat-label-bold   { font-weight: 700; }

/* Title */
.cat-title {
  font-family: 'Poppins', 'Sansation-Bold', Helvetica, sans-serif;
  font-size: 42px;
  font-weight: 700;
  color: #121a35;
  line-height: 1.1;
  margin: 0;
}

/* Description */
.cat-desc {
  font-family: 'Poppins', Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #272947;
  letter-spacing: -0.64px;
  line-height: 1.6;
  text-align: justify;
  margin: 0;
  max-width: 441px;
}

/* ── ACCORDION ───────────────────────────── */
.cat-accordion {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Shared item shell */
.cat-acc-item {
  border-bottom: 1px solid #d0d3dc;
  position: relative;
  transition: background 0.3s ease, border-color 0.3s ease, border-radius 0.3s ease;
}

/* Common active item layout */
.cat-acc-item--active {
  border-bottom: none;
  border-radius: 8px;
}

/* Red Variant (default) */
.cat-section--red .cat-acc-item--active {
  background:
    linear-gradient(
      140deg,
      rgba(255, 255, 255, 0.6) 0%,
      rgba(255, 209, 209, 0.24) 63%,
      rgba(255, 241, 216, 0.6) 90%,
      rgba(255, 216, 216, 0.6) 95%
    ),
    linear-gradient(
      0deg,
      rgba(255, 221, 221, 1) 0%,
      rgba(255, 221, 221, 1) 100%
    );
}

/* Blue Variant */
.cat-section--blue .cat-acc-item--active {
  background:
    linear-gradient(
      140deg,
      rgba(255, 255, 255, 0.36) 0%,
      rgba(250, 255, 255, 0.24) 69%,
      rgba(255, 241, 216, 0.6) 88%,
      rgba(221, 226, 255, 0.6) 95%
    ),
    linear-gradient(
      0deg,
      rgba(233, 240, 255, 1) 0%,
      rgba(233, 240, 255, 1) 100%
    );
}

/* Green Variant */
.cat-section--green .cat-acc-item--active {
  background:
    linear-gradient(
      140deg,
      rgba(255, 255, 255, 0.36) 0%,
      rgba(249, 255, 247, 0.24) 69%,
      rgba(255, 241, 216, 0.6) 88%,
      rgba(227, 255, 221, 0.6) 95%
    ),
    linear-gradient(
      0deg,
      rgba(223, 255, 220, 1) 0%,
      rgba(223, 255, 220, 1) 100%
    );
}

/* Header row */
.cat-acc-header {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 12px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: 'Poppins', Helvetica, sans-serif;
  transition: background 0.15s;
}

.cat-acc-header:hover {
  background: rgba(75,127,202,0.04);
  border-radius: 8px;
}

/* 32×32 icon slot */
.cat-acc-icon {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cat-acc-icon-img {
  width: 32px;
  height: 32px;
  object-fit: contain;
  display: block;
}

/* Blank 32×32 placeholder rendered as a light grey square */
.cat-acc-icon-placeholder {
  display: block;
  width: 32px;
  height: 32px;
  background: #e0e4ec;
  border-radius: 6px;
}

.cat-acc-title {
  flex: 1;
  font-size: 18px;
  font-weight: 400;
  color: #000;
  letter-spacing: 0;
  line-height: normal;
}

/* Arrow: smooth rotation */
.cat-acc-arrow {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              color    0.3s ease;
}

.cat-acc-arrow--open {
  transform: rotate(180deg);
  color: #4b7fca;
}

/*
  Smooth accordion body using CSS Grid height trick.
  grid-template-rows: 0fr  → collapsed (zero height)
  grid-template-rows: 1fr  → expanded  (natural height)
  The inner div must have overflow:hidden for 0fr to clip correctly.
*/
.cat-acc-body {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.cat-acc-body--open {
  grid-template-rows: 1fr;
}

.cat-acc-body-inner {
  overflow: hidden;
  padding: 0 12px 0 52px; /* indent past icon, no bottom until open */
  transition: padding-bottom 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.cat-acc-body--open .cat-acc-body-inner {
  padding-bottom: 14px;
}

.cat-acc-text {
  font-family: 'Poppins', Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #272947;
  letter-spacing: -0.64px;
  line-height: 1.6;
  margin: 0;
  padding-top: 4px;
}

/* ── IMAGE COLUMN ────────────────────────── */
.cat-image-col {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cat-image {
  width: 496px;
  max-width: 100%;
  aspect-ratio: 1.39;
  object-fit: cover;
  border-radius: 16px;
}

.cat-image-placeholder {
  width: 496px;
  max-width: 100%;
  aspect-ratio: 1.39;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ── RESPONSIVE ──────────────────────────── */
@media (max-width: 900px) {
  .cat-inner,
  .cat-inner--reverse {
    flex-direction: column;
  }

  .cat-content {
    width: 100%;
  }

  .cat-image {
    width: 100%;
    max-width: 560px;
  }

  .cat-title {
    font-size: 32px;
  }
}
</style>
