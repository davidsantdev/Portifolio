<script setup lang="ts">
import Aboutme from "./aboutme.vue";
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import Scroll from "./Scroll.vue";
import Skills from "./Skills.vue";
import Stacks from "./stacks.vue";

const animationPath = new URL("@/assets/img/men.json", import.meta.url).href;
</script>

<template>
  <div>
    <Header />
    <div class="block md:flex justify-center">
      <div>
        <h2 class="text-[#1B1B56] font-bold text-[35px]">David Santos.</h2>

        <h2 class="text-[#1B1B56] font-light text-[35px]">
          FrontEnd Development
        </h2>
      </div>

      <div>
        <lottie-player
          :src="animationPath"
          background="transparent"
          speed="1"
          style="width: 400px; height: 300px"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
    <Skills />
    <Aboutme />
    <Scroll />

    <Stacks />

    <Footer />
  </div>
</template>
