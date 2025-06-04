<template>
    <div class="flex">
        <NuxtLink 
            :to="$switchLocalePath('pl')" 
            class="mr-4 md:mr-2" 
            :class="{'outline outline-offset-2 outline-solid rounded-full outline-violet-700 cursor-none pointer-events-none': locale === 'pl'}">
            <NuxtImg 
                src="/images/PL.png" 
                :alt="$t('Polish')" 
                width="20" 
                height="20" 
                format="webp" 
            />
        </NuxtLink>
        <NuxtLink 
            :to="$switchLocalePath('en')" 
            :class="{'outline outline-offset-2 outline-solid rounded-full outline-violet-700 cursor-none pointer-events-none': locale === 'en'}">
            <NuxtImg 
                src="/images/EN.png" 
                :alt="$t('English')" 
                :width="20" 
                height="20" 
                format="webp" />
        </NuxtLink>    
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
</script>
