<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import LabeledInput from './LabeledInput.vue';
import type { User } from '../types/user';

const users = ref<User[]>([]);

const fetchRandomuser = async () => {
    try {
        const response = await axios.get('https://randomuser.me/api/', {
            params: {
                results: 8,
            },
        });
        users.value = response.data.results;
    } catch (error) {
        console.error('Error fetching random user:', error);
    }
}

onMounted(fetchRandomuser);

</script>
<template>
    <div class="p-4">
        <div>
            <div>
                <h2 class="text-blue-900">Quick Transfer</h2>
                <p class="text-xs text-gray-500">Transfer money to your friends and family in a few seconds.</p>
            </div>
        </div>
       <LabeledInput label="Amount"/>
        <div class="flex items-center justify-between mt-5 ">
            <h4 class="text-blue-900">Recent Contacts</h4>
            <button class="text-sm text-purple-900">View more</button>


        </div>
        <div v-if="users.length" class="flex gap-6 items-center overflow-x-auto mt-6 no-scrollbar">
            <div v-for="(user, index) in users" :key="index" class="flex-none cursor-pointer">
                <img :src="user.picture.medium"  alt="User Picture" class="block rounded-full" />
                <p class="text-sm mt-2 text-wrap">{{ user.name.first }} {{ user.name.last }}</p>
                <p class="text-sm  text-blue-900">@{{ user.name.first }}</p>
            </div>
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>

        <div class="flex items-center gap-6 mt-10">
            <p class="w-6/12 text-xs text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum sint reiciendis esse expedita 
            </p>
          
            <button class="bg-blue-500 hover:bg-blue-800 block py-2 text-white rounded-2xl w-5/12">
                Transfer now
            </button>
        </div>
    </div>
</template>