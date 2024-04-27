<template>
  <div class="container mx-auto px-[1rem] md:px-[4rem] mt-[2.5rem] mb-[6.5rem]">
    <div class="text-center xl:px-[25rem]">
      <p class="text-[#2A2F4F] text-[1.5rem] font-bold leading-10">
        Prepare your storefront and stand out!
      </p>
      <p class="text-[#7F8295] text-[1rem] leading-7">
        Complete these simple steps to publish your storefront. Our team will
        review the information and contact you soon.
      </p>
    </div>
    <div
      class="container mx-auto md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-6"
    >
      <NuxtLink
        :to="`/registeration-steps/step${step.id}`"
        class="col-span-1 flex flex-col"
        v-for="step in steps"
      >
        <registerationCard :data="step" :key="step.id" />
      </NuxtLink>
    </div>
    <div class="text-center xl:px-[25rem]">
      <p class="text-[#2A2F4F] text-[1rem] leading-7 my-[2rem]">
        Our team will review your data carefully and notify you to continue all
        process to publish your account with us
      </p>
      <button disabled class="rounded-[2rem] bg-[#AAACB9] px-[5rem] py-[1rem]">
        <p class="text-[#fff] text[1rem] leading-7 font-bold">Finish</p>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import steps from '@/constants/registeration-steps';

definePageMeta({
  layout: 'default',
});
</script>
