<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

// Provide a placeholder link, or you can use your actual cal.com link here.
const calLink = "d-dassociates-t8yhzk"

onMounted(() => {
  // GSAP animation for the entrance
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  tl.fromTo('.contact-headline', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.2)
  tl.fromTo('.cal-container', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.4)

  tl.fromTo('.left-angel',
    { opacity: 0, scale: 0.7, transformOrigin: 'bottom left' },
    { opacity: 1, scale: 1, duration: 1.0, ease: 'back.out(1.4)' },
    0.6,
  )
  tl.fromTo('.right-angel',
    { opacity: 0, scale: 0.7, transformOrigin: 'bottom right' },
    { opacity: 1, scale: 1, duration: 1.0, ease: 'back.out(1.4)' },
    0.7,
  )
  tl.fromTo('.left-pillar', { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 1.0 }, 0.8)
  tl.fromTo('.right-pillar', { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 1.0 }, 0.9)

    // Initialize Cal.com
    ; (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal; let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {}; cal.q = cal.q || [];
          let script = d.createElement("script");
          script.src = A;
          d.head.appendChild(script);
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api: any = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          typeof namespace === "string" ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

  // @ts-ignore
  Cal("init", { origin: "https://cal.com" });

  // @ts-ignore
  Cal("inline", {
    elementOrSelector: "#my-cal-inline",
    calLink: calLink,
    layout: "month_view",
    config: { theme: "light" }
  });

  // @ts-ignore
  Cal("ui", {
    theme: "light",
    styles: { branding: { brandColor: "#FF0000" } },
    hideEventTypeDetails: false,
    layout: "month_view"
  });
})
</script>

<template>
  <div class="relative w-full min-h-[calc(100vh-92px)] overflow-hidden bg-white flex flex-col items-center pt-[30px]">

    <!-- Background Elements -->
    <img src="/images/hero/left_char.webp" alt="" aria-hidden="true" class="left-angel pointer-events-none select-none
             absolute bottom-0 left-[-1%] md:left-[0%] 2xl:left-[4%] z-10
             h-[35vh] md:h-[45vh] lg:h-[50vh] 2xl:h-[60vh] w-auto
             object-contain object-bottom" style="opacity: 0; max-height: min(650px, calc(100svh - 440px));" />

    <img src="/images/hero/right_char.webp" alt="" aria-hidden="true" class="right-angel pointer-events-none select-none
             absolute bottom-0 right-[-5%] md:right-[0%] 2xl:right-[4%] z-10
             h-[35vh] md:h-[45vh] lg:h-[50vh] 2xl:h-[60vh] w-auto
             object-contain object-bottom" style="opacity: 0; max-height: min(650px, calc(100svh - 440px));" />

    <img src="/images/hero/left_pillar.webp" alt="" aria-hidden="true" class="left-pillar pointer-events-none select-none
             absolute bottom-0 left-[-2%] md:left-[-2%] xl:left-[0%] z-20
             h-[65vh] md:h-[70vh] lg:h-[75vh] 2xl:h-[85vh] w-auto max-h-[calc(100svh-380px)] md:max-h-[1000px]
             object-contain object-bottom" style="opacity: 0;" />

    <img src="/images/hero/right_pillar.webp" alt="" aria-hidden="true" class="right-pillar pointer-events-none select-none
             absolute bottom-0 right-[-2%] md:right-[-2%] xl:right-[0%] z-20
             h-[65vh] md:h-[70vh] lg:h-[75vh] 2xl:h-[85vh] w-auto max-h-[calc(100svh-380px)] md:max-h-[1000px]
             object-contain object-bottom" style="opacity: 0;" />

    <!-- Content -->
    <div class="relative z-30 flex flex-col items-center w-full px-4 max-w-[1000px] mx-auto">

      <!-- Headline -->
      <h1 class="contact-headline font-alegreya font-medium tracking-[-0.015em]
               text-[36px] leading-[44px]
               md:text-[54px] md:leading-[60px]
               lg:text-[60px] lg:leading-[68px]
               text-center" style="opacity: 0;">
        <span class="text-[#A8A8A8]">Book</span>
        <span class="text-[#121212]"> a 15 min call.</span><br />
        <span class="text-[#121212]">And we'll reach out.</span>
      </h1>

      <!-- Cal.com Widget Container -->
      <div class="cal-container w-full max-w-[960px] mx-auto flex justify-center bg-transparent rounded-[16px] relative"
        style="opacity: 0;">
        <div id="my-cal-inline"
          class="w-full max-w-[100%] flex justify-center h-[600px] md:h-[700px] overflow-hidden rounded-[16px]"></div>
      </div>
    </div>

  </div>
  <MinimalFooter />
</template>

<style scoped>
#my-cal-inline :deep(iframe) {
  margin: 0 auto !important;
}
</style>
