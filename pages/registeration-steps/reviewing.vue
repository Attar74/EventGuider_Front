<template>
  <div class="container mx-auto px-[1rem] md:px-[4rem] mt-[2.5rem] mb-[10rem]">
    <div class="xl:px-[22rem]">
      <div class="text-center mb-[3rem]">
        <div>
          <img
            src="@/public/assets/reg_steps/Successfully.svg"
            ait="Successfully.svg"
            class="mx-auto"
          />
        </div>

        <p class="text-[#FF3D9A] text-[1.5rem] font-bold leading-10 mt-[1rem]">
          Processes completed successfully.
        </p>
        <p class="text-[#7F8295] text-[1rem] leading-7">
          Your data will be carefully reviewed by our team and you will be
          allowed to resume your activity within 4 days.
        </p>
      </div>
      <div class="flex flex-row justify-between">
        <div v-for="i in 4"></div>
        <div v-for="i in 4" :key="i" class="bg-[#fff] rounded-[1rem]">
          <p
            class="text-[#2A2F4F] text-[1.25rem] leading-9 font-semibold p-[1.375rem]"
          >
            3 D
          </p>
        </div>
        <div v-for="i in 4"></div>
      </div>
      <p
        class="text-[#7F8295] text-[1rem] leading-7 text-center mt-[4rem] mb-[2rem]"
      >
        Do you want to change any details before admin action ?
      </p>
      <div class="flex">
        <NuxtLink
          to="/registeration-steps"
          class="flex flex-col sm:flex-row justify-center gap-x-[1.5rem] gap-y-[0.5rem] sm:gap-y-0 mx-auto"
        >
          <button
            class="rounded-[2rem] bg-[#FF3D9A] w-[11.25rem] border-[0.063rem] border-[#FF3D9A] h-[3.5rem] cursor-pointer"
          >
            <p class="text-[#fff] text[1rem] leading-7 font-bold">
              Edit Details
            </p>
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import locationIcon from '@/public/assets/svgs_icons/Location.svg';
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';

const Locations = reactive([
  {
    title: '5th Settlement',
    checked: false,
  },
  {
    title: 'Down Town',
    checked: false,
  },
  {
    title: 'Tanta',
    checked: false,
  },
  {
    title: 'Nasr City',
    checked: false,
  },
]);
</script>
