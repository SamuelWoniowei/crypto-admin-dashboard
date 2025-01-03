<script setup lang="ts">
import { ref, provide } from 'vue';

const currentPage = ref<string>("/");
const updatePage = (page: string) => {
  currentPage.value = page;
};

const sidebarOpen = ref<boolean>(false);
const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};

provide("currentPage", currentPage);
provide("updatePage", updatePage);
provide("toggleSidebar", toggleSidebar);
provide("sidebarOpen", sidebarOpen);
</script>

<template>
  <div>
    <router-view />
  </div>
</template>