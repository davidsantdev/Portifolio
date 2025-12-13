<script setup lang="ts">
import Davcine from "@/components/Davcine.vue";
import Intell from "@/components/intell.vue";
import Kley from "@/components/kley.vue";
import Lear from "@/components/lear.vue";
</script>

<template>
  <div>
    <div></div>
    <h2 class="font-bold text-[45px] text-[#1B1B56] text-center p-6">Projetos</h2>

    <div class="w-[100%] flex-col  md:flex-row flex justify-center p-5 items-center gap-6 flex-wrap">


      <kley/>
      <Intell/>


      <Davcine/>

      <lear/>
    </div>
  </div>
</template>
