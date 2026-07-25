<script setup lang="ts">
defineProps<{
  images: Array<{
    src: string
    span: number
    bgColor?: string
    objectFit?: 'cover' | 'contain'
    aspect?: string
  }>
}>()
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
    <div 
      v-for="(img, index) in images" 
      :key="index"
      class="overflow-hidden rounded-xl flex items-center justify-center w-full"
      :class="[
        img.span === 2 ? 'md:col-span-2' : 'md:col-span-1',
        img.aspect || (img.span === 2 ? 'aspect-[16/9] md:aspect-[21/9]' : 'aspect-square md:aspect-[4/3]'),
        img.aspect !== 'auto' ? 'relative' : ''
      ]"
      :style="{ backgroundColor: img.bgColor || 'transparent' }"
    >
      <img 
        :src="img.src" 
        :alt="`Work image ${index + 1}`"
        class="w-full h-full"
        :class="img.aspect !== 'auto' ? 'absolute inset-0' : 'block'"
        :style="{ objectFit: img.objectFit || (img.bgColor ? 'contain' : 'cover') }"
      />
    </div>
  </div>
</template>

<style scoped>
</style>
