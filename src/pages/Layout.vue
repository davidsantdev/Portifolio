<script setup lang="ts">
import Scroll from "@/components/Scroll.vue";

import CV from "@/components/CV.vue";
import ContainerLayout from "@/components/ContainerLayout.vue";
import LayoutAbout from "@/pages/LayoutAbout.vue";
import LayoutProjects from "@/pages/LayoutProjects.vue";
import Projects from "@/components/Projects.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div>
    <ContainerLayout />

    <CV />
    <projects/>

    <Scroll />
    <Footer/>



  </div>
</template>
