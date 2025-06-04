<template>
    <div 
        v-if="layout === 'list'"
        class="flex justify-between items-center bg-white px-4 py-1 mb-3 rounded  hover:shadow transition-shadow duration-200 border-1 border-gray-200">
        <p>{{ item.title }}</p>
        <div>
            <Button 
                :style="{ color: item.favourite ? 'var(--color-custom-violet)' : 'var(--p-gray-300)' }" 
                class="mr-1"
                size="large" 
                icon="pi pi-star-fill" 
                variant="text" 
                rounded 
                :aria-label="$t('Favourite') "
                @click="toggleFavouriteAlbum(item.id)" 
            />
            <Button 
                :style="{ color: 'var(--p-gray-300)' }" 
                size="large" 
                icon="pi pi-trash" 
                variant="text" 
                rounded
                :aria-label="$t('Remove')" 
                @click="removeAlbum(item.id)" 
            />
        </div>
    </div>
    <div 
        v-else
        class="flex flex-wrap justify-center aspect-square relative rounded hover:shadow transition-shadow duration-200 border-1 border-gray-200 bg-white">
        <div 
            class="w-full flex justify-between absolute">
            <Button 
                :style="{ color: item.favourite ? 'var(--color-custom-violet)' : 'var(--p-gray-300)' }" 
                class="mr-2"
                size="large" 
                icon="pi pi-star-fill" 
                variant="text" 
                rounded 
                :aria-label="$t('Favourite')"
                @click="toggleFavouriteAlbum(item.id)" 
            />
            <Button 
                :style="{ color: 'var(--p-gray-300)' }" 
                size="large" 
                icon="pi pi-trash" 
                variant="text" 
                rounded
                :aria-label="$t('Remove')" 
                @click="removeAlbum(item.id)" 
            />
        </div>
        <p class="inline-block mt-auto mb-auto">{{ item.title }}</p>
    </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import { useAlbumStore } from '@/stores/album';
import type { Album, AlbumLayout } from '@/types/Album'
import type { PropType } from 'vue';

const store = useAlbumStore()

const props = defineProps({
    item: {
        type: Object as PropType<Album>,
        required: true
    },
    layout: {
        type: String as PropType<AlbumLayout>,
        required: false,
        default: 'list'
    }
})

function removeAlbum(id: number) {
    store.removeAlbumById(id);
}

function toggleFavouriteAlbum(id: number) {
    store.toggleFavouriteState(id);
}

</script>