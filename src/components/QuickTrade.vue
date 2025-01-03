<script setup lang="ts">
import LabeledInput from './LabeledInput.vue';

</script>
<template>
    <div class="p-4">
        <div>
            <div>
                <h2 class="text-blue-900">Quick Trade</h2>
                <p class="text-xs text-gray-500"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <LabeledInput label="Amount" />
            <LabeledInput label="Price BPL" />
            <LabeledInput label="Fee (1%)" />
            <LabeledInput label="Total BPL" />

            <div class="flex items-center gap-8 mt-10">
                <p class="w-6/12 text-xs text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum sint reiciendis esse expedita
                </p>

                <div class="w-6/12 flex gap-3">
                    <button class="bg-green-500 hover:bg-green-800 block py-1 text-white rounded-3xl w-5/12">
                        BUY
                    </button>
                    <button class="bg-red-500 hover:bg-red-800 block py-1 text-white rounded-3xl w-5/12">
                        SELL
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>