<script setup lang="ts">
import Layout from "../layout/Layout.vue";
import SummaryCard from "../components/SummaryCard.vue";
import CurrentStatistic from "../components/CurrentStatistic.vue";
// @ts-ignore
import CurvyLineChart from "../components/CurvyLineChart.vue";
import CreditCard from "../components/CreditCard.vue";
import RecentTrading from "../components/RecentTrading.vue";
import OrderCard from "../components/OrderCard.vue";
import QuickTransfer from "../components/QuickTransfer.vue";
import QuickTrade from "../components/QuickTrade.vue";
import { inject, onMounted } from "vue";
const updatePage = inject('updatePage') as (page: string) => void;

onMounted(() => {
  updatePage('/');
});
</script>
<template>
  <Layout title="Dashboard">

    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      <SummaryCard :icon="'cryptocurrency-color:btc'" :amount="989" :percent="45" :profit="true" />
      <SummaryCard :icon="'cryptocurrency-color:eth'" :amount="22567" :percent="45" :profit="true" />
      <SummaryCard :icon="'cryptocurrency-color:ltc'" :amount="168331" :percent="45" :profit="false" />
      <SummaryCard :icon="'cryptocurrency-color:usdt'" :amount="7784" :percent="45" :profit="false" />
    </section>

    <section class="mt-6 flex flex-col md:flex-row gap-4 ">
      <div class="md:w-4/12 lg:w-3/12">
        <CurrentStatistic />
      </div>
      <div class="md:w-8/12 lg:w-9/12">
        <CurvyLineChart />
      </div>
    </section>

    <section class="flex items-center gap-3 mt-6 overflow-x-auto no-scrollbar">
      <div class="min-w-[300px] lg:w-1/2">
        <CreditCard :amount="12345" :name="'John Doe'" :expirationDate="'12/23'" :icon="'logos:mastercard'" />
      </div>

      <div class="min-w-[300px] lg:w-1/2">
        <CreditCard :amount="12345" :name="'John Doe'" :expirationDate="'12/23'" :icon="'logos:mastercard'"
          :color="'bg-red-500'" />
      </div>

      <div class="min-w-[300px] lg:w-1/2">
        <CreditCard :amount="98765" :name="'Jane Doe'" :expirationDate="'01/25'" :icon="'logos:bitcoin'"
          :color="'bg-yellow-500'" />
      </div>

      <div class="min-w-[300px] lg:w-1/2">
        <CreditCard :amount="54321" :name="'Alex Smith'" :expirationDate="'07/24'" :icon="'logos:visa'"
          :color="'bg-green-500'" />
      </div>
    </section>
    <section class="mt-6 flex flex-col lg:flex-row gap-3">
      <div class="lg:w-6/12 bg-white rounded-xl">
        <RecentTrading />
      </div>
      <div class="lg:w-6/12 flex flex-col md:flex-row gap-3">

        <div class="md:w-6/12 bg-white rounded-xl">
          <OrderCard title="Buy" />
        </div>
        <div class="md:w-6/12 bg-white rounded-xl">
          <OrderCard title="Sell" />
        </div>
      </div>
    </section>

    <section class="flex flex-col lg:flex-row gap-4 mt-6">
      <div class="bg-white rounded-xl ">
        <QuickTransfer />
      </div>
      <div class="bg-white rounded-xl">
        <QuickTrade />
      </div>
    </section>
  </Layout>
</template>
