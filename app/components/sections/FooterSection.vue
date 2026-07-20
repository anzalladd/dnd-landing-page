<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'
</script>

<template>
  <footer class="w-full bg-[#121212] pt-[60px] pb-[60px] px-4 md:px-[60px] text-white overflow-hidden">
    <div class="max-w-8xl mx-auto flex flex-col lg:flex-row justify-between gap-16 lg:gap-8">

      <!-- Left Side -->
      <div class="flex flex-col justify-between items-start gap-12 lg:gap-0 lg:w-[45%]">
        <img src="/images/footer/footer-logo.svg" alt="D&D Associates"
          class="w-full max-w-[540px] h-auto object-contain" />
        <p class="font-sans font-normal text-[14px] leading-[22px] text-white opacity-80 mt-auto hidden lg:block">
          © 2026 D&D Associates. All Rights Reserved
        </p>
      </div>

      <!-- Right Side -->
      <div class="flex flex-col justify-between items-start w-full lg:w-[50%] pt-8 lg:pt-0">

        <!-- Call to Action -->
        <div class="flex flex-col gap-6 w-full max-w-[560px]">
          <h2
            class="font-alegreya text-[40px] md:text-[48px] leading-[48px] md:leading-[56px] tracking-[-0.01em] text-white m-0">
            <span class="text-[#A8A8A8]">Interested</span> in working with us?
          </h2>
          <p class="font-sans text-[16px] leading-[24px] text-white opacity-80 m-0">
            One relaxed conversation could be the start of something big. Grab a coffee, pick your slot, and tell us
            your idea.
          </p>
          <button
            class="mt-2 flex flex-row items-center justify-center gap-2 sm:gap-3 bg-white text-[#121212] pl-4 pr-1.5 py-1.5 sm:pl-6 sm:pr-2 sm:py-2 rounded-[10px] sm:rounded-[12px] transition-all duration-300 hover:bg-gray-200 w-fit">
            <span class="font-sans font-medium text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">Book a
              Call</span>
            <div
              class="flex items-center justify-center w-[20px] h-[20px] sm:w-[36px] sm:h-[36px] bg-[#121212] rounded-full text-white">
              <ArrowRight class="w-3 h-3 sm:w-5 sm:h-5" stroke-width="2" />
            </div>
          </button>
        </div>

        <!-- Links and Logo -->
        <div
          class="flex flex-col sm:flex-row justify-between items-start sm:items-end w-full mt-16 lg:mt-[160px] gap-8 sm:gap-0">
          <img src="/images/footer/logo_white.svg" alt="D&D" class="w-[44px] h-[29.33px]" />

          <div class="flex flex-row flex-wrap gap-4 sm:gap-[32px]">
            <a href="#"
              class="font-sans text-[14px] md:text-[16px] leading-[24px] text-white opacity-80 hover:opacity-100 transition-colors">Info</a>
            <a href="#"
              class="font-sans text-[14px] md:text-[16px] leading-[24px] text-white opacity-80 hover:opacity-100 transition-colors">Works</a>
            <a href="#"
              class="font-sans text-[14px] md:text-[16px] leading-[24px] text-white opacity-80 hover:opacity-100 transition-colors">Dribbble</a>
            <a href="#"
              class="font-sans text-[14px] md:text-[16px] leading-[24px] text-white opacity-80 hover:opacity-100 transition-colors">Instagram</a>
            <a href="#"
              class="font-sans text-[14px] md:text-[16px] leading-[24px] text-white opacity-80 hover:opacity-100 transition-colors">Email</a>
          </div>
        </div>

      </div>

      <!-- Mobile Copyright -->
      <p class="font-sans font-normal text-[14px] leading-[22px] text-white opacity-80 mt-8 text-center lg:hidden">
        © 2026 D&D Associates. All Rights Reserved
      </p>

    </div>
  </footer>
</template>
