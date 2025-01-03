<script setup lang="ts">
import { Icon } from '@iconify/vue';
import OrderTable from '../data/orderTable';
import { formatMoney } from '../utils/formatMoney';

defineProps<{ title: string }>();
</script>
<template>
    <div class="p-4">
        <div class="flex justify-between items-center px-4">
            <h3>{{ title }} Order</h3>
            <Icon icon="mdi-dots-vertical" class="w-6 h-6 text-gray-500 cursor-pointer" />


        </div>
        <table class="w-full  border-separate border-spacing-0 mt-5">
            <thead class="text-gray-500">
                <tr>
                    <th class="px-4 py-2 text-left">Price</th>
                    <th class="px-4 py-2 text-left">Amount</th>
                    <th class="px-4 py-2 text-left">Total</th>
                </tr>
            </thead>
            <tbody class="border-spacing-y-6">
                <tr v-for="(order, index) in OrderTable" :key="index" class="text-sm " :class="[title === 'Buy' ? 'hover:bg-blue-400 hover:text-white' : 'hover:bg-orange-400 hover:text-white']">
                    <td class="px-4 py-3">{{ order.price }}</td>
                    <td class="px-4 py-3">{{ order.amount }}</td>
                    <td class="px-4 py-3">{{ formatMoney(order.total) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>