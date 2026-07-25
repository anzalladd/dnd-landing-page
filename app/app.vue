<script lang="ts" setup>
import Navbar from '~/components/Navbar.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-background font-sans antialiased text-foreground selection:bg-primary/20">
    <Navbar />
    <main class="flex-grow">
      <NuxtPage />
    </main>
  </div>
</template>
