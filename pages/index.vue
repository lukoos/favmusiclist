<template>
  <div class="grid items-start content-start py-16 px-5 mr-auto ml-auto max-w-[var(--max-width)] min-h-[100vh] bg-[url(/images/Background.svg)] bg-no-repeat bg-top-right bg-cover md:bg-contain">
    <AppLogo class="row-span-1 col-span-1"/>
    <LanguageSwitcher class="order-1 md:order-0 md:row-span-1 md:col-span-1 md:justify-end" />
    <AlbumList class="row-span-2 col-span-2 max-w-[var(--max-content-width)] w-full mr-auto ml-auto mt-12 mb-7"/>
  </div>
</template>