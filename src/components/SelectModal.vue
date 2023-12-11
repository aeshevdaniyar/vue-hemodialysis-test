
<script setup lang="ts">
import { DeleteOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PlusOutlined, RightOutlined } from "@ant-design/icons-vue";
import { computed, ref } from 'vue';

const props = defineProps<{
    list: {
        name: string,
        value: number
    }[],
    value: number | undefined,
    modalTitle: string
    onDeleteItem: (value: number) => void
    addItem: (name: string) => void
    onSelect: (value: { value: number; name: string }) => void
    placeholder: string
}>()

const open = ref(false)
const searchValue = ref("")
const addValue = ref("")
const filterList = computed(() => props.list.filter(({ name }) => name.toLowerCase().includes(searchValue.value.toLowerCase())))
const selectedItem = computed(() => props.list.filter(({ value }) => props.value == value)[0] || '')
const openModal = () => {
    open.value = true
}
const closeModal = () => {
    open.value = false
}
const onDelete = (value: number) => {
    props.onDeleteItem(value)
}
const addListItem = () => {
    if (addValue.value.length) {
        props.addItem(addValue.value)
        addValue.value = ''
    }
}
const onSelect = (value: number) => {
    props.onSelect(props.list.filter((item) => item.value == value)[0])
    open.value = false
}

</script>


<template>
    <a-modal v-model:open="open" :title="modalTitle" @ok="closeModal">
        <template #footer>
            <a-button type="primary" @click="closeModal">Закрыть</a-button>
        </template>

        <a-space style="width: 100%;" direction="vertical">


            <a-input v-model:value="searchValue" placeholder="Поиск позиции по первым символам" />



            <a-flex style="width: 100%;" gap="small">
                <a-input v-model:value="addValue" style="width: 100%;" placeholder="Добавить новую запись" />
                <a-button @click="addListItem">
                    <PlusOutlined />
                </a-button>
            </a-flex>

            <a-list item-layout="horizontal" :data-source="filterList" bordered>
                <template #renderItem="{ item }">
                    <a-list-item>
                        <template #actions>
                            <a-button danger @click="() => onDelete(item.value)">
                                <DeleteOutlined />
                            </a-button>
                            <a-button @click="() => onSelect(item.value)" k>
                                <RightOutlined />
                            </a-button>
                        </template>

                        <a-list-item-meta>
                            <template #title>
                                <span>{{ item.name }}</span>
                            </template>
                        </a-list-item-meta>
                    </a-list-item>
                </template>
            </a-list>
        </a-space>

    </a-modal>


    <a-space>
        <a-input :value="selectedItem.name" :placeholder="placeholder" />
        <a-button @click="openModal">
            <MenuFoldOutlined v-if="!open" />
            <MenuUnfoldOutlined v-if="open" />
        </a-button>
    </a-space>
</template>


<style scoped></style>
