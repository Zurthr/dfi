<script setup>
import { Head } from '@inertiajs/vue3';
import Navbar from '@/Components/Navbar.vue';
import Footer from '@/Components/Footer.vue';
import BgTriangles from '@/Components/BgTriangles.vue';
import AboutHero       from '@/Components/dfi/AboutHero.vue';
import OurStory        from '@/Components/dfi/OurStory.vue';
import OurJourney      from '@/Components/dfi/OurJourney.vue';
import VisionMission   from '@/Components/dfi/VisionMission.vue';

import WhyDFI          from '@/Components/dfi/WhyDFI.vue';
import IndustriesServed from '@/Components/dfi/IndustriesServed.vue';
import OurReach        from '@/Components/dfi/OurReach.vue';
import ClosingCTA      from '@/Components/dfi/ClosingCTA.vue';
</script>

<template>
  <Head title="About Us – Delta Force Indonesia" />

  <div class="dfi-about-page">
    <Navbar />
    <BgTriangles />

    <AboutHero data-animate="up" />
    <OurStory data-animate="left" />
    <OurJourney data-animate="right" />
    <VisionMission data-animate="left" />

    <WhyDFI data-animate="right" />
    <IndustriesServed data-animate="left" />
    <OurReach data-animate="right" />
    <ClosingCTA data-animate="up" />

    <Footer />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,700&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

.dfi-about-page {
  font-family: 'Poppins', Helvetica, sans-serif;
  background: #f5f7fb;
  color: #121A35;
}
</style>
