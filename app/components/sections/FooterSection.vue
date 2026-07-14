<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'
</script>

<template>
  <footer class="w-full bg-white pt-16 pb-12 px-4 md:px-8 mt-12">
    <div class="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">

      <!-- Top Section -->
      <div class="flex flex-col md:flex-row justify-between gap-16">

        <!-- Left Side: Brand -->
        <div class="flex flex-col gap-6 max-w-[420px]">
          <!-- Logo -->
          <img src="/images/header-hero/logo.svg" alt="D&D" class="h-12 w-12" />

          <h3 class="font-sans font-semibold text-[24px] leading-[32px] tracking-[-0.002em] text-[#121212]">
            Design & Development,<br />
            One Team, No Delays
          </h3>

          <p class="font-sans text-[16px] leading-[24px] text-[#A8A8A8]">
            No handoffs. No guesswork. Just one team, working closely with you to turn ideas into real, working
            products.
          </p>
        </div>

        <!-- Right Side: Links -->
        <div class="flex flex-row flex-wrap gap-16 md:gap-24">
          <!-- Company -->
          <div class="flex flex-col gap-4">
            <h4 class="font-sans font-semibold text-[16px] leading-[24px] text-[#121212] mb-2">Company</h4>
            <a href="#"
              class="font-sans text-[16px] leading-[24px] text-[#7A7A7A] hover:text-[#121212] transition-colors">About
              D&D</a>
            <a href="#"
              class="font-sans text-[16px] leading-[24px] text-[#7A7A7A] hover:text-[#121212] transition-colors">Services</a>
            <a href="#"
              class="font-sans text-[16px] leading-[24px] text-[#7A7A7A] hover:text-[#121212] transition-colors">Works</a>
          </div>

          <!-- Portfolio -->
          <div class="flex flex-col gap-4">
            <h4 class="font-sans font-semibold text-[16px] leading-[24px] text-[#121212] mb-2">Portfolio</h4>
            <a href="#"
              class="font-sans text-[16px] leading-[24px] text-[#7A7A7A] hover:text-[#121212] transition-colors">Dribbble</a>
            <a href="#"
              class="font-sans text-[16px] leading-[24px] text-[#7A7A7A] hover:text-[#121212] transition-colors">Behance</a>
          </div>

          <!-- Social Media -->
          <div class="flex flex-col gap-4">
            <h4 class="font-sans font-semibold text-[16px] leading-[24px] text-[#121212] mb-2">Social Media</h4>
            <a href="#"
              class="font-sans text-[16px] leading-[24px] text-[#7A7A7A] hover:text-[#121212] transition-colors">Instagram</a>
            <a href="#"
              class="font-sans text-[16px] leading-[24px] text-[#7A7A7A] hover:text-[#121212] transition-colors">TikTok</a>
            <a href="#"
              class="font-sans text-[16px] leading-[24px] text-[#7A7A7A] hover:text-[#121212] transition-colors">Linkedin</a>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="flex flex-col gap-10">
        <!-- Separator -->
        <div class="w-full h-[1px] bg-[#E6E6E6]"></div>

        <!-- Contacts -->
        <div class="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32">
          <a href="mailto:dnd.associates@gmail.com" class="flex flex-row items-center gap-4 group">
            <div
              class="w-12 h-12 rounded-full bg-[#121212] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105">
              <ArrowRight class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
            <span
              class="font-sans text-[16px] leading-[24px] text-[#7A7A7A] group-hover:text-[#121212] transition-colors">dnd.associates@gmail.com</span>
          </a>

          <a href="tel:+621232432432" class="flex flex-row items-center gap-4 group">
            <div
              class="w-12 h-12 rounded-full bg-[#121212] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105">
              <ArrowRight class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
            <span
              class="font-sans text-[16px] leading-[24px] text-[#7A7A7A] group-hover:text-[#121212] transition-colors">(+62)
              1232432432</span>
          </a>
        </div>
      </div>

    </div>
  </footer>
</template>
