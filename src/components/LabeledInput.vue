<script setup lang="ts">
defineProps<{ label: string }>();
</script>
<template>
    <form @submit.prevent class="mt-5">
        <label for="amount" class="border rounded-2xl flex items-center overflow-hidden">
            <div class="w-3/12 bg-gray-100 h-full py-2 text-center text-blue-900 font-semibold text-sm rounded-2xl">
                <p>{{ label }}</p>
            </div>
            <input type="text" id="amount" class="text-right flex-grow py-2 px-4 outline-none focus:outline-none"
                placeholder="">
        </label>
    </form>
</template>