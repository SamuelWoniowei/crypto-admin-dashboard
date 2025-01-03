<script setup lang="ts">
defineProps<{
    percent: number;
    color: string;
    label: string;
}>();
</script>

<template>
    <div>
        <div class="relative w-20 h-20 rounded-full" :style="{
            background: `conic-gradient(${color} ${percent}%, lightgray ${percent}%)`
        }">
            <div class="absolute inset-0 h-16 w-16 m-auto rounded-full bg-white flex justify-center items-center">
                <p class="m-auto text-sm font-semibold">{{ percent }}%</p>
            </div>
        </div>
        <p class="text-center text-sm mt-1">
            {{ label }}
        </p>
    </div>
</template>