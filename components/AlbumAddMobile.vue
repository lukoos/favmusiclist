<template>
    <Button 
        v-if="!addFormVisibility" 
        class="w-full"
        icon="pi pi-plus-circle" 
        size="large" 
        :aria-label="$t('Add-new-album')"
        :label="$t('Add-new-album')" 
        @click="toggleAddForm()" 
    />
    <div 
        v-if="addFormVisibility"
        class=""
        >
        <h3 
            class="mb-4 flex justify-center items-center">
            <span>{{ $t('Add-new-album') }}</span>
            <Button 
                class="!absolute right-0" 
                icon="pi pi-times-circle" 
                variant="text" 
                rounded 
                :aria-label="$t('Close')"
                @click="toggleAddForm()" 
            />
        </h3>
        <AlbumAddForm />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const addFormVisibility = ref(false);

function toggleAddForm() {
    addFormVisibility.value = !addFormVisibility.value
}
</script>
