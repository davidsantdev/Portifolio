<script setup lang="ts">
import { Code, Github, Linkedin, Menu, User } from "lucide-vue-next";
import DropdownMenu from "./ui/dropdown-menu/DropdownMenu.vue";
import DropdownMenuTrigger from "./ui/dropdown-menu/DropdownMenuTrigger.vue";
import DropdownMenuContent from "./ui/dropdown-menu/DropdownMenuContent.vue";
import Button from "./ui/button/Button.vue";
import DropdownMenuSeparator from "./ui/dropdown-menu/DropdownMenuSeparator.vue";
</script>

<template>
  <div>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent class="w-70 border-0 bg-white">
        <div class="flex m-1">
          <img
            src="../assets/img/189097604.jpg"
            class="rounded-[50%] w-10 h-10"
            alt=""
          />
          <div class="flex-col flex">
            <Button variant="link">
              <a href="" class="flex gap-2">
                <Github class="mt-1" /> Davidsantdev</a
              ></Button
            >
          </div>
        </div>
        <hr class="border-slate-300" />
        <div class="flex flex-col justify-center items-start m-2">
          <Button variant="link">
            <a href="" class="flex gap-2">
              <Code class="mt-1" />
              <RouterLink to="/Projetos"> Projetos </RouterLink>
            </a>
          </Button>

          <Button variant="link">
            <a href="" class="flex gap-2">
              <Linkedin class="mt-1" />
              LinkedIn
            </a>
          </Button>

          <Button variant="link">
            <a href="" class="flex gap-2">
              <User class="mt-1" />
              Sobre mim
            </a>
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>
