<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted, type Ref } from 'vue';
import type { User } from '../types/user';
import { Icon } from '@iconify/vue';
import sidebarLinks from '../data/sidebarLinks';
import { inject } from 'vue';
const user = ref<User | null>(null);

const fetchRandomuser = async () => {

    try {
        const response = await axios.get('https://randomuser.me/api/');
        user.value = response.data.results[0];
    } catch (error) {
        console.error('Error fetching random user:', error);
    }
}

const currentPage = inject("currentPage") as Ref<string>;
onMounted(fetchRandomuser);

const sidebarOpen = inject<boolean>("sidebarOpen");
const toggleSidebar = inject<() => void>("toggleSidebar");


</script>
<template>
    <div class=" flex flex-col items-center h-screen overflow-y-scroll no-scrollbar">

        <div class="mt-5 mb-10" :class="sidebarOpen ? 'mt-20 lg:mt-5' : ''">
            <router-link to="/">
                <img src="/images/logo.png" alt="Logo" class="w-32 h-12" />
            </router-link>
        </div>
        <div class="mt-5">
            <div v-if="user">
                <div class="flex flex-col items-center text-center">
                    <img :src="user.picture.medium" alt="User Picture" class="block rounded-full" />
                    <p class="text-lg mt-2">Hello {{ user.name.first }}</p>
                    <p class="text-xs">{{ user.email }}</p>
                </div>
            </div>

            <div v-else class="h-32 w-32 flex items-center justify-center">
                <p>Loading...</p>
            </div>
        </div>
        <ul class="mt-10 space-y-6 text-gray-600 ">
            <li v-for="(link, index) in sidebarLinks" :key="index" class="flex gap-2 items-center">
                <router-link :to="link.href"
                    :style="currentPage === link.href ? { backgroundColor: 'blue', color: 'white' } : {}"
                    @click="sidebarOpen && toggleSidebar?.()"
                    class="flex items-center gap-2 w-full hover:bg-blue-400 hover:text-white py-2 px-6 rounded-3xl">
                    <Icon :icon="link.icon" class="w-8 h-8" />
                    {{ link.label }}
                </router-link>
            </li>
        </ul>

        <p class="text-gray-300 text-xs mt-5 text-center">Cryto admin Dashboard <br>
            Made with ❤️
        </p>
    </div>
</template>
