<script setup lang="ts">
// Minimal footer design
</script>

<template>
  <footer class="w-full bg-white border-t border-[#F7F6F6]">
    <div class="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[60px] py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
      
      <!-- Left: Copyright -->
      <div class="font-sans text-[13px] md:text-[14px] text-[#545454] text-center md:text-left flex-1">
        © 2026 D&D Associates. All Rights Reserved
      </div>

      <!-- Center: Logo -->
      <div class="flex justify-center flex-1">
        <img src="/images/logo.svg" alt="D&D Logo" class="h-5 md:h-6 object-contain" />
      </div>

      <!-- Right: Links / Info -->
      <div class="flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-8 font-sans text-[13px] md:text-[14px] text-[#545454] flex-1">
        <a href="https://work.dndassociates.com" target="_blank" class="hover:text-black transition-colors">work.dndassociates.com</a>
        <a href="https://instagram.com/dnd.associates" target="_blank" class="hover:text-black transition-colors">@dnd.associates</a>
        <a href="tel:+6288232489983" class="hover:text-black transition-colors">+62 88232489983</a>
      </div>
      
    </div>
  </footer>
</template>

<style scoped></style>
