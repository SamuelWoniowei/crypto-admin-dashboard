<script setup lang="ts">
import { inject, onMounted } from 'vue';
import CoinCard from '../components/CoinCard.vue';
import OrderCard from '../components/OrderCard.vue';
import QuickTrade from '../components/QuickTrade.vue';
import Layout from '../layout/Layout.vue';
const updatePage = inject('updatePage') as (page: string) => void;

onMounted(() => {
    updatePage('/crypto');
});
</script>
<template>
    <Layout title="Coin Details">
        <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div>
                <CoinCard icon="cryptocurrency-color:btc" name="Bitcoin" short="BTC" />
            </div>
            <div>
                <CoinCard icon="cryptocurrency-color:eth" name="Ethereum" short="ETH" />
            </div>
            <div>
                <CoinCard icon="cryptocurrency-color:bnb" name="Binance Coin" short="BNB" />
            </div>
            <div>
                <CoinCard icon="cryptocurrency-color:ada" name="Cardano" short="ADA" />
            </div>
        </section>
        <section class="flex flex-col lg:flex-row gap-3 mt-6">
            <div class="flex flex-col md:flex-row gap-3">
                <div class="bg-white rounded-xl md:w-6/12">
                    <OrderCard title="Buy" />
                </div>
                <div class="bg-white rounded-xl md:w-6/12">
                    <OrderCard title="Sell" />
                </div>
            </div>
            <div class="bg-white rounded-xl">
                <QuickTrade />
            </div>
        </section>
    </Layout>
</template>