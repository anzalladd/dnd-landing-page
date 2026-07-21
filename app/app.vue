<script lang="ts" setup>
import Navbar from '~/components/Navbar.vue'
import HeroSection from '~/components/HeroSection.vue'
import ServicesSection from '~/components/ServicesSection.vue'
import WorkSection from '~/components/WorkSection.vue'
import CTASection from '~/components/CTASection.vue'
import Footer from '~/components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-background font-sans antialiased text-foreground selection:bg-primary/20">
    <Navbar />
    <main>
      <HeroSection />
      <ServicesSection />
      <WorkSection />
      <CTASection />
      <Footer />
    </main>
  </div>
</template>
