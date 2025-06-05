<template>
    <Form 
        v-slot="$form" 
        :initialValues 
        :resolver 
        @submit="onFormSubmit">
        <div class="mb-5">
            <InputText 
                name="title" 
                type="text" 
                :placeholder="$t('Title')" 
                fluid 
                class="mb-2" />
            <Message v-if="$form.title?.invalid" 
                severity="error" 
                size="small" 
                variant="simple">
                {{$form.title.error?.message }}
            </Message>
        </div>
        <Button 
            type="submit" 
            class="w-full md:w-auto" 
            severity="secondary" 
            size="large" 
            :aria-label="$t('Add-album')"
            :label="$t('Add-album')"/>
    </Form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAlbumStore } from '@/stores/album';
import { useI18n } from 'vue-i18n';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';

const { t } = useI18n();
const store = useAlbumStore();

const initialValues = ref({
    title: ''
});

const resolver = ref(zodResolver(
    z.object({
        title: z.string().min(1, { message: t('Title-is-required') })
    })
));

const onFormSubmit = ({ valid, values, reset }: { valid: boolean, values: { title?: string }, reset: () => void }) => {
    if (valid) {
        const album = {
            id: useUniqueId(),
            title: values.title,
            favourite: false,
            date: new Date().toISOString()
        };
        store.addAlbum({album});
        reset();
    }
};
</script>
