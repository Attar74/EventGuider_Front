<template>
  <div class="col-span-1 flex flex-col">
    <div
      class="w-full h-full max-w-sm overflow-hidden shadow-lg p-[1rem] sm:p-[3rem] rounded-2xl bg-[#fff] mx-auto my-[2rem] cursor-pointer"
    >
      <div class="bg-[#ff3d9a08] mx-auto p-[2rem] w-[7.5rem] rounded-xl">
        <!-- <svg
          class="mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
        >
          <path
            d="M43.0769 10.7693H40.7077C40.2078 8.33845 38.8851 6.15431 36.9627 4.58495C35.0402 3.0156 32.6355 2.157 30.1538 2.15387L25.8461 2.15387C23.3644 2.157 20.9597 3.0156 19.0373 4.58495C17.1148 6.15431 15.7922 8.33845 15.2923 10.7693H12.923C10.0679 10.7727 7.3307 11.9084 5.31182 13.9273C3.29294 15.9461 2.15723 18.6834 2.15381 21.5385L2.15381 43.077C2.15723 45.9321 3.29294 48.6693 5.31182 50.6882C7.3307 52.7071 10.0679 53.8428 12.923 53.8462H43.0769C45.932 53.8428 48.6692 52.7071 50.6881 50.6882C52.707 48.6693 53.8427 45.9321 53.8461 43.077V21.5385C53.8427 18.6834 52.707 15.9461 50.6881 13.9273C48.6692 11.9084 45.932 10.7727 43.0769 10.7693ZM25.8461 6.46156H30.1538C31.4854 6.46708 32.7829 6.8839 33.8685 7.65498C34.9542 8.42607 35.7752 9.51376 36.219 10.7693H19.7809C20.2248 9.51376 21.0457 8.42607 22.1314 7.65498C23.2171 6.8839 24.5145 6.46708 25.8461 6.46156ZM12.923 15.0769H43.0769C44.7906 15.0769 46.4341 15.7577 47.6459 16.9695C48.8577 18.1813 49.5384 19.8248 49.5384 21.5385V28H6.4615V21.5385C6.4615 19.8248 7.14227 18.1813 8.35404 16.9695C9.56582 15.7577 11.2093 15.0769 12.923 15.0769ZM43.0769 49.5385H12.923C11.2093 49.5385 9.56582 48.8577 8.35404 47.6459C7.14227 46.4342 6.4615 44.7907 6.4615 43.077V32.3077H25.8461V34.4616C25.8461 35.0328 26.073 35.5806 26.477 35.9846C26.8809 36.3885 27.4287 36.6154 28 36.6154C28.5712 36.6154 29.119 36.3885 29.523 35.9846C29.9269 35.5806 30.1538 35.0328 30.1538 34.4616V32.3077H49.5384V43.077C49.5384 44.7907 48.8577 46.4342 47.6459 47.6459C46.4341 48.8577 44.7906 49.5385 43.0769 49.5385Z"
            fill="#FF3D9A"
          />
        </svg> -->
        <img :src="data.icon" alt="icons" />
      </div>
      <div class="my-[1rem]">
        <p class="text-[#FF3D9A] text-[1rem] font-bold text-center leading-7">
          {{ data.title }}
        </p>
      </div>
      <div class="my-[1rem]">
        <p
          class="text-[#2A2F4F] text-[1.25rem] font-bold text-center leading-9 mx-1"
        >
          {{ data.description }}
        </p>
      </div>
      <div class="my-[1rem]">
        <p class="text-[#7F8295] text[1-rem] leading-7 text-center">
          Estimated completion time : {{ data.estimitadeTime }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Data {
  id: number;
  title: string;
  description: string;
  estimitadeTime: string;
  icon: string;
}

interface Props {
  data: Data;
}

const props = defineProps<Props>();
</script>
