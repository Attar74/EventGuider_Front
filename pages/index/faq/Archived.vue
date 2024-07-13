<script setup lang="ts">
definePageMeta({
  layout: "home",
});

const questions = [
  {
    qaTitle: "What Kind of venues you provided ?",
    date: "2 days",
    answer: "Mohamed Alaa",
  },
  {
    qaTitle: "What Kind of venues you provided ?",
    date: "2 days",
    answer: "Ahmed Alaa",
  },
  {
    qaTitle: "What Kind of venues you provided ?",
    date: "2 days",
    answer: "Ahmed Alaa",
  },
  {
    qaTitle: "What Kind of venues you provided ?",
    date: "2 days",
    answer: "Mohamed Alaa",
  },
];
</script>
<template>
  <div class="overflow-y-scroll h-[99vh]">
    <section class="mt-10">
      <FaqUserCard
        v-for="item in questions"
        :key="item.qaTitle"
        :qaTitle="item.qaTitle"
        :date="item.date"
        :answer="item.answer"
        showDelete
        showCopy
      />
    </section>
  </div>
</template>
