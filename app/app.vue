<script lang="ts" setup>
import HeaderSection from '~/components/sections/HeaderSection.vue'
import HeroSection from '~/components/sections/HeroSection.vue'
import PartnerSection from '~/components/sections/PartnerSection.vue'
import ServicesSection from '~/components/sections/ServicesSection.vue'
import OurWorkSection from '~/components/sections/OurWorkSection.vue'

import FooterSection from '~/components/sections/FooterSection.vue'
</script>

<template>
  <div class="min-h-screen bg-white">
    <HeaderSection />
    <HeroSection />
    <PartnerSection />
    <ServicesSection />
    <OurWorkSection />

    <FooterSection />
  </div>
</template>
