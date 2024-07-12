<template>
  <div
    class="mx-auto px-[1rem] md:px-[4rem] mt-[2.5rem] mb-[10rem]"
    :class="{ 'max-w-[55rem]': header }"
  >
    <div>
      <div class="text-center" v-if="header">
        <div class="bg-[#ff3d9a08] mx-auto p-[1.5rem] w-[5rem] rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <g clip-path="url(#clip0_1551_25080)">
              <path
                d="M12 7.33333C12 6.22667 12.8934 5.33333 14 5.33333C15.1067 5.33333 16 6.22667 16 7.33333C16 8.44 15.1067 9.33333 14 9.33333C12.8934 9.33333 12 8.44 12 7.33333ZM32 6.66667V14.6667C32 18.3467 29.0134 21.3333 25.3334 21.3333H13.3334C9.65338 21.3333 6.66672 18.3467 6.66672 14.6667V6.66667C6.66672 2.98667 9.65338 0 13.3334 0H25.3334C29.0134 0 32 2.98667 32 6.66667ZM9.33338 14.6667C9.33338 15.6933 9.72005 16.6267 10.3601 17.3467L17.3467 10.36C18.6534 9.05333 20.9334 9.05333 22.24 10.36L23.6267 11.7467C23.9334 12.0533 24.4534 12.0533 24.76 11.7467L29.3334 7.17333V6.66667C29.3334 4.46667 27.5334 2.66667 25.3334 2.66667H13.3334C11.1334 2.66667 9.33338 4.46667 9.33338 6.66667V14.6667ZM29.3334 14.6667V10.9467L26.64 13.64C25.3334 14.9467 23.0534 14.9467 21.7467 13.64L20.3601 12.2533C20.0534 11.9467 19.5467 11.9467 19.2267 12.2533L12.84 18.64C13.0001 18.6667 13.1601 18.6667 13.3334 18.6667H25.3334C27.5334 18.6667 29.3334 16.8667 29.3334 14.6667ZM24.12 24.0533C23.4134 23.8533 22.68 24.28 22.48 24.9867L22.0934 26.4C21.8134 27.4267 21.1467 28.2933 20.2134 28.8133C19.2801 29.3467 18.2001 29.48 17.1734 29.2L5.60005 26.0267C3.46672 25.44 2.21338 23.24 2.80005 21.1067L4.08005 16.36C4.26672 15.6533 3.85338 14.92 3.14672 14.72C2.44005 14.5333 1.70672 14.9467 1.50672 15.6533L0.24005 20.3867C-0.733284 23.9333 1.36005 27.6133 4.90672 28.5867L16.48 31.76C17.0667 31.92 17.6667 32 18.2534 32C19.4 32 20.52 31.7067 21.5467 31.12C23.0934 30.24 24.2 28.8133 24.68 27.0933L25.0667 25.68C25.2667 24.9733 24.84 24.24 24.1334 24.04L24.12 24.0533Z"
                fill="#FF3D9A"
              />
            </g>
            <defs>
              <clipPath id="clip0_1551_25080">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <p class="text-[#2A2F4F] text-[1.5rem] font-bold leading-10 mt-[1rem]">
          upload at least 6 high quality photos
        </p>
        <p class="text-[#7F8295] text-[1rem] leading-7">
          The best way to showcase your products or services to couples is to
          include at least 8 photos to summarise your best work.
        </p>
      </div>
      <div class="my-[2.5rem]">
        <p
          class="text-[1.25rem] text-[#2A2F4F] font-semibold leading-9 mb-[0.5rem]"
        >
          Add photos & Videos
          <span class="text-[#FF3D9A]">*</span>
          <span class="text-[#7F8295] text-[1rem]"
            >(at least 6 high quality photos)</span
          >
        </p>
        <div
          class="w-full h-full shadow-lg p-[1rem] sm:p-[1.5rem] rounded-2xl bg-[#fff] mx-auto"
        >
          <label for="file_input">
            <input
              class="hidden"
              id="file_input"
              type="file"
              @change="uploadPhotos"
              accept="image/*"
              multiple
            />
            <div
              class="flex cursor-pointer border-[0.063rem] border-[#FF3D9A] border-dashed rounded-[0.875rem] bg-[#ff3d9a08] py-[2.5rem]"
            >
              <div class="mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 32 32"
                  fill="none"
                  class="mx-auto"
                >
                  <g clip-path="url(#clip0_1551_25080)">
                    <path
                      d="M12 7.33333C12 6.22667 12.8934 5.33333 14 5.33333C15.1067 5.33333 16 6.22667 16 7.33333C16 8.44 15.1067 9.33333 14 9.33333C12.8934 9.33333 12 8.44 12 7.33333ZM32 6.66667V14.6667C32 18.3467 29.0134 21.3333 25.3334 21.3333H13.3334C9.65338 21.3333 6.66672 18.3467 6.66672 14.6667V6.66667C6.66672 2.98667 9.65338 0 13.3334 0H25.3334C29.0134 0 32 2.98667 32 6.66667ZM9.33338 14.6667C9.33338 15.6933 9.72005 16.6267 10.3601 17.3467L17.3467 10.36C18.6534 9.05333 20.9334 9.05333 22.24 10.36L23.6267 11.7467C23.9334 12.0533 24.4534 12.0533 24.76 11.7467L29.3334 7.17333V6.66667C29.3334 4.46667 27.5334 2.66667 25.3334 2.66667H13.3334C11.1334 2.66667 9.33338 4.46667 9.33338 6.66667V14.6667ZM29.3334 14.6667V10.9467L26.64 13.64C25.3334 14.9467 23.0534 14.9467 21.7467 13.64L20.3601 12.2533C20.0534 11.9467 19.5467 11.9467 19.2267 12.2533L12.84 18.64C13.0001 18.6667 13.1601 18.6667 13.3334 18.6667H25.3334C27.5334 18.6667 29.3334 16.8667 29.3334 14.6667ZM24.12 24.0533C23.4134 23.8533 22.68 24.28 22.48 24.9867L22.0934 26.4C21.8134 27.4267 21.1467 28.2933 20.2134 28.8133C19.2801 29.3467 18.2001 29.48 17.1734 29.2L5.60005 26.0267C3.46672 25.44 2.21338 23.24 2.80005 21.1067L4.08005 16.36C4.26672 15.6533 3.85338 14.92 3.14672 14.72C2.44005 14.5333 1.70672 14.9467 1.50672 15.6533L0.24005 20.3867C-0.733284 23.9333 1.36005 27.6133 4.90672 28.5867L16.48 31.76C17.0667 31.92 17.6667 32 18.2534 32C19.4 32 20.52 31.7067 21.5467 31.12C23.0934 30.24 24.2 28.8133 24.68 27.0933L25.0667 25.68C25.2667 24.9733 24.84 24.24 24.1334 24.04L24.12 24.0533Z"
                      fill="#FF3D9A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1551_25080">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p
                  class="text-[#FF3D9A] text-center underline mt-[1.5rem] text-[1rem]"
                >
                  Click here to upload
                </p>
                <p class="text-[#7F8295] text-center text-[0.875rem]">
                  Max file: 8MB
                </p>
              </div>
            </div>
          </label>
          <div class="mt-[2rem] flex flex-row flex-wrap gap-y-[1.5rem]">
            <template v-if="images.length">
              <div
                v-for="image in images"
                :key="image"
                class="w-[10rem] h-[10rem] border-[0.063rem] border-[#D4D5DC] bg-[#fff] rounded-[0.875rem] cursor-pointer bg-[contain] mx-auto"
                :style="{ 'background-image': `url(${image})` }"
              >
                <div
                  class="bg-gradient-to-t from-slate-300 to-[#2a2f4f14] h-full rounded-[0.875rem]"
                >
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      class="m-[0.5rem]"
                    >
                      <circle cx="15.9999" cy="16" r="14.6667" fill="white" />
                      <path
                        d="M15.9999 1.33331C7.91247 1.33331 1.33325 7.91254 1.33325 16C1.33325 24.0874 7.91247 30.6666 15.9999 30.6666C24.0874 30.6666 30.6666 24.0874 30.6666 16C30.6666 7.91254 24.0874 1.33331 15.9999 1.33331ZM20.5307 18.8025C21.0086 19.2804 21.0086 20.0529 20.5307 20.5308C20.2924 20.7691 19.9795 20.8889 19.6666 20.8889C19.3537 20.8889 19.0408 20.7691 18.8025 20.5308L15.9999 17.7282L13.1974 20.5308C12.959 20.7691 12.6461 20.8889 12.3333 20.8889C12.0204 20.8889 11.7075 20.7691 11.4691 20.5308C10.9913 20.0529 10.9913 19.2804 11.4691 18.8025L14.2717 16L11.4691 13.1974C10.9913 12.7195 10.9913 11.9471 11.4691 11.4692C11.947 10.9913 12.7195 10.9913 13.1974 11.4692L15.9999 14.2718L18.8025 11.4692C19.2804 10.9913 20.0528 10.9913 20.5307 11.4692C21.0086 11.9471 21.0086 12.7195 20.5307 13.1974L17.7281 16L20.5307 18.8025Z"
                        fill="#FF3D9A"
                      />
                    </svg>
                  </button>
                  <div
                    class="m-[0.5rem] flex gap-x-[0.5rem] content-end h-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      class="my-auto"
                    >
                      <g clip-path="url(#clip0_2068_3648)">
                        <path
                          d="M8.00008 0.666626C3.95636 0.666626 0.666748 3.95624 0.666748 7.99996C0.666748 12.0437 3.95636 15.3333 8.00008 15.3333C12.0438 15.3333 15.3334 12.0437 15.3334 7.99996C15.3334 3.95624 12.0438 0.666626 8.00008 0.666626ZM11.789 7.09063L9.08419 9.7459C8.60569 10.2152 7.98969 10.4493 7.37308 10.4493C6.76319 10.4493 6.1533 10.2195 5.67664 9.75935L4.51614 8.6184C4.27536 8.3819 4.2723 7.99507 4.5088 7.75429C4.74469 7.5129 5.13275 7.50985 5.37291 7.74696L6.52975 8.88424C7.00397 9.34257 7.75258 9.34013 8.22925 8.87324L10.9334 6.21857C11.1736 5.98146 11.5592 5.98574 11.7975 6.22651C12.034 6.46729 12.0304 6.85413 11.789 7.09063Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2068_3648">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <p
                      class="text-[1rem] text-[#fff] leading-7 font-bold my-auto"
                    >
                      Profile image
                    </p>
                  </div>
                </div>
              </div>
            </template>
            <div
              v-for="i in 8 - images.length"
              class="w-[10rem] h-[10rem] border-[0.063rem] border-[#D4D5DC] bg-[#fff] rounded-[0.875rem] cursor-pointer mx-auto"
            ></div>
          </div>
        </div>
      </div>
      <div class="flex mt-[2rem] md:mt-[4rem]" v-if="actions">
        <div
          class="flex flex-col sm:flex-row justify-center gap-x-[1.5rem] gap-y-[0.5rem] sm:gap-y-0 mx-auto"
        >
          <NuxtLink to="/registeration-steps/step2">
            <button
              class="rounded-[2rem] bg-[#fff] border-[0.063rem] border-[#FF3D9A] w-[11.25rem] h-[3.5rem] cursor-pointer"
            >
              <p class="text-[#FF3D9A] text[1rem] leading-7 font-bold">Back</p>
            </button>
          </NuxtLink>
          <NuxtLink to="/registeration-steps/reviewing">
            <button
              class="rounded-[2rem] bg-[#FF3D9A] w-[11.25rem] border-[0.063rem] border-[#FF3D9A] h-[3.5rem] cursor-pointer"
            >
              <p class="text-[#fff] text[1rem] leading-7 font-bold">Save</p>
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'registeration-steps',
});

defineProps({
  header: { type: Boolean, default: true },
  actions: { type: Boolean, default: true },
});

// Pinia Store
const userStore = useUserStore();

let currentUser: any = ref({});
const { step3: getPhotos, updateStep3: updatePhotos } = useSteps();
const images: any = ref([]);

const setCurrentUserData = async () => {
  try {
    const { data } = await getPhotos(userStore.userData.id);
    if (data) {
      images.value = [...data];
    }
    currentUser.value = {
      ...userStore.userData,
      ...data,
      phoneNumber: data?.phoneNumber?.number ?? '',
    };
  } catch (err) {
    console.log(err);
  }
};

const uploadPhotos = async (e: any) => {
  const image = e.target.files[0];
  const reader = new FileReader();
  // reader.readAsDataURL(image);
  try {
    // reader.onload = async (e) => {
    console.log('🚀 ~ uploadPhotos ~ image:', image);

    await updatePhotos(image);
    // };
  } catch {
  } finally {
    setCurrentUserData();
  }
};

setCurrentUserData();
</script>
