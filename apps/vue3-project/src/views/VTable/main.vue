<script setup lang="ts">
import { records, columns } from './constants';
import * as VTable from '@visactor/vtable';
import { ref, onMounted, nextTick } from 'vue';

const tableContainerRef = ref<HTMLElement | null>(null);
onMounted(() => {
    nextTick(() => {
        if (tableContainerRef.value) {
            const option: VTable.TYPES.ListTableConstructorOptions = {
                records,
                columns,
            };
            // 创建 VTable 实例
            const tableInstance = new VTable.ListTable(tableContainerRef.value, option);
        }

    })
})
</script>

<template>
    <div class="table-container" ref="tableContainerRef"></div>
</template>

<style>
.table-container {
    width: 600px;
    height: 400px;
}
</style>