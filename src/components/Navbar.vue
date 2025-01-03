<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const search = ref("");
</script>
<template>
  <div class="hidden lg:flex justify-between items-center bg-white p-4 shadow-sm  px-8">
    <form class="w-1/3">
      <label
        for="search"
        class="flex bg-gray-100 rounded-3xl items-center px-4 py-3"
      >
        <input
          id="search"
          class="bg-transparent flex-1 ouline-none focus:outline-none text-sm"
          type="search"
          v-model="search"
          placeholder="Find something here..."
        />
        <Icon icon="mdi-light:magnify" class="text-gray-500 w-5 h-5" />
      </label>
    </form>
    <nav class="flex justify-center gap-6 items-center text-sm font-semibold ">
      <router-link class="hover:text-blue-500" to="/">Socials</router-link>
      <router-link class="hover:text-blue-500" to="/about">Live Training</router-link>
      <router-link class="hover:text-blue-500" to="/profile/1">Blog</router-link>
      <router-link class="hover:text-blue-500" to="/profile/1">Trading news</router-link>
    </nav>

    <nav class="flex items-center gap-3 ">
      <router-link
        to="#"
        class="bg-gray-100 p-2 rounded-full flex items-center justify-center hover:bg-blue-500 text-gray-800  hover:text-white"
      >
        <Icon
          icon="mdi-light:bell"
          class="w-5 h-5"
        />
      </router-link>
      <router-link
        to="#"
        class="bg-gray-100 p-2 rounded-full flex items-center justify-center hover:bg-blue-600 text-gray-800  hover:text-white"
      >
        <Icon
          icon="mdi-light:message-processing"
          class="w-5 h-5"
      /></router-link>
      <router-link
        to="#"
        class="bg-gray-100 p-2 rounded-full flex items-center justify-center hover:bg-blue-600 text-gray-800  hover:text-white"
      >
        <Icon
          icon="mdi-light:gift"
          class="w-5 h-5"
      /></router-link>
      <router-link
        to="#"
        class="bg-gray-100 p-2 rounded-full flex items-center justify-center hover:bg-blue-600 text-gray-800  hover:text-white"
      >
        <Icon
          icon="mdi-light:settings"
          class="w-5 h-5"
      /></router-link>
    </nav>
  </div>
</template>
