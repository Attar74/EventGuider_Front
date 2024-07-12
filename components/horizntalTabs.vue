<template>
  <header class="mx-[2.125rem] mb-[2.5rem]">
    <nav
      class="bg-white border-0 lg:px-6 border-b-[#D4D5DC] rounded-b-xl p-[1.5rem]"
    >
      <div
        class="flex flex-wrap items-center justify-start mx-auto p-4 md:p-[0.75rem] w-full"
      >
        <div class="flex mx-[1rem]" v-for="tab in filteredTabs">
          <NuxtLink
            :to="tab.path"
            class="flex gap-x-[0.5rem]"
            exact-active-class="bg-[#2A2F4F] rounded-[1.5rem] px-[0.75rem] py-[0.5rem]"
          >
            <Component
              :is="dynamicComponent(tab.icon)"
              :color="route.fullPath === tab.path ? '#fff' : '#555972'"
              class="my-auto"
            />
            <p
              class="text-[#555972] text-[1rem] leading-6 font-bold mt-1"
              :class="{ 'text-[#fff]': route.fullPath === tab.path }"
            >
              {{ tab.title }}
            </p>
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const tabs = [
  {
    title: 'Business info',
    icon: 'businessInfo',
    path: '/storefront/businessInfo',
    parent: 'storefront',
  },
  {
    title: 'Location',
    icon: 'location',
    path: '/storefront/location',
    parent: 'storefront',
  },
  {
    title: 'Photos',
    icon: 'photos',
    path: '/storefront/photos',
    parent: 'storefront',
  },
  {
    title: 'Questions',
    icon: 'question',
    path: '/storefront/questions',
    parent: 'storefront',
  },
  {
    title: 'Deals',
    icon: 'deals',
    path: '/storefront/deals',
    parent: 'storefront',
  },
  {
    title: 'Suppliers',
    icon: 'suppliers',
    path: '/storefront/suppliers',
    parent: 'storefront',
  },
  {
    title: 'Social Networks',
    icon: 'socialNetworks',
    path: '/storefront/socialNetworks',
    parent: 'storefront',
  },

  {
    title: 'Published Faq’s',
    icon: 'publishedFaqs',
    path: '/faq/published',
    parent: 'faq',
  },
  {
    title: 'Users Faq’s',
    icon: 'usersFaqs',
    path: '/usersFaqs',
    parent: 'faq',
  },
  {
    title: 'Archived Faq’s',
    icon: 'archivedFaqs',
    path: '/archivedFaqs',
    parent: 'faq',
  },
];

let route = useRoute();
let filteredTabs = computed(() => {
  return tabs.filter((tab) => {
    return !!route.path.includes(tab.parent);
  });
});

const dynamicComponent = (icon: string) => {
  return defineAsyncComponent(() => import(`./svgs/${icon}.vue`));
};
</script>
