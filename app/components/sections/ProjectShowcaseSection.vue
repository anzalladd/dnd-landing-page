<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import ProjectCard from '~/components/ProjectCard.vue'

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
    { threshold: 0.4 } // Trigger when 40% of the section is visible
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})

const defaultTasks = [
  { label: 'Wireframe', statusColor: '#46B838' },
  { label: 'Branding', statusColor: '#E68800' },
  { label: 'User Interface', statusColor: '#46B838' },
  { label: 'Prototype', statusColor: '#469BFF' },
  { label: 'Finalize', statusColor: '#469BFF' },
]
</script>

<template>
  <section ref="sectionRef"
    class="relative w-full max-w-7xl mx-auto overflow-hidden py-32 px-4 rounded-[32px] my-16 bg-[#E6E6E6] min-h-[600px] flex items-center justify-center">
    <!-- Background Image -->
    <div class="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-[2000ms] ease-out"
      :class="isVisible ? 'scale-100' : 'scale-110'" style="background-image: url('/images/section-hero/bg-hero.jpg');">
    </div>

    <!-- Cards Container -->
    <div class="absolute bottom-[-50px] z-10 w-full max-w-5xl mx-auto flex items-end justify-center h-[500px] pb-12">

      <!-- Left Card (Tilted Left) -->
      <div class="absolute transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] z-10"
        :class="isVisible ? '-translate-x-[140px] translate-y-[20px] rotate-[-10deg] opacity-100 scale-95' : 'translate-y-[150%] rotate-[-20deg] opacity-0 scale-75'"
        style="transform-origin: bottom center;">
        <!-- Overlay to make background cards darker -->
        <div class="absolute inset-0 bg-black/60 rounded-[21px] z-20 pointer-events-none"></div>
        <ProjectCard title="iOS Application" :tasks="defaultTasks" class="opacity-70" />
      </div>

      <!-- Right Card (Tilted Right) -->
      <div class="absolute transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] z-10 delay-150"
        :class="isVisible ? 'translate-x-[140px] translate-y-[20px] rotate-[10deg] opacity-100 scale-95' : 'translate-y-[150%] rotate-[20deg] opacity-0 scale-75'"
        style="transform-origin: bottom center;">
        <!-- Overlay to make background cards darker -->
        <div class="absolute inset-0 bg-black/60 rounded-[21px] z-20 pointer-events-none"></div>
        <ProjectCard title="Web Application" :tasks="defaultTasks" class="opacity-70" />
      </div>

      <!-- Center Card (Straight) -->
      <div class="absolute transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] z-30 delay-[300ms]"
        :class="isVisible ? 'translate-y-[-10px] rotate-0 opacity-100 scale-105' : 'translate-y-[150%] rotate-0 opacity-0 scale-75'">
        <ProjectCard title="Project Website" :tasks="defaultTasks" />

        <!-- Floating Cursors superimposed on center card -->
        <!-- Jerome Bell Cursor -->
        <div
          class="absolute -left-[55px] top-[140px] z-50 flex flex-row items-center gap-1 drop-shadow-2xl pointer-events-none transition-all duration-1000 delay-[1000ms]"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'">
          <!-- Cursor Arrow -->
          <img src="/images/section-hero/Arrow.svg" alt="arrow" class="-rotate-90">
          <!-- Label Pill -->
          <div
            class="rounded-[54px] bg-[#27272B] border border-[#3F3F46] px-[12px] py-[7px] text-[14px] font-sans font-medium text-white shadow-xl whitespace-nowrap leading-none">
            Jerome Bell
          </div>
        </div>

        <!-- Floyd Miles Cursor -->
        <div
          class="absolute right-[0px] bottom-[30px] z-50 flex flex-row items-center gap-1 drop-shadow-2xl pointer-events-none transition-all duration-1000 delay-[1300ms]"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'">
          <!-- Cursor Arrow -->
          <!-- rotate -->
          <img src="/images/section-hero/Arrow.svg" alt="arrow" class="-rotate-90">
          <!-- Label Pill -->
          <div
            class="rounded-[54px] bg-[#27272B] border border-[#3F3F46] px-[12px] py-[7px] text-[14px] font-sans font-medium text-white shadow-xl whitespace-nowrap leading-none">
            Floyd Miles
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
