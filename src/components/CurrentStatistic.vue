<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from "@iconify/vue";
interface Progress {
    label: string;
    value: number;
    percent: number;
    color: string;
}

const progressBars = ref<Progress[]>([
    { label: 'Income', value: 167884, percent: 70, color: 'blue-500', },
    { label: 'Spends', value: 56444, percent: 45, color: 'green-500' },
    { label: 'Installment', value: 89981, percent: 90, color: 'red-500' },
    { label: 'Invest', value: 12432, percent: 30, color: 'yellow-500' },
]);
</script>

<template>
    <div class="space-y-4 bg-white rounded-xl shadow-sm border border-gray-50 p-3">
        <div v-for="(progress, index) in progressBars" :key="index" class="w-full flex flex-col gap-1">
            <label class="text-sm">{{ progress.label }}</label>
            <div class="w-full bg-gray-300 rounded-full">
                <div :class="['bg-' + progress.color, 'h-2 rounded-full']" :style="{ width: `${progress.percent}%` }"></div>
            </div>

        </div>
        <div v-for="(progress, index)  in progressBars" :key="index" class=" text-xs text-gray-500">
            <div class="flex justify-between">
                <div class="flex items-center gap-1">
                    <Icon icon="material-symbols:circle"  :class="`text-${progress.color}`" />
                    <p>
                        {{ progress.label }} ({{ progress.percent }}%)
                    </p>

                </div>
                <p class="font-bold">${{ progress.value }}</p>

            </div>
        </div>
    </div>
</template>