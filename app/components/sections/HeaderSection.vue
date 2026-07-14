<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isMobileMenuOpen = ref(false)
const isVisible = ref(false)

onMounted(() => {
  // Slight delay for smoother entrance
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <header
    class="w-full flex flex-col items-center justify-center py-4 px-4 md:py-5 md:px-8 lg:py-[22px] lg:px-[60px] bg-white max-w-8xl mx-auto relative z-50 transition-all duration-1000 ease-out"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'">
    <div class="w-full flex flex-row items-center justify-between self-stretch">

      <!-- Mobile Logo & Hamburger -->
      <div class="flex flex-row items-center justify-between w-full md:w-auto md:hidden">
        <img src="/images/header-hero/logo.svg" alt="DND Associate Logo" class="w-[44px] h-[29.33px]" />
        <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="p-2" aria-label="Toggle Menu">
          <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#091416]" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#091416]" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Desktop Nav Tabs Container -->
      <!-- In Figma, the logo is actually part of this central pill nav. So we hide this on mobile, but keep the logo here for md+ -->
      <nav class="hidden md:flex flex-col p-[12px_16px] gap-[10px] bg-white rounded-[8px]">
        <div class="flex flex-row items-center gap-[16px]">
          <!-- Logo -->
          <img src="/images/header-hero/logo.svg" alt="DND Associate Logo" class="w-[44px] h-[29.33px]" />

          <!-- Links -->
          <a href="#work" class="flex flex-row items-center gap-[8px] cursor-pointer">
            <div class="flex flex-row">
              <span class="font-basis font-normal text-[16px] leading-[24px] text-[#091416]">Work</span>
            </div>
          </a>
          <a href="#about" class="flex flex-row items-center gap-[8px] cursor-pointer">
            <div class="flex flex-row">
              <span class="font-basis font-normal text-[16px] leading-[24px] text-[#091416]">About</span>
            </div>
          </a>
          <a href="#contact" class="flex flex-row items-center gap-[8px] cursor-pointer">
            <div class="flex flex-row">
              <span class="font-basis font-normal text-[16px] leading-[24px] text-[#091416]">Contact</span>
            </div>
          </a>
        </div>
      </nav>

      <!-- Desktop Get in Touch Button -->
      <button
        class="hidden md:flex flex-row items-center justify-center p-[16px] h-[52px] bg-[#091416] rounded-[8px] hover:bg-black transition-colors">
        <div class="flex flex-row items-center justify-center px-[8px] h-[20px]">
          <span class="font-basis font-medium text-[16px] leading-[24px] text-white">Get in Touch</span>
        </div>
        <img src="/images/header-hero/arrow-right.svg" alt="Arrow Right" class="w-[30px] h-[30px]" />
      </button>

    </div>

    <!-- Mobile Menu Overlay -->
    <div v-if="isMobileMenuOpen"
      class="md:hidden absolute top-full left-0 w-full bg-white shadow-md flex flex-col p-4 gap-4 z-40 border-t border-[#F7F6F6]">
      <a href="#work" @click="isMobileMenuOpen = false"
        class="py-2 font-basis font-medium text-[18px] text-[#091416]">Work</a>
      <a href="#about" @click="isMobileMenuOpen = false"
        class="py-2 font-basis font-medium text-[18px] text-[#091416]">About</a>
      <a href="#contact" @click="isMobileMenuOpen = false"
        class="py-2 font-basis font-medium text-[18px] text-[#091416]">Contact</a>
      <button class="flex flex-row items-center justify-center p-[16px] h-[52px] bg-[#091416] rounded-[8px] mt-2">
        <div class="flex flex-row items-center justify-center px-[8px] h-[20px]">
          <span class="font-basis font-medium text-[16px] leading-[24px] text-white">Get in Touch</span>
        </div>
        <img src="/images/header-hero/arrow-right.svg" alt="Arrow Right" class="w-[30px] h-[30px]" />
      </button>
    </div>
  </header>
</template>
