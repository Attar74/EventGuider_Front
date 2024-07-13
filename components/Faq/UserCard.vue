<script setup lang="ts">
import clockIcon from "../svgs/clockIcon.vue";
import copyIcon from "../svgs/copyIcon.vue";
import archiveIcon from "../svgs/archiveIcon.vue";
import starIcon from "../svgs/starIcon.vue";
import svgDelete from "../svgs/delete.vue";
defineProps<{
  qaTitle?: string;
  date?: string;
  answer?: string;
  imgPath?: string;
}>();
</script>

<template>
  <div
    class="mx-auto px-4 md:px-[4rem] mb-[3rem]"
    :class="{ container: false, 'mx-[11rem]': true }"
  >
    <div
      class="flex gap-x-4 h-full overflow-hidden sm:p-4 rounded-[0.75rem] mx-auto bg-[#FFF]"
    >
      <div class="w-full">
        <div class="flex justify-between w-full mb-8">
          <div class="flex gap-x-[0.5rem]">
            <p class="text-[#2A2F4F] text-4 leading-7 my-auto font-bold">
              {{ qaTitle }}
            </p>
          </div>
          <div class="flex gap-x-[0.75rem] my-auto">
            <copyIcon />
            <archiveIcon />
            <starIcon />
            <svgDelete />
          </div>
        </div>
        <section class="mt-[0.75rem] flex gap-x-[4rem]">
          <div class="flex items-center gap-[0.4rem]">
            <img
              src="/public/assets/img/image.png"
              class="w-[2.5rem] h-[2.5rem] rounded-full"
            />
            <p class="text-[#AAACB9]">{{ answer }}</p>
          </div>
          <div class="flex items-center gap-[0.4rem]">
            <clockIcon />
            <span class="ml-[0.5rem] text-[#AAACB9]"> {{ date }} </span>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
