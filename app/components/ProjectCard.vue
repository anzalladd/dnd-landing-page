<script setup lang="ts">
import { ChevronDown } from '@lucide/vue'

interface Task {
  label: string
  statusColor: string
}

const props = defineProps<{
  title: string
  tasks: Task[]
}>()
</script>

<template>
  <div
    class="relative w-full min-w-[270px] max-w-[350px] rounded-[21px] border border-[#131315] bg-[#050505] p-5 shadow-2xl">
    <!-- Header -->
    <div class="flex flex-row items-center justify-between mb-[18px]">
      <h3 class="font-sans font-bold text-[16px] leading-snug text-white m-0">
        {{ title }}
      </h3>
      <ChevronDown class="w-6 h-6 text-white/50" />
    </div>

    <!-- Task List -->
    <div class="flex flex-col items-stretch gap-3">
      <div v-for="(task, index) in tasks" :key="index"
        class="flex flex-row items-center justify-between rounded-lg border border-[#18181B] bg-[#0A0A0B] p-2.5 backdrop-blur-sm">
        <div class="flex flex-row items-center gap-3">
          <img src="/images/section-hero/figma-icon%201.svg" class="w-5 h-5 object-contain" alt="Figma" />
          <span class="font-sans text-[12px] leading-tight text-white m-0">{{ task.label }}</span>
        </div>
        <div class="w-[11px] h-[11px] rounded-full" :style="{ backgroundColor: task.statusColor }"></div>
      </div>
    </div>

  </div>
</template>
