<script setup lang="ts">
import Sidebar from "../components/Sidebar.vue";
import Navbar from "../components/Navbar.vue";
import { Icon } from "@iconify/vue";
import { inject, watch } from "vue";
defineProps<{ title: string }>();

const sidebarOpen = inject<boolean>("sidebarOpen");
const toggleSidebar = inject<() => void>("toggleSidebar");
//@ts-ignore
watch(sidebarOpen, (open) => {
  if (open) {
    document.body.style.overflow = "hidden";
    document.body.classList.add("blurred-background");
  } else {
    document.body.style.overflow = "";
    document.body.classList.remove("blurred-background");
  }
});
</script>

<template>
  <div class="flex relative">
    <div class="hidden lg:block w-2/12 border h-screen sticky top-0 overflow-y-scroll">
      <Sidebar />
    </div>

    <div class="w-full lg:w-10/12 bg-gray-100">
      <div
        class="flex  lg:hidden bg-white mb-5 px-3 py-2 items-center justify-between">
        <img src="/images/logo.png" alt="Logo" class="w-28 h-10" />
        <Icon @click="toggleSidebar" icon="solar:hamburger-menu-broken" class="w-6 h-6 text-gray-500 cursor-pointer" />
      </div>

      <Navbar />
      <div class="p-5 ">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl text-blue-900 font-semibold">
            {{ title }}
          </h1>
          <button class="flex items-center gap-2 bg-blue-700 text-white px-4 py-1 rounded">
            <Icon icon="tabler:align-box-right-top" class="text-white" />
            <span class="text-sm"> Filter </span>
          </button>
        </div>
        <slot />
      </div>
    </div>
  </div>

  <section v-if="sidebarOpen"
    class="absolute w-2/3 md:w-1/2 lg:hidden bg-white right-0 top-0 h-screen z-50 transform transition-all duration-300 ease-in-out">
    <div class="relative">
      <Sidebar />
      <Icon v-if="sidebarOpen" icon="material-symbols-light:cancel-outline-rounded"
        class="absolute top-5 right-5 text-3xl text-red-800 cursor-pointer lg:hidden" @click="toggleSidebar" />
    </div>
  </section>
</template>