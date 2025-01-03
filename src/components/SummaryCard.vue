<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { formatMoney } from "../utils/formatMoney";
interface Props {
  icon: string;
  amount: number;
  percent: number;
  profit: boolean;
}
defineProps<Props>(); 
</script>

<template>
  <div class="bg-white px-4 py-7 shadow-sm border border-gray-100 rounded-lg flex items-center gap-4 ">
    <Icon :icon="icon" class="text-black w-10 h-10" />

    <div>
      <p class="text-lg font-semibold">{{ formatMoney(amount) }}</p>
      <div class="text-xs text-gray-500 flex items-center gap-1">

        <p :class="profit ? 'text-green-500' : 'text-red-500'" class="text-green-500 flex items-center">
          <Icon icon="carbon:arrow-up" v-if="profit" />
          <Icon icon="carbon:arrow-down" v-else />
          {{ percent }}%
        </p>
        <span class="text-gray400">This week</span>
      </div>
    </div>
  </div>
</template>
