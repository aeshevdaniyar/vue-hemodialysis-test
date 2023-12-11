<script setup lang="ts">
import { CalendarOutlined } from '@ant-design/icons-vue'
import { onBeforeUnmount, ref } from 'vue';
import dayjs from 'dayjs';
const currentTime = ref(new Date());
const updateCurrentTime = () => { currentTime.value = new Date(); };
const intervalHandle = setInterval(updateCurrentTime, 1000);
onBeforeUnmount(() => { clearInterval(intervalHandle); });
</script>

<template>
    <a-space>
        <CalendarOutlined />
        <a-typography>
            {{ dayjs(currentTime).format("DD.MM.YYYY HH:mm:ss") }}
        </a-typography>
    </a-space>
</template>

<style scoped></style>
 