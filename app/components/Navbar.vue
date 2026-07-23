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
    class="w-full flex flex-col items-center justify-center py-0 px-4 md:py-5 md:px-8 lg:py-[22px] lg:px-[60px] max-w-8xl mx-auto relative z-50 transition-all duration-1000 ease-out"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'">
    <div class="w-full flex flex-row items-center justify-between self-stretch">

      <!-- Mobile Logo & Hamburger -->
      <div
        class="flex flex-row items-center justify-between w-full md:w-auto md:hidden bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-gray-100 shadow-sm">
        <img src="/images/logo.svg" alt="D&D Associates" class="h-[20px] w-auto" />
        <button @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="p-2 relative w-10 h-10 flex items-center justify-center" aria-label="Toggle Menu">
          <svg :class="isMobileMenuOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'"
            class="absolute transition-all duration-300 ease-in-out h-6 w-6 text-[#091416]" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg :class="isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'"
            class="absolute transition-all duration-300 ease-in-out h-6 w-6 text-[#091416]" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Desktop Nav Tabs Container (Left-aligned Pill) -->
      <nav class="hidden md:flex flex-row items-center p-[10px_24px] gap-[24px] bg-[#F7F6F6] rounded-[8px]">
        <!-- Logo -->
        <a href="#" class="flex items-center">
          <img src="/images/logo.svg" alt="D&D Associates" class="h-[24px] w-auto object-contain" />
        </a>

        <!-- Links -->
        <a href="#info" class="flex flex-row items-center cursor-pointer">
          <span
            class="font-sans font-medium text-[16px] leading-[24px] text-[#091416] hover:text-black transition-colors">Info</span>
        </a>
        <a href="#work" class="flex flex-row items-center cursor-pointer">
          <span
            class="font-sans font-medium text-[16px] leading-[24px] text-[#091416] hover:text-black transition-colors">Work</span>
        </a>
        <a href="#contact" class="flex flex-row items-center cursor-pointer">
          <span
            class="font-sans font-medium text-[16px] leading-[24px] text-[#091416] hover:text-black transition-colors">Contact</span>
        </a>
      </nav>

      <!-- Desktop Book a Call Button -->
      <button
        class="hidden md:flex flex-row items-center justify-center p-[12px_24px] bg-[#121212] rounded-[8px] hover:bg-black transition-colors gap-[12px] group">
        <span class="font-sans font-medium text-[16px] leading-[24px] text-white">Book a Call</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
          class="text-white group-hover:translate-x-1 transition-transform">
          <path d="M13.75 6.75L19.25 12L13.75 17.25M19 12H4.75" stroke="currentColor" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>

    </div>

    <!-- Mobile Menu Overlay -->
    <transition enter-active-class="transition duration-300 ease-out origin-top"
      enter-from-class="opacity-0 scale-y-95 -translate-y-2" enter-to-class="opacity-100 scale-y-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in origin-top"
      leave-from-class="opacity-100 scale-y-100 translate-y-0" leave-to-class="opacity-0 scale-y-95 -translate-y-2">
      <div v-if="isMobileMenuOpen"
        class="md:hidden absolute top-full left-0 w-full bg-white shadow-md flex flex-col pt-0 p-4 gap-4 z-40 border-t border-[#F7F6F6] rounded-b-xl">
        <a href="#info" @click="isMobileMenuOpen = false"
          class="py-2 font-sans font-medium text-[18px] text-[#091416]">Info</a>
        <a href="#work" @click="isMobileMenuOpen = false"
          class="py-2 font-sans font-medium text-[18px] text-[#091416]">Work</a>
        <a href="#contact" @click="isMobileMenuOpen = false"
          class="py-2 font-sans font-medium text-[18px] text-[#091416]">Contact</a>
        <button
          class="flex flex-row items-center justify-center p-[12px_24px] bg-[#121212] rounded-[8px] mt-2 gap-[12px] group">
          <span class="font-sans font-medium text-[16px] leading-[24px] text-white">Book a Call</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="text-white group-hover:translate-x-1 transition-transform">
            <path d="M13.75 6.75L19.25 12L13.75 17.25M19 12H4.75" stroke="currentColor" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </transition>
  </header>
</template>
