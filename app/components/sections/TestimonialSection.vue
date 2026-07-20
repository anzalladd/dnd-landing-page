<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowRight } from '@lucide/vue'

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry && entry.isIntersecting && !isVisible.value) {
        isVisible.value = true
        if (sectionRef.value && observer) {
          observer.unobserve(sectionRef.value)
        }
      }
    },
    { threshold: 0.2 }
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
  <section ref="sectionRef" class="w-full bg-[#F7F6F6] py-[60px] px-4 md:px-[60px] flex justify-center min-h-[565px]">
    <div class="max-w-8xl w-full flex flex-col items-center gap-[40px]">

      <div
        class="relative w-full h-[300px] lg:h-[445px] bg-cover bg-no-repeat bg-center rounded-[12px] shadow-sm overflow-hidden flex items-center p-8 lg:p-[129px_40px] transition-all duration-1000 ease-out"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        style="background-image: url('/images/cta-bg-10d53c.png')">

        <div class="flex flex-col gap-[37px] lg:w-[539px] z-10 relative">
          <h2
            class="font-alegreya font-medium text-[32px] lg:text-[40px] leading-[40px] lg:leading-[48px] tracking-[-0.005em] text-white m-0">
            Interested in working with us?<br />
            We'd love to hear from you!
          </h2>

          <button
            class="flex flex-row items-center justify-center gap-2 bg-white text-black px-6 py-4 rounded-[8px] transition-all duration-300 hover:bg-gray-100 w-fit">
            <span class="font-sans font-medium text-[16px]">Contact Us</span>
            <ArrowRight class="w-5 h-5 animate-bounce-horizontal" />
          </button>
        </div>

        <!-- Optional overlay if the background image needs darkening -->
        <div class="absolute inset-0 bg-black/10 rounded-[12px]"></div>
      </div>

    </div>
  </section>
</template>

<style scoped>
@keyframes bounce-horizontal {

  0%,
  100% {
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