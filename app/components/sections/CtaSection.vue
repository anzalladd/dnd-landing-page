<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowRight } from '@lucide/vue'

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry && entry.isIntersecting) {
        isVisible.value = true
        if (sectionRef.value && observer) {
          observer.unobserve(sectionRef.value)
        }
      }
    },
    { threshold: 0.3 }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <section ref="sectionRef" class="w-full max-w-8xl mx-auto px-4 md:px-8 mb-24">
    <div class="relative w-full rounded-[32px] overflow-hidden min-h-[500px] flex items-center p-10 md:p-20">
      <!-- Background Image -->
      <div class="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out"
        :class="isVisible ? 'scale-100' : 'scale-110'" style="background-image: url('/images/cta-hero/bg-hero.jpg');">
        <!-- Overlay to ensure text readability -->
        <div class="absolute inset-0 bg-black/30"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 flex flex-col items-start gap-8 max-w-[600px]">
        <h2
          class="font-sans font-medium text-[40px] md:text-[56px] leading-[48px] md:leading-[64px] tracking-[-0.01em] text-white transition-all duration-1000 ease-out"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
          Interested in working with us? We'd love to hear from you!
        </h2>

        <button
          class="flex flex-row items-center gap-3 bg-white text-[#091416] pl-6 pr-3 py-3 rounded-[12px] transition-all duration-1000 delay-300 ease-out group hover:bg-gray-100 shadow-xl"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
          <span class="font-sans font-medium text-[16px]">Get in Touch</span>
          <div
            class="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white animate-bounce-horizontal">
            <ArrowRight class="w-4 h-4" />
          </div>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes bounce-horizontal {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(4px);
  }
}
.animate-bounce-horizontal {
  animation: bounce-horizontal 1.5s ease-in-out infinite;
}
</style>
