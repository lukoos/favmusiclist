<template>
    <Button 
        icon="pi pi-plus-circle" 
        size="large" 
        :aria-label="$t('Add-new-album')" 
        :label="$t('Add-new-album')"
        outlined 
        @click="toggleAddForm()" 
    />
    <Dialog 
        v-model:visible="addFormVisibility" 
        modal 
        :header="$t('Add-new-album')">
        <AlbumAddForm />
    </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const addFormVisibility = ref(false);

function toggleAddForm() {
    addFormVisibility.value = !addFormVisibility.value;
}
</script>