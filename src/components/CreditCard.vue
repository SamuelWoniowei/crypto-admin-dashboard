<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { formatMoney } from "../utils/formatMoney";
interface CardDetails {
    amount: number;
    name: string;
    expirationDate: string;
    icon: string;
    color?: string;
}
defineProps<CardDetails>();
</script>
<template>
    <div class="rounded-xl text-white p-4 cursor-pointer hover:bg-black" :class="[color ? color : 'bg-blue-500']" >
        <h3 class="text-xs">Main Balance</h3>
        <div class="flex items-end justify-between">
            <p class="text-lg ">{{ formatMoney(amount) }}</p>
            <p>

                <Icon :icon="icon" class="w-8 h-8 text-white " />
            </p>
        </div>
        <div class="flex items-center gap-4 mt-6">
            <div>
                <p class="text-xs">VALID THRU</p>
                <p>{{ expirationDate }}</p>
            </div>
            <div>
                <p class="text-xs">CARD HOLDER </p>
                <p>{{ name }}</p>
            </div>
        </div>
    </div>

</template>