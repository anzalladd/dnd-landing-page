<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  title: string
  content?: string
}>()

const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="w-full bg-[#F7F6F6] rounded-xl overflow-hidden mb-2.5 transition-all duration-300">
    <button @click="toggle"
      class="w-full flex items-center justify-between p-4 text-left transition-colors hover:bg-black/5">
      <span class="font-serif text-[24px] leading-8 text-[#121212] tracking-tight">{{ title }}</span>
      <div class="text-[#121212]">
        <svg v-if="!isOpen" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </button>
    <div class="overflow-hidden transition-all duration-300 ease-in-out"
      :style="{ maxHeight: isOpen ? '1000px' : '0px', opacity: isOpen ? 1 : 0 }">
      <div class="px-4 pb-4 pt-2">
        <slot>
          <p class="font-sans text-[14px] leading-[22px] text-[#3A4345] opacity-80" v-if="content">
            {{ content }}
          </p>
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
