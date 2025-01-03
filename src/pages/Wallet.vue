<script setup lang="ts">
import CircleProgress from '../components/CircleProgress.vue';
import CreditCard from '../components/CreditCard.vue';
import QuickTransfer from '../components/QuickTransfer.vue';
import RecentTrading from '../components/RecentTrading.vue';
import Layout from '../layout/Layout.vue';
import { Icon } from '@iconify/vue';
import { formatMoney } from '../utils/formatMoney';
import BarChart from '../components/BarChart.vue';
import { inject, onMounted } from 'vue';

const updatePage = inject('updatePage') as (page: string) => void;

onMounted(() => {
    updatePage('/wallet');
});

</script>
<template>
    <Layout title="Wallets">
        <div class="mt-6 lg:p-4 ">
            <section class="flex flex-col md:flex-row gap-4">
                <div class="space-y-4 md:w-6/12 lg:w-3/12 cursor-pointer">
                    <CreditCard :amount="15932" :name="'Sophia Turner'" :expirationDate="'09/25'"
                        :icon="'logos:mastercard'" />

                    <CreditCard :amount="68214" :name="'Ethan Williams'" :expirationDate="'06/26'"
                        :icon="'logos:mastercard'" :color="'bg-red-600'" />

                    <CreditCard :amount="54000" :name="'Olivia Harris'" :expirationDate="'11/24'"
                        :icon="'logos:bitcoin'" :color="'bg-black'" />

                    <CreditCard :amount="73684" :name="'Liam Martin'" :expirationDate="'02/27'" :icon="'logos:visa'"
                        :color="'bg-green-600'" />
                </div>
                <div class="lg:w-9/12 space-y-4">
                    <div class="flex items-center justify-between">
                        <h3 class="text-gray-700">Card Details</h3>
                        <div class="flex gap-4">
                            <button class="text-blue-800">Generate Number</button>
                            <button class="text-gray-500">Edit</button>
                        </div>
                    </div>
                    <div class="bg-white flex flex-col lg:flex-row gap-6 rounded-xl shadow-sm border border-gray-100 p-3">
                        <div class="lg:w-6/12">
                            <div class="flex flex-wrap p-4 space-y-5">
                                <div class="flex w-full space-x-5">
                                    <div class="w-1/2">
                                        <p class="text-sm text-gray-400">Card Name</p>
                                        <p class="font-medium">Main Balance</p>
                                    </div>
                                    <div class="w-1/2">
                                        <p class="text-sm text-gray-400">Bank Name</p>
                                        <p class="font-medium">ABC Center Bank</p>
                                    </div>
                                </div>

                                <div class="flex w-full space-x-5">
                                    <div class="w-1/2">
                                        <p class="text-sm text-gray-400">Valid Date</p>
                                        <p class="font-medium">09/25</p>
                                    </div>
                                    <div class="w-1/2">
                                        <p class="text-sm text-gray-400">Card Holder</p>
                                        <p class="font-medium">Sophia Turner</p>
                                    </div>
                                </div>

                                <div class="flex w-full space-x-5">
                                    <div class="w-1/2">
                                        <p class="text-sm text-gray-400">Card Number</p>
                                        <p class="font-medium">**** **** **** 0823</p>
                                    </div>
                                    <div class="w-1/2">
                                        <p class="text-sm text-gray-400">Card Theme</p>
                                        <div class="flex gap-2">
                                            <p class="w-6 h-6 bg-purple-600 rounded-full"></p>
                                            <p class="w-6 h-6 bg-orange-600 rounded-full"></p>
                                            <p
                                                class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                                <Icon icon="material-symbols:check-small" class="w-4 h-4 text-white" />
                                            </p>
                                            <p class="w-6 h-6 bg-green-600 rounded-full"></p>
                                            <p class="w-6 h-6 bg-teal-600 rounded-full"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 class="text-gray-400 mt-3">Monthly Limits</h4>
                            <div class="flex gap-4 mt-6">
                                <CircleProgress :percent="80" :color="'blue'" :label="'Main Limits'" />
                                <CircleProgress :percent="33" :color="'green'" :label="'Seconds'" />
                                <CircleProgress :percent="7" :color="'red'" :label="'Others'" />
                                
                            </div>
                        </div>
                    </div>

                    <article class="bg-white rounded-xl p-4">
                        <div>
                            <h2 class="text-blue-900">Wallet Activity</h2>
                            <p class="text-xs text-gray-500">Transfer money to your friends and family in a few seconds.
                            </p>
                        </div>
                        <div class="flex items-center gap-2 mt-5">
                            <span class="text-xl font-semibold">{{ formatMoney(22562.14) }}</span>
                            <div class="flex items-start text-green-500">
                                <span class="text-xs">7% </span>
                                <span class=" text-sm ">
                                    <Icon icon="ic:baseline-arrow-drop-up" class="text-green-500 w-4 h-4" />
                                </span>
                            </div>
                        </div>
                        <BarChart />
                    </article>
                </div>
            </section>
            <section class="flex flex-col lg:flex-row gap-4 mt-6">
                <div class="bg-white rounded-xl lg:w-7/12">
                    <RecentTrading />
                </div>
                <div class="bg-white rounded-xl lg:w-5/12">
                    <QuickTransfer />
                </div>
            </section>
        </div>
    </Layout>
</template>
