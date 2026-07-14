<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowRight } from '@lucide/vue'

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)
const typedText = ref('')
const fullText = "“For the first-ever rebrand of our product, we went with the renowned design studio Bakken & Bæck. They worked with us throughout the entire process to get our new look just right. And they nailed it”."

let observer: IntersectionObserver | null = null
let typeInterval: ReturnType<typeof setInterval> | null = null

const startTyping = () => {
  let currentIndex = 0
  typedText.value = ''

  if (typeInterval) clearInterval(typeInterval)

  typeInterval = setInterval(() => {
    if (currentIndex < fullText.length) {
      typedText.value += fullText.charAt(currentIndex)
      currentIndex++
    } else {
      if (typeInterval) clearInterval(typeInterval)
    }
  }, 15) // 15ms per character
}

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry && entry.isIntersecting && !isVisible.value) {
        isVisible.value = true
        startTyping()
        if (sectionRef.value && observer) {
          observer.unobserve(sectionRef.value)
        }
      }
    },
    { threshold: 0.5 } // Trigger when halfway visible
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
  if (typeInterval) clearInterval(typeInterval)
})
</script>

<template>
  <section ref="sectionRef" class="w-full bg-[#F3F3F3] py-24 md:py-32 px-4 md:px-8 flex justify-center">
    <div class="max-w-[800px] w-full flex flex-col items-start gap-8">

      <!-- Typing Quote -->
      <div class="relative w-full">
        <!-- Invisible placeholder to reserve exact height to prevent layout shifts -->
        <h2
          class="font-sans font-medium text-[28px] md:text-[40px] leading-[36px] md:leading-[52px] tracking-[-0.01em] text-transparent select-none pointer-events-none"
          aria-hidden="true">
          {{ fullText }}
        </h2>
        <!-- Actual typing text -->
        <h2
          class="absolute top-0 left-0 w-full font-sans font-medium text-[28px] md:text-[40px] leading-[36px] md:leading-[52px] tracking-[-0.01em] text-[#121212]">
          {{ typedText }}<span v-if="isVisible && typedText.length < fullText.length"
            class="inline-block w-[3px] h-[28px] md:h-[40px] bg-black animate-pulse align-middle ml-[2px] -mt-[4px]"></span>
        </h2>
      </div>

      <!-- Author -->
      <p class="font-sans text-[18px] leading-[28px] text-[#7A7A7A] transition-all duration-1000 ease-out"
        :class="isVisible && typedText.length === fullText.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'">
        — Chris Kalani, CEO Phantom
      </p>

      <!-- Button -->
      <button
        class="flex flex-row items-center gap-3 bg-[#091416] text-white px-6 py-3 md:py-4 rounded-[8px] transition-all duration-1000 ease-out group hover:bg-[#1f2b2d]"
        :style="{ transitionDelay: isVisible && typedText.length === fullText.length ? '200ms' : '0ms' }"
        :class="isVisible && typedText.length === fullText.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'">
        <span class="font-sans font-medium text-[16px]">See Case Study</span>
        <ArrowRight class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>

    </div>
  </section>
</template>
