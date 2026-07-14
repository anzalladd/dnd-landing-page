<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisibleText = ref(false)
const isVisibleImage = ref(false)
const isVisibleCard = ref(false)

onMounted(() => {
  setTimeout(() => { isVisibleText.value = true }, 200)
  setTimeout(() => { isVisibleImage.value = true }, 400)
  setTimeout(() => { isVisibleCard.value = true }, 600)
})
</script>

<template>
  <section class="w-full flex flex-col items-stretch pt-8 pb-8 px-4 md:pt-10 md:pb-10 md:px-8 lg:pt-[40px] lg:pb-[40px] lg:px-[60px] gap-8 lg:gap-[10px] max-w-8xl mx-auto">
    <div class="flex flex-col self-stretch gap-6 md:gap-8 lg:gap-[40px]">
      
      <!-- Headline -->
      <h1 
        class="font-basis font-medium text-[28px] leading-[36px] md:text-[32px] md:leading-[40px] lg:text-[40px] lg:leading-[48px] tracking-[-0.005em] text-[#121212] transition-all duration-1000 ease-out"
        :class="isVisibleText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <span class="text-[#A8A8A8]">No handoffs. No guesswork.</span><br />
        Just one team, working closely<br />
        with you to turn ideas into real, working products.
      </h1>

      <!-- KV Container -->
      <div 
        class="relative w-full h-[600px] md:h-[650px] lg:h-[529px] rounded-[12px] overflow-hidden flex flex-col justify-end lg:block transition-all duration-1000 ease-out"
        :class="isVisibleImage ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'"
      >
        <!-- Background Image -->
        <!-- Mobile/Tablet: Use object-cover inset-0 -->
        <!-- Desktop: Use the exact absolute positioning from Figma -->
        <img 
          src="/images/header-hero/hero-bg.png" 
          alt="Hero background" 
          class="absolute inset-0 w-full h-full object-cover lg:inset-auto lg:left-0 lg:top-[-82px] lg:w-[1320px] lg:h-[743px] lg:max-w-none" 
        />
        
        <!-- Floating Card Container -->
        <!-- Mobile/Tablet: Place at the bottom, centered -->
        <!-- Desktop: Absolute position relative to container -->
        <div 
          class="relative lg:absolute lg:right-[510px] lg:top-[64px] flex flex-row justify-center w-full lg:w-auto p-[6.3px] gap-[3.94px] lg:rounded-[23.64px] bg-transparent mb-4 lg:mb-0 z-10 transition-all duration-1000 ease-out"
          :class="isVisibleCard ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
        >
          
          <!-- Inner Card -->
          <div class="flex flex-row items-center p-[16px] lg:p-[23.64px_15.76px] gap-[2.66px] w-[90%] max-w-[320px] lg:w-[312.93px] lg:max-w-none bg-white rounded-[16px] lg:rounded-[21.31px] shadow-lg lg:shadow-none">
            
            <div class="flex flex-col items-stretch gap-[12px] lg:gap-[15.76px] w-full">
              
              <!-- Badges -->
              <div class="flex flex-row justify-between items-center self-stretch">
                <div class="flex flex-row items-center justify-center p-[3.2px_5.33px] gap-[2.66px] bg-[#121212] rounded-[6.39px] shadow-[0_1.58px_1.58px_rgba(85,85,85,0.25)]">
                  <span class="font-basis font-normal text-[8.52px] leading-[14.91px] tracking-[-0.01em] text-white">Design & Development</span>
                </div>
                
                <div class="flex flex-row items-center justify-center p-[3.2px_5.33px] gap-[2.66px] bg-[#66E27D] rounded-[6.39px] shadow-[0_1.58px_1.58px_rgba(85,85,85,0.25)]">
                  <span class="font-basis font-normal text-[8.52px] leading-[14.91px] tracking-[-0.01em] text-black">Available for new project!</span>
                </div>
              </div>
              
              <!-- Text content -->
              <div class="flex flex-col self-stretch gap-[12px] lg:gap-[15.76px]">
                <div class="flex flex-col self-stretch items-stretch gap-[4px] lg:gap-[7.88px]">
                  <h2 class="font-basis font-bold text-[14px] lg:text-[15.76px] tracking-[-0.01em] text-black">Hi, We are D&D Associates</h2>
                  <p class="font-basis font-normal text-[10px] lg:text-[8.67px] leading-[14px] lg:leading-[14.91px] tracking-[-0.01em] text-[#808080]">
                    We work across Mobile App Design, Web Design, Web App/Dashboard Design, Website Development, and Logo & Brand Identity. Our team is full-time, dedicated, and hands-on from first sketch to final deployment.
                  </p>
                </div>
                
                <!-- Card Image -->
                <div class="relative w-full h-[180px] lg:w-[281.41px] lg:h-[219.98px] rounded-[0px_0px_12px_12px] lg:rounded-[0px_0px_15.76px_15.76px] overflow-hidden">
                  <img src="/images/header-hero/hero-card-img.png" alt="Card visual" class="absolute top-[-80px] lg:top-[-105.15px] left-[-30px] lg:left-[-48.85px] w-[120%] lg:w-[383.33px] lg:h-[430.21px] object-cover max-w-none" />
                  
                  <!-- Gradient Overlay -->
                  <div class="absolute top-0 left-0 w-full h-[40px] lg:h-[52px] bg-gradient-to-b from-white to-transparent"></div>
                  
                  <!-- Location Pin -->
                  <div class="absolute bottom-[20px] lg:bottom-[27px] left-[10px] lg:left-[9.85px] flex flex-row items-center gap-[4px] lg:gap-[1.58px]">
                    <img src="/images/header-hero/map-point.svg" alt="Location" class="w-[12px] h-[12px] lg:w-[9.46px] lg:h-[9.46px]" />
                    <span class="font-basis font-normal text-[10px] lg:text-[8.67px] leading-[14px] lg:leading-[14.91px] tracking-[-0.01em] text-white">Jakarta, IND</span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  </section>
</template>
