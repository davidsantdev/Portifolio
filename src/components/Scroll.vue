<script setup lang="ts">
import { ChevronsUpDown } from "lucide-vue-next";
</script>

<template>
  <div class="flex gap-2 fixed top-[80%] left-10">
    <div
      class="bg-white shadow-[0_0_40px_rgba(0,0,0,0.4)] rounded-[50%] w-15 h-15 flex justify-center self-center items-center"
    >
      <ChevronsUpDown />
    </div>
    <p class="mt-5 font-medium text-[20px]">Scroll</p>
  </div>
</template>
