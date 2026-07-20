<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

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
    { threshold: 0.4 } // Triggers when 40% of the section is visible
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
  <section ref="sectionRef"
    class="w-full flex flex-col items-center pt-8 pb-8 px-4 md:pt-[60px] md:pb-[60px] md:px-[60px] gap-4 md:gap-[16px] bg-white max-w-8xl mx-auto transition-all duration-1000 ease-out"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'">

    <div class="flex flex-col items-stretch gap-6 md:gap-[40px] w-full lg:w-[1320px]">

      <!-- Key Visuals -->
      <div class="flex flex-col lg:flex-row self-stretch justify-between items-center gap-6 lg:gap-[24px]">

        <!-- KV 1 -->
        <div
          class="relative w-full lg:w-[648px] h-[250px] lg:h-[312px] bg-cover bg-no-repeat bg-center rounded-[12px] shadow-sm overflow-hidden flex-shrink-0"
          style="background-image: url('/images/services-section/kv-1-63cbd8.png')">
          <div
            class="absolute lg:left-[114px] lg:top-[44px] left-4 top-4 flex flex-row p-[12px_16px] items-center gap-[12px] bg-white rounded-[40px] border border-[#F7F6F6] shadow-sm">
            <img src="/images/services-section/icon-target.svg" alt="" class="w-[28px] h-[28px]" />
            <span
              class="font-alegreya text-[16px] lg:text-[18px] text-[#121212]/80 leading-[24px] lg:leading-[28px]">User
              Research + Testing</span>
          </div>
          <div
            class="absolute lg:left-[245px] lg:top-[128px] left-12 top-[90px] flex flex-row p-[12px_16px] items-center gap-[12px] bg-white rounded-[40px] border border-[#F7F6F6] shadow-sm">
            <img src="/images/services-section/icon-cursor.svg" alt="" class="w-[28px] h-[28px]" />
            <span
              class="font-alegreya text-[16px] lg:text-[18px] text-[#121212]/80 leading-[24px] lg:leading-[28px]">Web &
              App Design</span>
          </div>
          <div
            class="absolute lg:left-[342px] lg:top-[212px] left-8 top-[170px] flex flex-row p-[12px_16px] items-center gap-[12px] bg-white rounded-[40px] border border-[#F7F6F6] shadow-sm">
            <img src="/images/services-section/icon-magic.svg" alt="" class="w-[28px] h-[28px]" />
            <span
              class="font-alegreya text-[16px] lg:text-[18px] text-[#121212]/80 leading-[24px] lg:leading-[28px]">Brand
              Identity</span>
          </div>
        </div>

        <!-- KV 2 -->
        <div
          class="relative w-full lg:w-[648px] h-[250px] lg:h-[312px] bg-cover bg-no-repeat bg-center rounded-[12px] shadow-sm overflow-hidden flex-shrink-0"
          style="background-image: url('/images/services-section/kv-2.png')">
          <div
            class="absolute lg:left-[314px] lg:top-[34px] right-0 top-4 h-[50px] lg:h-[62px] bg-white rounded-[16px_0_0_16px] shadow-sm flex items-center pl-[23px] pr-[16px] gap-[16px]">
            <img src="/images/services-section/icon-globe.svg" alt=""
              class="w-[24px] lg:w-[28px] h-[24px] lg:h-[28px]" />
            <span
              class="font-alegreya text-[16px] lg:text-[18px] text-[#121212]/80 leading-[24px] lg:leading-[28px] whitespace-nowrap">Web
              Native Development</span>
          </div>
          <div
            class="absolute lg:left-[364px] lg:top-[120px] right-0 top-[90px] h-[50px] lg:h-[62px] bg-white rounded-[16px_0_0_16px] shadow-sm flex items-center pl-[20px] pr-[16px] gap-[16px]">
            <img src="/images/services-section/icon-nocode.png" alt=""
              class="w-[28px] lg:w-[32px] h-[28px] lg:h-[32px] rounded-full object-cover" />
            <span
              class="font-alegreya text-[16px] lg:text-[18px] text-[#121212]/80 leading-[24px] lg:leading-[28px] whitespace-nowrap">No-code
              Development</span>
          </div>
          <div
            class="absolute lg:left-[439px] lg:top-[206px] right-0 top-[170px] h-[50px] lg:h-[62px] bg-white rounded-[16px_0_0_16px] shadow-sm flex items-center pl-[14px] pr-[16px] gap-[16px]">
            <img src="/images/services-section/icon-ecommerce.png" alt=""
              class="w-[28px] lg:w-[32px] h-[28px] lg:h-[32px] rounded-full object-cover" />
            <span
              class="font-alegreya text-[16px] lg:text-[18px] text-[#121212]/80 leading-[24px] lg:leading-[28px] whitespace-nowrap">E-commerce
              Development</span>
          </div>
        </div>

      </div>

      <!-- Text Area -->
      <div class="flex flex-col lg:flex-row self-stretch justify-between items-start gap-8 lg:gap-0 mt-4 lg:mt-0">

        <p
          class="font-sans font-normal text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px] text-[#121212]/80 w-full lg:w-[624px] m-0">
          We research first. Most studios skip straight to design, we don't. We talk to real users, test assumptions,
          and only start building once something's actually validated. Depending on what the product needs, we build in
          no code or go fully native.
        </p>

        <!-- Accordion / List -->
        <div class="flex flex-col items-stretch w-full lg:w-[647px]">

          <div class="flex flex-col self-stretch pb-[16px] items-stretch gap-[10px] border-b border-[#F7F6F6]">
            <div class="flex flex-col self-stretch gap-[12px]">
              <div class="flex flex-row justify-between items-center group cursor-pointer">
                <span
                  class="font-alegreya font-normal text-[24px] lg:text-[32px] text-[#121212] leading-[32px] lg:leading-[40px] tracking-[-0.003em]">Product</span>
                <img src="/images/services-section/icon-arrow.svg" alt=""
                  class="w-[24px] h-[24px] opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <p
                class="font-sans font-normal text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] text-[#3A4345]/80 m-0">
                From idea to launch, and beyond, our product design team works to efficiently and rapidly define, design
                and prototype world-class digital products, services or platforms.
              </p>
            </div>
          </div>

          <div class="flex flex-col self-stretch py-[16px] items-stretch gap-[10px] border-b border-[#F7F6F6]">
            <div class="flex flex-col self-stretch gap-[12px]">
              <div class="flex flex-row justify-between items-center group cursor-pointer">
                <span
                  class="font-alegreya font-normal text-[24px] lg:text-[32px] text-[#121212] leading-[32px] lg:leading-[40px] tracking-[-0.003em]">Development</span>
                <img src="/images/services-section/icon-arrow.svg" alt=""
                  class="w-[24px] h-[24px] opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <p
                class="font-sans font-normal text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] text-[#3A4345]/80 m-0">
                From training AI-models and implementing scalable architectures in the cloud, to delivering
                high-performing website and platforms, we make digital products run.
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>
