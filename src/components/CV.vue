<script setup lang="ts">
import { Download, Minus } from "lucide-vue-next";
import Footer from "./Footer.vue";
</script>

<template>
  <div>
    <div class="justify-center mt-20 flex justify-between">
      <div class="w-[70%] md:w-[40%]">
        <p class="text-[#5250D2] text-[20px] flex">
          <span> <Minus class="mt-1" /> </span>Um dev que ama transformar linhas
          de código em boas experiências visuais.
        </p>
        <h1 class="text-[#1B1B56] font-bold text-[45px]">
          Baixe meu cúrriculo. Dá uma olhada
        </h1>

        <button class="p-2 mt-10 bg-[#4A4CFF] w-50 text-white rounded-[10px]">
          <a
            class="flex justify-center items-center gap-2"
            href="../assets/img/Currículo (1).pdf"
            download="David-Santos-CV.pdf"
          >
            Baixar CV <span> <Download /></span>
          </a>
        </button>
      </div>

      <div class="w-[20%] md:w-[40%] flex items-end flex-col h-100">
        <img src="../assets/img/cubo.png " class="w-50" alt="" />
        <img src="../assets/img/cubo.png " class="w-30" alt="" />
      </div>
    </div>

    <Footer />
  </div>
</template>
