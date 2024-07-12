<template>
  <section class="h-screen flex bg-[#FDFDFD]">
    <div class="container flex justify-center h-[90vh] m-auto">
      <div class="px-[1rem] xl:px-0 my-auto w-full md:w-auto md:flex">
        <!-- Left column container with background-->
        <div class="h-auto md:mb-0 md:w-1/3 xl:w-1/2 relative hidden md:block">
          <div
            class="absolute top-[2.875rem] left-[2.5rem] hover:left-[2rem] flex cursor-pointer transition-all easse-in-out hover:underline text-[#fff]"
          >
            <img
              class="h-[1.5rem] w-[1.5rem] my-auto mr-[0.313rem]"
              :src="rightArrow"
              alt="rightArrow"
            />
            <NuxtLink @click="back">
              <p class="text-[#fff] text-[1.25rem] leading-9 font-semiBold">
                Back
              </p>
            </NuxtLink>
          </div>
          <img
            :src="LoginImg"
            class="w-full h-full rounded-[2.5rem] rounded-r-none object-cover"
            alt="Login image"
          />
        </div>

        <div
          class="w-full md:w-2/3 xl:w-1/2 shadow-2xl flex justify-center rounded-[2.5rem] px-[0.25rem] md:px-[2rem] md:rounded-l-none overflow-hidden py-[1.5rem]"
        >
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import LoginImg from '@/public/assets/auth/loginImg.png';
import rightArrow from '@/public/assets/auth/arrow.svg';

// Define Routing - Router
const router = useRouter();
const route = useRoute();

// back routing
const back = () => {
  router.push({
    name: `auth-${route.name !== 'auth-login' ? 'login' : 'register'}`,
  });
};
</script>
