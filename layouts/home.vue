<template>
  <AppHeader :isDrawer="true" />
  <div class="flex">
    <AppDrawer />
    <div class="overflow-y-auto h-full w-full">
      <HorizntalTabs class="mb-[2.5rem]" />
      <div class="xl:px-[8rem]">
        <slot />
      </div>
    </div>
  </div>
</template>
