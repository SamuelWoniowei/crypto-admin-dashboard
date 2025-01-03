<script setup lang="ts">
import { formatMoney } from '../utils/formatMoney';
import RecentTrades from '../data/RecentTrades';
import { Icon } from "@iconify/vue";

</script>

<template>
    <div class="overflow-x-auto p-4">
        <div>
            <div>
                <h2 class="text-blue-900">Recent Trading Activities</h2>
                <p class="text-xs text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
        </div>
        <table class="min-w-full table-auto border-collapse mt-5">

            <tbody>
                <tr v-for="(trade, index) in RecentTrades" :key="index"
                    class="border-t border-gray-200">
                    <td class="p-5">
                        <p v-if="trade.profit" class="bg-green-600 rounded-full h-8 w-8 flex items-center justify-center">
                            <Icon icon="line-md:arrow-up" class="w-4 h-4 text-white" />
                        </p>
                        <p v-if="!trade.profit" class="bg-red-600 rounded-full h-8 w-8 flex items-center justify-center">
                            <Icon icon="line-md:arrow-down" class="w-4 h-4 text-white" />
                        </p>
                    </td>
                    <td class="p-5 text-sm text-gray-800">{{ trade.coin }}</td>
                    <td class="p-5 text-sm text-gray-500">{{ trade.time }}</td>
                    <td class="p-5 text-sm text-gray-800">
                        <span>
                            {{ trade.profit ? '+' : '-' }}{{ formatMoney(trade.amount) }}
                        </span>
                    </td>
                    <td>
                        <p :class="[
                            'text-center',
                            'rounded-2xl',
                            'text-sm',
                            'w-28',
                            'py-2',
                            'text-gray-800',
                            trade.status === 'Pending' ? 'bg-gray-100' : '',
                            trade.status === 'Completed' ? 'border-2 border-green-500 text-green-500' : '',
                            trade.status === 'Canceled' ? 'border-2 border-red-500 text-red-500' : ''
                        ]">
                            {{ trade.status }}
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>