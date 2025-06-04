<template>
    <div class="album-list relative">
        <header class="border-b-1 border-black pb-10 mb-10">
            <component :is="isDesktop ? albumAddDesktop : albumAddMobile" />
        </header>
        <div class="w-full flex flex-row justify-between items-center mb-10">
            <div class="flex flex-row items-center">
                <span class="text-nowrap mr-3">{{ $t('Sorted-by') }}:</span>
                <Dropdown 
                    v-model="sortBySelected" 
                    :options="sortBy" 
                    :placeholder="$t('Sort-by')" 
                    option-label="name"
                    class="w-full md:w-14rem"  
                    @update:modelValue="onUpdateMode($event)"
                />
            </div>
            <div>
                <Button 
                    class="mr-1 md:mr-2" 
                    icon="pi pi-bars" 
                    variant="text" 
                    rounded 
                    :aria-label="$t('List')" 
                    @click="switchLayout(AlbumLayout.LIST)"
                />
                <Button 
                    icon="pi pi-objects-column" 
                    variant="text" 
                    rounded 
                    :aria-label="$t('Grid')" 
                    @click="switchLayout(AlbumLayout.GRID)"/>
            </div>
        </div>

        <div :class="[layout === AlbumLayout.GRID ? 'grid-cols-2 md:grid-cols-5 gap-5 ' : 'grid-cols-1', 'grid']">
            <AlbumItem 
                v-for="album in albums" 
                :key="album.id" 
                :item="album" 
                :layout="layout"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Album, SortBy } from '@/types/Album';
import { AlbumLayout } from '@/types/Album';
import { ref } from 'vue';
import { useAlbumStore } from '@/stores/album';
import { useI18n } from 'vue-i18n';

const layout:Ref<AlbumLayout> = ref(AlbumLayout.LIST);

const { t } = useI18n();
const store = useAlbumStore()
const { isDesktop } = useDevice()

const albumAddDesktop = resolveComponent('AlbumAddDesktop');
const albumAddMobile = resolveComponent('AlbumAddMobile');

const albums = computed(() => {
    switch (sortBySelected.value.key) {
        case 'id':
            return [...store.getAlbums].sort((a: Album, b: Album) => a.id - b.id);
        case 'title':
            return [...store.getAlbums].sort((a, b) => (a.title ?? '').localeCompare(b.title ?? ''));
        case 'date':
             return [...store.getAlbums].sort((a, b) => {
                const dateA = new Date(a.date ?? 0).getTime();
                const dateB = new Date(b.date ?? 0).getTime();
             return dateA - dateB;
    });
        default:
            return store.getAlbums
    }
})

const sortBy: Ref<SortBy[]> = ref([
    { key: 'id', name: 'Id' },
    { key: 'title', name: t('Title') },
    { key: 'date', name: t('Date') },
]);

const sortBySelected = ref({ key: 'id', name: 'Id' });

function onUpdateMode(selected:SortBy) {
    sortBySelected.value = selected;
}

function switchLayout(newLayout: AlbumLayout) {
    layout.value = newLayout;
    console.log(layout.value)
}
</script>