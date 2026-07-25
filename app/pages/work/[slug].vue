<script setup lang="ts">
import { onMounted, ref, nextTick, watch } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('work').path(route.path).first()
})

const headerRef = ref<HTMLElement | null>(null)
const contentLeftRef = ref<HTMLElement | null>(null)
const sidebarRef = ref<HTMLElement | null>(null)

const initAnimations = () => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger)

    if (headerRef.value) {
      gsap.fromTo(
        headerRef.value,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out'
        }
      )
    }

    if (contentLeftRef.value) {
      gsap.fromTo(
        contentLeftRef.value,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: 'power3.out'
        }
      )
    }

    if (sidebarRef.value) {
      const accordions = Array.from(sidebarRef.value.children)
      if (accordions.length) {
        gsap.fromTo(
          accordions,
          { opacity: 0, x: 20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.1,
            delay: 0.4,
            ease: 'power3.out'
          }
        )
      }
    }
  }
}

onMounted(() => {
  if (page.value) {
    nextTick(() => {
      initAnimations()
    })
  }
})

watch(page, (newPage) => {
  if (newPage) {
    nextTick(() => {
      initAnimations()
    })
  }
})
</script>

<template>
  <div v-if="page" class="w-full bg-white pt-24 md:pt-[100px] px-4 md:px-8 lg:px-[60px]">
    <!-- Header -->
    <div ref="headerRef" class="max-w-[1320px] mx-auto mb-16 md:mb-24">
      <h1
        class="font-serif text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] lg:leading-[56px] tracking-tight max-w-[1000px]">
        <span class="text-[#A8A8A8]">{{ page.title }}</span>
        <span class="text-[#121212]">{{ page.subtitle }}</span>
      </h1>
      <p class="font-sans text-[16px] md:text-[18px] leading-[28px] text-[#121212] opacity-80 mt-6">
        {{ page.type }}
      </p>
    </div>

    <!-- Content -->
    <div class="max-w-[1320px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-[60px] xl:gap-[80px]">

      <!-- Left: Image Gallery (Markdown Body) -->
      <div ref="contentLeftRef" class="w-full lg:flex-1">
        <ContentRenderer :value="page" />
      </div>

      <!-- Right: Sticky Accordions -->
      <div class="w-full lg:w-[424px] lg:shrink-0 relative">
        <div ref="sidebarRef" class="sticky top-24 flex flex-col gap-2">

          <WorkAccordion v-if="page.startingPoint" title="Starting point" :content="page.startingPoint" />

          <WorkAccordion v-if="page.outcome" title="Outcome" :content="page.outcome" />

          <WorkAccordion v-if="page.techStack && page.techStack.length" title="Tech stack">
            <ul class="flex flex-col gap-2">
              <li v-for="item in page.techStack" :key="item" class="flex items-center gap-2">
                <div class="w-[6px] h-[6px] rounded-full border border-[#A8A8A8]"></div>
                <span class="font-sans text-[14px] leading-[22px] text-[#3A4345] opacity-80">{{ item }}</span>
              </li>
            </ul>
          </WorkAccordion>

          <WorkAccordion v-if="page.credits && page.credits.length" title="Credits">
            <ul class="flex flex-col gap-2">
              <li v-for="item in page.credits" :key="item" class="flex items-center gap-2">
                <div class="w-[6px] h-[6px] rounded-full border border-[#A8A8A8]"></div>
                <span class="font-sans text-[14px] leading-[22px] text-[#3A4345] opacity-80">{{ item }}</span>
              </li>
            </ul>
          </WorkAccordion>

          <a v-if="page.websiteUrl && page.websiteLink" :href="page.websiteUrl" target="_blank"
            class="mt-4 bg-[#121212] text-white px-6 py-4 rounded-lg font-sans font-medium text-[16px] flex items-center justify-center gap-3 hover:bg-[#2a2a2a] transition-colors shadow-sm self-start">
            {{ page.websiteLink }}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 5L21 12M21 12L14 19M21 12L3 12" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>

        </div>
      </div>

    </div>
    <MinimalFooter class="pt-[100px]" />
  </div>

  <div v-else class="w-full h-screen flex items-center justify-center bg-white">
    <p class="font-sans text-[#121212] opacity-50">Loading...</p>
  </div>
</template>

<style scoped></style>
