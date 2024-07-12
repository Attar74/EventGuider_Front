<template>
  <div class="my-[1.5rem] md:my-auto">
    <svg
      class="mx-auto"
      xmlns="http://www.w3.org/2000/svg"
      width="104"
      height="104"
      viewBox="0 0 104 104"
      fill="none"
    >
      <path
        d="M93.5455 36.4803L66.0418 10.109C62.3145 6.41914 57.2857 4.34451 52.042 4.33336C46.7984 4.3222 41.7608 6.37542 38.0178 10.0494L10.4506 36.4803C8.52254 38.3382 6.98746 40.5648 5.9366 43.0279C4.88573 45.491 4.34052 48.1404 4.33337 50.8185L4.33337 79.7967C4.33968 85.0646 6.43421 90.115 10.1575 93.8399C13.8808 97.5649 18.9289 99.6603 24.1945 99.6666H79.8056C85.0712 99.6603 90.1192 97.5649 93.8426 93.8399C97.5659 90.115 99.6604 85.0646 99.6667 79.7967V50.8185C99.6597 48.14 99.1142 45.4903 98.0626 43.027C97.011 40.5638 95.4748 38.3374 93.5455 36.4803ZM43.575 15.7282C45.8274 13.4948 48.8737 12.2471 52.045 12.259C55.2162 12.2709 58.2531 13.5415 60.4887 15.7918L87.2893 41.4796L60.4251 60.4117C58.1543 62.5773 55.1373 63.7854 52 63.7854C48.8627 63.7854 45.8458 62.5773 43.575 60.4117L16.7068 41.4796L43.575 15.7282ZM91.7223 79.7967C91.7223 82.9586 90.4668 85.991 88.2319 88.2268C85.9971 90.4626 82.9661 91.7187 79.8056 91.7187H24.1945C21.034 91.7187 18.0029 90.4626 15.7681 88.2268C13.5333 85.991 12.2778 82.9586 12.2778 79.7967V50.8185C12.2818 50.047 12.3603 49.2778 12.5122 48.5215L37.9582 66.0309C41.695 69.7327 46.7412 71.8093 52 71.8093C57.2588 71.8093 62.3051 69.7327 66.0418 66.0309L91.4879 48.5215C91.6398 49.2778 91.7183 50.047 91.7223 50.8185V79.7967Z"
        fill="#FF3D9A"
      />
    </svg>
    <div class="my-[2rem]">
      <h1
        class="text-[#2A2F4F] text-[1rem] md:text-[1.25rem] font-bold leading-8 text-center"
      >
        Check Your Messages
      </h1>
      <p
        class="text-[#7F8295] max-w-[18rem] md:max-w-[30rem] mt-[0.5rem] text-[0.75rem] md:text-[1rem] font-normal leading-6 text-center"
      >
        We have sent a Verification Code to info@unify.com please, write the
        code below
      </p>
    </div>
    <form @submit="onSubmit">
      <div>
        <p
          class="text-[#2A2F4F] text-[0.875rem] mb-[0.25rem] ml-[1rem] font-medium"
        >
          Verification Code*
        </p>
        <div class="relative">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clip-path="url(#clip0_1657_19010)">
                <path
                  d="M18.1044 8.31818L18.2801 9.19325C18.3182 9.38289 18.3379 9.57575 18.3389 9.76917L18.3389 9.77279L18.3389 15.3455C18.3389 16.1391 18.0238 16.9003 17.4627 17.4616C16.9017 18.0228 16.1407 18.3382 15.3472 18.3382H4.65276C3.85922 18.3382 3.09824 18.0228 2.53722 17.4616C1.97621 16.9003 1.66109 16.1391 1.66109 15.3455V9.77279V9.76916H1.6611C1.6621 9.57575 1.68178 9.38289 1.71986 9.19326L1.89569 8.31766C1.85588 8.39322 1.8191 8.47049 1.78548 8.54931C1.62031 8.93644 1.53456 9.35284 1.53331 9.77377V15.3451C1.5344 16.1727 1.86353 16.9661 2.44843 17.5513C3.0332 18.1363 3.82591 18.4655 4.65276 18.4667M18.1044 8.31818L4.6536 18.4667M18.1044 8.31818C18.1441 8.39356 18.1808 8.47066 18.2144 8.54929L18.8582 8.27445L18.1044 8.31818ZM4.65276 18.4667C4.65304 18.4667 4.65332 18.4667 4.6536 18.4667M4.65276 18.4667L4.6536 18.4667M4.65276 18.4667L15.3464 18.4667M4.6536 18.4667H15.3464M15.3464 18.4667L15.3472 18.4667L15.3464 18.4667ZM12.2079 2.44152L12.2078 2.44159L12.2159 2.44932L17.504 7.51979C17.5042 7.51989 17.5043 7.51999 17.5044 7.52009C17.7085 7.71663 17.8846 7.93949 18.0284 8.18231L17.197 8.7544L12.3035 12.1216L12.2521 12.157L12.2077 12.201C11.6201 12.783 10.8267 13.1095 9.99998 13.1095C9.17323 13.1095 8.37984 12.783 7.79228 12.201L7.7479 12.157L7.69644 12.1216L2.80296 8.7544L1.97139 8.1822C2.11498 7.93949 2.29091 7.7167 2.49478 7.52014C2.49499 7.51994 2.4952 7.51974 2.49541 7.51953L7.79554 2.43787L7.79558 2.4379L7.80144 2.43215C8.39003 1.85441 9.18212 1.5316 10.0066 1.53335C10.831 1.5351 11.6217 1.86129 12.2079 2.44152ZM17.1896 8.54905L17.8842 8.05952L17.2707 7.47151L12.1225 2.53707C11.5625 1.97677 10.8036 1.66049 10.0113 1.65751C9.21793 1.65453 8.45582 1.96584 7.8914 2.52315L2.72847 7.4715L2.11491 8.05955L2.80963 8.54908L7.93696 12.1619C8.49897 12.6788 9.23512 12.9664 9.99998 12.9664C10.7648 12.9664 11.501 12.6788 12.063 12.1619L17.1896 8.54905Z"
                  stroke="#AAACB9"
                  stroke-width="1.4"
                />
              </g>
              <defs>
                <clipPath id="clip0_1657_19010">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <input
            type="text"
            name="code"
            v-model="code"
            v-bind="codeAttrs"
            class="w-full border-[#D4D5DC] border-[0.063rem] outline-0 text-[0.875rem] md:text-[1rem] text-[#000] rounded-full block h-[3rem] md:h-[3.5rem] pl-10 p-2.5 dark:placeholder-[#AAACB9]"
            placeholder="Enter code"
          />
        </div>
        <div
          v-if="errors.code"
          class="text-[#cc0000] mx-[1rem] text-[0.875rem] md:text-[1rem] my-[0.75rem]"
        >
          {{ errors.code }}
        </div>
      </div>
      <button
        v-if="!getCode"
        type="submit"
        class="w-full font-bold mt-[0.5rem] md:mt-[2rem] mx-auto text-white bg-[#FF3D9A] hover:bg-[#e8388c] focus:outline-none leading-7 rounded-full text-[0.875rem] md:text-[1rem] py-[0.6rem] md:py-[0.875rem] text-center dark:bg-[#FF3D9A] dark:focus:ring-red-900"
      >
        <p class="mx-3">Confirm</p>
      </button>
      <div
        v-else
        @click="fetchCode"
        class="cursor-pointer w-full font-bold mt-[0.5rem] md:mt-[2rem] mx-auto text-white bg-[#FF3D9A] hover:bg-[#e8388c] focus:outline-none leading-7 rounded-full text-[0.875rem] md:text-[1rem] py-[0.6rem] md:py-[0.875rem] text-center dark:bg-[#FF3D9A] dark:focus:ring-red-900"
      >
        <p v-if="!btnLoading">get Code</p>
        <svg
          v-else
          aria-hidden="true"
          class="mx-auto w-8 h-8 animate-spin text-[#e8388c] fill-white"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
      <div class="flex justify-center gap-x-[1rem] mt-[1rem]">
        <p class="text-[0.875rem] leading-6 text-[#AAACB9]">
          Don't receive the code ?
        </p>
        <p
          class="text-[0.875rem] leading-6 text-[#FF3D9A] cursor-pointer hover:underline"
        >
          Request New Code
        </p>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import * as yup from 'yup';

definePageMeta({
  layout: 'auth',
});

const getCode = ref(true);
const btnLoading = ref(false);

const { errors, handleSubmit, defineField } = useForm<codeFrom>({
  validationSchema: yup.object({
    code: yup.number().required().min(4).max(4),
  }),
});

const fetchCode = () => {
  btnLoading.value = true;
  setTimeout(() => {
    btnLoading.value = false;
    getCode.value = false;
  }, 1000);
};

const onSubmit = handleSubmit(
  (values) => {
    const { code } = values;
    const userPayload = {
      code,
    };
  },
  ({ errors }) => {
    const firstError = Object.keys(errors)[0];
    const el: HTMLElement | null = document.querySelector(
      `[name="${firstError}"]`
    );
    el?.scrollIntoView({
      behavior: 'smooth',
    });
    el?.focus();
  }
);

const [code, codeAttrs] = defineField('code');
</script>
