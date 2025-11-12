<script setup lang="ts">
const animationPath = new URL("@/assets/img/hi.json", import.meta.url).href;
</script>

<template>
  <div class="bg-[#4A4CFF] mt-5 block text-center md:flex justify-center">
    <div class="w-[100%] md:w-[50%] mt-10">
      <h3 class="text-white text-[20px] text-center">Sobre mim</h3>

      <p class="text-[13px] text-slate-300">
        Sou um desenvolvedor front-end que encontrou no VueJS a ferramenta
        perfeita para transformar ideias em interfaces vivas e bem estruturadas.
        Gosto de unir código limpo, organização e boas práticas para criar
        aplicações que sejam tanto funcionais quanto agradáveis de usar. Minha
        experiência com freelancers me ensinou a valorizar clareza, eficiência e
        entrega de qualidade. Trabalho com TypeScript, Axios e TailwindCSS,
        sempre buscando equilíbrio entre desempenho, estética e manutenção do
        código.
      </p>
    </div>

    <div>
      <lottie-player
        :src="animationPath"
        background="transparent"
        speed="1"
        style="width: 300px; height: 300px"
        loop
        autoplay
      ></lottie-player>
    </div>
  </div>
</template>
