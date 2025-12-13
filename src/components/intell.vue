<script setup lang="ts">

import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";

import { SquareArrowOutUpRight} from "lucide-vue-next";
import { Github } from "lucide-vue-next";
</script>

<template>

  <div>
    <Dialog>
      <DialogTrigger as-child>

        <div
            class="w-[100%] md:w-70 flex items-center flex-col border shadow border-slate-300 rounded-[20px] "
        >
          <img
              class="w-[70%] md-70 rounded-t-[20px]"
              src="../assets/img/p2.jpg"
              alt=""
          />
          <div class="p-4">
            <h2 class="font-bold text-[20px] md:text-[25px] text-[#1B1B56]">
              Intell Clone
            </h2>
            <div class="flex gap-2 font-medium flex-wrap mt-2">
              <p class="text-[#06b6d4]">Tailwind</p>
              <p class="text-[#34d399]">Vue</p>
              <p class="text-[#3e54a3]">Typescript</p>
              <p class="text-[#f472b6]">Shadcn</p>

            </div>


          </div>
        </div>

      </DialogTrigger>

      <dialog-content class="w-130 h-130 border-5 border-slate-300 shadow-lg bg-slate-100">
        <header class="bg-blue-600 z-10 h-14 absolute flex  w-full top-0 left-0 border-b-6 content-center items-center border-b-black">
          <h1  class="text-white text-[20px] p-3">Intell Clone </h1>

        </header>
        <div class="flex  flex-col   top-11 left-0 gap-3 p-4 h-110 absolute overflow-y-auto">

          <img src="../assets/img/Captura%20de%20tela%202025-12-13%20131757.png" alt="" class="border-4 border-slate-300">
          <div class="flex gap-3">
            <button class="w-30 bg-slate-200 p-1 border-2 border-slate-300 flex gap-3"> <SquareArrowOutUpRight size="17" class="mt-1"/>   WebSite</button>
            <button class="w-30 bg-slate-200 p-1 border-2 border-slate-300 flex gap-3"> <github size="17" class="mt-1"/>   Codigo</button>

          </div>

          <h3 class="font-bold text-[20px] text-blue-700">Sobre</h3>

          <p class="text-[13px] text-slate-500">
            Réplica moderna do site institucional da Intel, desenvolvida com
            foco em design responsivo, desempenho e boas práticas de
            front-end.
          </p>

          <h3 class="font-bold text-[20px] text-blue-700">Stacks</h3>

          <div class="flex gap-3 flex-wrap">
            <button class="w-30  p-1 border-2 border-slate-300 flex gap-3">  Tailwind  </button>
            <button class="w-30  p-1 border-2 border-slate-300 flex gap-3"> Vue.js  </button>


            <button class="w-30  p-1 border-2 border-slate-300 flex gap-3"> Typescript  </button>

            <button class="w-30  p-1 border-2 border-slate-300 flex gap-3"> Biblioteca Ui  </button>


          </div>




        </div>




      </dialog-content>
    </Dialog>
  </div>

</template>

<style scoped>

</style>