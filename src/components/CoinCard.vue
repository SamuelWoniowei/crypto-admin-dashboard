<script setup lang="ts">
import { Icon } from '@iconify/vue';

defineProps<{
    icon: string;
    name: string;
    short: string;
}>();
</script>
<template>
    <div class="bg-white p-4 rounded-xl">
        <h3>About</h3>
        <div class="flex items-center gap-3 my-4">
            <Icon :icon="icon" class="w-12 h-12" />
            <div>
                <p>{{ name }}</p>
                <p>{{ short }}</p>
            </div>
        </div>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa commodi perspiciatis voluptatem placeat
            quos iste quod facilis! A doloremque sed rerum voluptas et fugiat obcaecati maxime perspiciatis tempora?
            Culpa, nobis?
        </p>
    </div>
</template>