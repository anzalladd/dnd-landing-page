<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
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
    { threshold: 0.2 } // Trigger when 20% of the section is visible
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})

const filters = ['All', 'Products', 'Development', 'Brand Identity']
const activeFilter = ref('All')

interface Project {
  id: number
  title: string
  category: string // used for filtering
  tags: string     // display text below title
  image: string
  bgColor: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Tam Jiak - Asian Restaurant by Ho Jiak Group',
    category: 'Products',
    tags: 'Web Design',
    image: '/images/projects/project-1.png',
    bgColor: '#FFFFFF' // Aegean Grey-Blue
  },
  {
    id: 2,
    title: 'Get.Ai - Nigerian Financial & Payment App',
    category: 'Development',
    tags: 'Product Design & Brand Identity',
    image: '/images/projects/project-2.png',
    bgColor: '#FFFFFF' // Aegean Grey-Blue
  },
  {
    id: 3,
    title: 'RMA - EZY HRMS',
    category: 'Products',
    tags: 'Product Design & UX Audit',
    image: '/images/projects/project-3.png',
    bgColor: '#FFFFFF' // Aegean Grey-Blue
  },
  {
    id: 4,
    title: 'Trovant - Healthcare Distributor Website',
    category: 'Development',
    tags: 'Full Cycle Rebrand',
    image: '/images/projects/project-4-48930c.png',
    bgColor: '#FFFFFF' // Aegean Grey-Blue
  }
]

// The user requested to remove the filter UI, so we'll just show all projects
const filteredProjects = computed(() => {
  return projects
})

const onBeforeLeave = (el: Element) => {
  const htmlEl = el as HTMLElement
  const { width, height } = window.getComputedStyle(htmlEl)
  htmlEl.style.left = `${htmlEl.offsetLeft}px`
  htmlEl.style.top = `${htmlEl.offsetTop}px`
  htmlEl.style.width = width
  htmlEl.style.height = height
}
</script>

<template>
  <section ref="sectionRef" class="w-full max-w-8xl mx-auto py-24 px-4 md:px-8 bg-white min-h-[800px]">
    <!-- SVG Filter for Painting/Retro Dither Effect -->
    <svg width="0" height="0" class="absolute hidden">
      <filter id="retro-paint-filter">
        <feComponentTransfer>
          <feFuncR type="discrete" tableValues="0 0.15 0.3 0.45 0.6 0.75 0.9 1" />
          <feFuncG type="discrete" tableValues="0 0.15 0.3 0.45 0.6 0.75 0.9 1" />
          <feFuncB type="discrete" tableValues="0 0.15 0.3 0.45 0.6 0.75 0.9 1" />
        </feComponentTransfer>
      </filter>
    </svg>

    <div class="flex flex-col gap-10">

      <!-- Top Text -->
      <div class="flex justify-center w-full">
        <h2
          class="font-alegreya font-normal text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.01em] text-center max-w-[1200px] text-[#121212] transition-all duration-1000 ease-out"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
          <span class="text-[#A8A8A8]">Our work.</span> Recent case studies, plus a few things we built just because we
          wanted to.
        </h2>
      </div>

      <!-- Project Grid -->
      <div class="mt-4 min-h-[400px]">
        <TransitionGroup name="project-list" tag="div" class="relative grid grid-cols-1 md:grid-cols-2 gap-[24px]"
          @before-leave="onBeforeLeave">
          <div v-for="(project, index) in filteredProjects" :key="project.id"
            class="relative flex flex-col project-card rounded-[12px] overflow-hidden transition-transform duration-500 hover:scale-[1.02]"
            :class="{ 'is-visible': isVisible }"
            :style="{ '--delay': `${400 + index * 150}ms`, backgroundColor: project.bgColor }">

            <!-- Rough Wall Texture applied to the background color -->
            <div class="absolute inset-0 pointer-events-none opacity-50 mix-blend-color-burn"
              style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.04%22 numOctaves=%225%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E');">
            </div>

            <div class="w-full h-auto md:h-[315px] p-[16px_16px_0_16px] relative z-10">
              <div class="relative w-full h-full rounded-[12px] overflow-hidden group">
                <img :src="project.image" :alt="project.title"
                  class="w-full h-full object-cover rounded-[12px] transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>

            <div class="flex flex-col p-[12px_16px_24px_16px] gap-2 relative z-10">
              <h3
                class="font-alegreya font-normal text-[20px] md:text-[24px] leading-[28px] tracking-[-0.002em] text-[#121212] m-0">
                {{ project.title }}
              </h3>
              <div class="flex flex-row justify-between items-center w-full">
                <p class="font-sans text-[14px] leading-[24px] text-[#121212] opacity-80 m-0">
                  {{ project.tags }}
                </p>
                <p class="font-sans text-[14px] leading-[24px] text-[#121212] opacity-80 m-0">
                  November, 2023
                </p>
              </div>
            </div>

          </div>
        </TransitionGroup>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Initial Scroll Animation */
.project-card {
  opacity: 0;
  transform: translateY(48px);
  transition: all 1s ease-out;
  transition-delay: var(--delay);
}

.project-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Vue Filter Transitions */
.project-list-move,
.project-list-enter-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
  transition-delay: 0ms !important;
}

.project-list-move {
  z-index: 10;
}

.project-list-leave-active {
  transition: all 0.2s ease-out !important;
  transition-delay: 0ms !important;
  position: absolute;
  z-index: 0;
}

.project-list-enter-from,
.project-list-leave-to {
  opacity: 0 !important;
  transform: translateY(15px) scale(0.98) !important;
}
</style>
