<script setup lang="ts">
import { Github, Instagram, Linkedin } from "lucide-vue-next";
</script>

<template>
  <div>
    <footer
      class="mt-10 flex justify-between border-t-1 border-slate-300 p-3 bg-white"
    >
      <div>
        <p class="text-center text-sm py-4">
          © 2024 David Santos. All rights reserved.
        </p>
      </div>
      <div class="flex gap-4">
        <Linkedin />
        <Instagram />
        <Github />
      </div>
    </footer>
  </div>
</template>
