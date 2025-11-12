<script setup lang="ts">
import { Download, Minus } from "lucide-vue-next";
import ContainerLayout from "@/components/ContainerLayout.vue";
import Header from "./Header.vue";

// caminho resolvido corretamente pelo Vite
const animationPath = new URL("@/assets/img/fame.json", import.meta.url).href;
</script>

<template>
  <div class="bg-[#4A4CFF] h-120">
    <Header class="text-white" />
    <div class="justify-center pt-20 block md:flex justify-between flex-wrap">
      <div class="w-[100%] md:w-[40%]">
        <p class="text-white text-[20px] flex">
          <span> <Minus class="mt-1" /> </span> Meus Projetos
        </p>
        <h1 class="text-white font-bold text-[45px]">
          Veja meus projetos concluídos
        </h1>
      </div>

      <div class="w-[100%] md:w-[40%] flex items-end flex-col">
        <lottie-player
          :src="animationPath"
          background="transparent"
          speed="1"
          loop
          autoplay
          class="w-[300px] md:w-[400px]"
        ></lottie-player>
      </div>
    </div>
  </div>
</template>
