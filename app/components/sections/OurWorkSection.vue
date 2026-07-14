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
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Ezy - HR Management System App',
    category: 'Products',
    tags: 'Mobile App Design & UX Research',
    image: '/images/projects/project-1.png'
  },
  {
    id: 2,
    title: 'Trovant - Web Healthcare Distributor',
    category: 'Development',
    tags: 'UX Audit, Web Design & Web Development',
    image: '/images/projects/project-2.png'
  },
  {
    id: 3,
    title: 'Get.Ai - Financial Payment App',
    category: 'Products',
    tags: 'Mobile App Design & UX Research',
    image: '/images/projects/project-3.png'
  }
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') {
    return projects
  }
  return projects.filter(p => p.category === activeFilter.value)
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
  <section ref="sectionRef" class="w-full max-w-7xl mx-auto py-24 px-4 md:px-8 bg-white min-h-[800px]">
    <div class="flex flex-col gap-10">

      <!-- Top Text -->
      <h2
        class="font-sans font-medium text-[32px] md:text-[36px] leading-[40px] md:leading-[44px] tracking-[-0.005em] max-w-[800px] text-[#121212] transition-all duration-1000 ease-out"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
        <span class="text-[#A8A8A8]">Our Work.</span> An overview of recent case studies, as well as a selection of our
        self-initiated projects.
      </h2>

      <!-- Filters & See All -->
      <div
        class="flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-1000 delay-200 ease-out"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
        <div class="flex flex-row flex-wrap items-center gap-2">
          <button v-for="filter in filters" :key="filter" @click="activeFilter = filter"
            class="px-6 py-2 rounded-[40px] font-sans text-[14px] leading-[22px] tracking-[0.002em] transition-all duration-300 border"
            :class="[
              activeFilter === filter
                ? 'bg-black text-white border-black'
                : 'bg-transparent text-[#121212] border-[#E6E6E6] hover:border-black'
            ]">
            {{ filter }}
          </button>
        </div>

        <button class="flex flex-row items-center gap-2 group">
          <span class="font-sans text-[16px] leading-[24px] text-[#091416]">See all</span>
          <div
            class="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRight class="w-4 h-4" />
          </div>
        </button>
      </div>

      <!-- Project Grid -->
      <div class="mt-4 min-h-[400px]">
        <TransitionGroup 
          name="project-list" 
          tag="div" 
          class="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          @before-leave="onBeforeLeave"
        >
          <div v-for="(project, index) in filteredProjects" :key="project.id"
            class="flex flex-col gap-4 project-card"
            :class="{ 'is-visible': isVisible }"
            :style="{ '--delay': `${400 + index * 150}ms` }">
            <div class="w-full h-[344px] overflow-hidden bg-[#F3F3F3]">
              <img :src="project.image" :alt="project.title"
                class="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div class="flex flex-col gap-2">
              <h3 class="font-sans font-medium text-[20px] leading-[28px] tracking-[-0.002em] text-[#091416] m-0">
                {{ project.title }}
              </h3>
              <p class="font-sans text-[16px] leading-[24px] text-[#3A4345] opacity-80 m-0">
                {{ project.tags }}
              </p>
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
