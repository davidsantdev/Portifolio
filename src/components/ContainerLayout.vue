<script setup lang="ts">
import { Minus } from "lucide-vue-next";
import Header from "./Header.vue";
</script>

<template>
  <div
    class="md:min-h-screen md:bg-[url('@/assets/img/back.jpg')] bg-cover bg-center"
  >
    <Header />

    <div class="justify-center mt-20 block md:flex justify-between">
      <div class="w-[70%] md:w-[40%]">
        <p class="text-[#5250D2] text-[20px] flex">
          <span> <Minus class="mt-1" /> </span> Dev Front-end
        </p>
        <h1 class="text-[#1B1B56] font-bold text-[35px] md:text-[45px]">
          Olá, eu sou o David Santos.
        </h1>
      </div>

      <div class="w-[80%] md:w-[40%]">
        <img src="../assets/img/b.svg" class="w-150" alt="" />
      </div>
    </div>
  </div>
</template>
