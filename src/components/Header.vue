<script setup lang="ts">
import { Menu } from "lucide-vue-next";
import MenuHamburguer from "./menuHamburguer.vue";
</script>

<template>
  <div>
    <header class="flex">
      <div class="flex gap-30 p-3 justify-center items-center w-full">
        <div class="flex gap-10 justify-center items-center text-center">
          <RouterLink to="/Projetos">Projetos</RouterLink>
          <RouterLink to="/Sobre">Sobre</RouterLink>
          <RouterLink to="/">Home</RouterLink>
        </div>
      </div>
      <div class="p-4">
        <MenuHamburguer />
      </div>
    </header>
  </div>
</template>
