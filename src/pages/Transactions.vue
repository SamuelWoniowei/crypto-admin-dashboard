<script setup lang="ts">
import { inject, ref, computed, onMounted } from 'vue';
import { Icon } from "@iconify/vue";
import Layout from '../layout/Layout.vue';
import transactions from '../data/transactions';

const updatePage = inject('updatePage') as (page: string) => void;

onMounted(() => {
  updatePage('/transactions');
});

const currentPage = ref(1);
const itemsPerPage = 10;
const sortBy = ref<string | null>(null);
const sortOrder = ref<'asc' | 'desc'>('asc');

const filters = ref({
  transactionId: '',
  from: '',
  to: '',
  coin: '',
  status: ''
});

const filteredTransactions = computed(() => {
  let filtered = transactions.filter((transaction) => {
    return (
      (transaction.id.toLowerCase().includes(filters.value.transactionId.toLowerCase())) &&
      (transaction.from.toLowerCase().includes(filters.value.from.toLowerCase())) &&
      (transaction.to.toLowerCase().includes(filters.value.to.toLowerCase())) &&
      (transaction.coin.toLowerCase().includes(filters.value.coin.toLowerCase())) &&
      (transaction.status.toLowerCase().includes(filters.value.status.toLowerCase()))
    );
  });

  if (sortBy.value) {
    filtered = filtered.sort((a, b) => {
      const aValue = a[sortBy.value as keyof typeof a];
      const bValue = b[sortBy.value as keyof typeof b];

      if (aValue < bValue) return sortOrder.value === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder.value === 'asc' ? 1 : -1;
      return 0;
    });
  }

  const start = (currentPage.value - 1) * itemsPerPage;
  return filtered.slice(start, start + itemsPerPage);
});

const totalPages = computed(() => {
  return Math.ceil(filteredTransactions.value.length / itemsPerPage);
});

const sortTable = (column: string) => {
  if (sortBy.value === column) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
  } else {
    sortBy.value = column;
    sortOrder.value = 'asc';
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};
</script>
<template>
  <Layout title="Transactions List">
    <div class="p-4 bg-white mt-6">

      <div class="hidden lg:flex gap-4 mb-4">
        <input v-model="filters.transactionId" type="text" placeholder="Search by Transaction ID"
          class="p-2 border rounded" />
        <input v-model="filters.from" type="text" placeholder="Search by From" class="p-2 border rounded" />
        <input v-model="filters.to" type="text" placeholder="Search by To" class="p-2 border rounded" />
        <input v-model="filters.coin" type="text" placeholder="Search by Coin" class="p-2 border rounded" />
        <input v-model="filters.status" type="text" placeholder="Search by Status" class="p-2 border rounded" />
      </div>
      <div class="overflow-x-auto no-scrollbar">
        <table class="min-w-full table-auto border-separate border-spacing-y-6 text-sm ">
          <thead>
            <tr class="text-left">
              <th>[]</th>
              <th @click="sortTable('id')" class="cursor-pointer">
                <div class="flex items-center gap-2">
                  Transaction ID
                  <Icon icon="bi:arrow-up-down" class="w-3 h-3" />
                </div>
              </th>
              <th @click="sortTable('date')" class="cursor-pointer">
                <div class="flex items-center gap-2">
                  Date
                  <Icon icon="bi:arrow-up-down" class="w-3 h-3" />
                </div>
              </th>
              <th @click="sortTable('from')" class="cursor-pointer">
                <div class="flex items-center gap-2">
                  <span>From</span>
                  <Icon icon="bi:arrow-up-down" class="w-3 h-3" />
                </div>
              </th>
              <th @click="sortTable('to')" class="cursor-pointer">
                <div class="flex items-center gap-2">
                  To
                  <Icon icon="bi:arrow-up-down" class="w-3 h-3" />
                </div>
              </th>
              <th @click="sortTable('coin')" class="cursor-pointer">
                <div class="flex items-center gap-2">
                  Coin
                  <Icon icon="bi:arrow-up-down" class="w-3 h-3" />
                </div>
              </th>
              <th @click="sortTable('amount')" class="cursor-pointer">
                <div class="flex items-center gap-2">
                  Amount
                  <Icon icon="bi:arrow-up-down" class="w-3 h-3" />
                </div>
              </th>
              <th @click="sortTable('note')" class="cursor-pointer">
                <div class="flex items-center gap-2">
                  Note
                  <Icon icon="bi:arrow-up-down" class="w-3 h-3" />
                </div>
              </th>
              <th @click="sortTable('status')" class="cursor-pointer">
                <div class="flex items-center gap-2">
                  Status
                  <Icon icon="bi:arrow-up-down" class="w-3 h-3" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(transaction, index) in filteredTransactions" :key="index">
              <td>
                <p v-if="transaction.profit" class="bg-green-600 rounded-full h-8 w-8 flex items-center justify-center">
                  <Icon icon="line-md:arrow-up" class="w-4 h-4 text-white" />
                </p>
                <p v-if="!transaction.profit" class="bg-red-600 rounded-full h-8 w-8 flex items-center justify-center">
                  <Icon icon="line-md:arrow-down" class="w-4 h-4 text-white" />
                </p>
              </td>
              <td class="px-4">{{ transaction.id }}</td>
              <td class="px-4">{{ transaction.date }}</td>
              <td class="px-4">{{ transaction.from }}</td>
              <td class="px-4">{{ transaction.to }}</td>
              <td class="px-4">{{ transaction.coin }}</td>
              <td class="px-4">{{ transaction.amount }}</td>
              <td class="px-4">{{ transaction.note || 'None' }}</td>
              <td class="px-4">{{ transaction.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </Layout>
</template>
