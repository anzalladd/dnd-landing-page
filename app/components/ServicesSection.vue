<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref<HTMLElement | null>(null)
const leftCardRef = ref<HTMLElement | null>(null)
const rightCardRef = ref<HTMLElement | null>(null)
const textLeftRef = ref<HTMLElement | null>(null)
const textRightRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!sectionRef.value) return

  // Animations for the cards
  gsap.fromTo(
    leftCardRef.value,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: leftCardRef.value,
        start: 'top 85%',
      },
    }
  )

  gsap.fromTo(
    rightCardRef.value,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.15,
      scrollTrigger: {
        trigger: rightCardRef.value,
        start: 'top 85%',
      },
    }
  )

  // Animations for the text below
  gsap.fromTo(
    textLeftRef.value,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: textLeftRef.value,
        start: 'top 90%',
      },
    }
  )

  gsap.fromTo(
    textRightRef.value,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.15,
      scrollTrigger: {
        trigger: textRightRef.value,
        start: 'top 90%',
      },
    }
  )
})
</script>

<template>
  <section ref="sectionRef" class="w-full bg-white px-4 md:px-8 lg:px-[60px] py-[80px] md:py-[120px]">
    <div class="max-w-[1320px] mx-auto flex flex-col gap-12 md:gap-16">

      <!-- Unified Grid for Reordering -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-16 gap-x-6 md:gap-x-8 lg:gap-x-16 items-start">

        <!-- Intro Text (Mobile: order-1, Desktop: order-3) -->
        <div ref="textLeftRef" class="flex flex-col gap-6 w-full max-w-[580px] order-1 md:order-3">
          <p class="font-sans text-[16px] leading-[26px] md:text-[18px] md:leading-[28px] text-[#121212]/80">
            Markets change. Expectations evolve. Trends come and go. What lasts is clarity, trust, and products people
            remember.
          </p>
          <p class="font-sans text-[16px] leading-[26px] md:text-[18px] md:leading-[28px] text-[#121212]/80">
            At D&amp;D, strategy comes first. We design digital products and experiences that solve real business
            problems, grow with the market, and never lose sight of what makes your brand unique.
          </p>
        </div>

        <!-- Left Image (Mobile: order-2, Desktop: order-1) -->
        <div ref="leftCardRef" class="w-full overflow-hidden border border-gray-100 shadow-sm order-2 md:order-1">
          <img src="/images/services/kv-design.webp" alt="Design Services" class="w-full h-auto object-cover"
            draggable="false" />
        </div>

        <!-- Right Image (Mobile: order-3, Desktop: order-2) -->
        <div ref="rightCardRef" class="w-full overflow-hidden border border-gray-100 shadow-sm order-3 md:order-2">
          <img src="/images/services/kv-development.webp" alt="Development Services" class="w-full h-auto object-cover"
            draggable="false" />
        </div>

        <!-- Right Text (Mobile: order-4, Desktop: order-4) -->
        <div ref="textRightRef" class="flex flex-col gap-10 w-full max-w-[580px] order-4 md:order-4">

          <div class="flex flex-col gap-3">
            <h3 class="font-alegreya text-[26px] md:text-[32px] leading-[40px] font-medium text-[#121212]">
              Product
            </h3>
            <p class="font-sans text-[15px] leading-[24px] md:text-[16px] md:leading-[26px] text-[#121212]/80">
              From idea to launch, and beyond, our product design team works to efficiently and rapidly define, design
              and prototype world-class digital products, services or platforms.
            </p>
          </div>

          <div class="flex flex-col gap-3">
            <h3 class="font-alegreya text-[26px] md:text-[32px] leading-[40px] font-medium text-[#121212]">
              Development
            </h3>
            <p class="font-sans text-[15px] leading-[24px] md:text-[16px] md:leading-[26px] text-[#121212]/80">
              From training AI-models and implementing scalable architectures in the cloud, to delivering
              high-performing website and platforms, we make digital products run.
            </p>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>
