<template>
  <div
    class="mx-auto px-[1rem] md:px-[4rem] mt-[2.5rem] mb-[10rem]"
    :class="{ 'max-w-[55rem]': true }"
  >
    <div v-if="!isPageLoading">
      <div class="text-center" v-if="header">
        <div class="bg-[#ff3d9a08] mx-auto p-[1.5rem] w-[5rem] rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M13.0091 18.9301C13.8341 19.7368 14.917 20.1401 15.9998 20.1401C17.0827 20.1401 18.1656 19.7368 18.9906 18.9301L22.0485 15.9383C23.6643 14.3226 24.5553 12.174 24.5553 9.88851C24.5553 7.60305 23.6643 5.4557 22.0485 3.83876C20.434 2.22305 18.2854 1.33331 15.9998 1.33331C13.7143 1.33331 11.5669 2.22305 9.94994 3.83876C6.61455 7.17407 6.61455 12.6017 9.95972 15.9468L13.0091 18.9289V18.9301ZM11.6794 5.56814C12.8331 4.41441 14.3682 3.77888 16.0011 3.77888C17.6339 3.77888 19.1678 4.41441 20.3215 5.56814C21.4753 6.72187 22.1121 8.25691 22.1121 9.88973C22.1121 11.5226 21.4753 13.0564 20.3313 14.2016L17.2831 17.1837C16.5767 17.873 15.4254 17.873 14.719 17.1837L11.6794 14.2113C10.5256 13.0576 9.89005 11.5226 9.89005 9.88973C9.89005 8.25691 10.5256 6.72309 11.6794 5.56814ZM12.3332 9.87751C12.3332 7.85237 13.9746 6.211 15.9998 6.211C18.025 6.211 19.6664 7.85237 19.6664 9.87751C19.6664 11.9026 18.025 13.544 15.9998 13.544C13.9746 13.544 12.3332 11.9026 12.3332 9.87751ZM30.599 24.975L29.3768 17.642C29.2057 16.6141 28.723 15.6853 27.9786 14.9556C27.4946 14.4839 26.7222 14.4888 26.2504 14.974C25.7775 15.4555 25.7848 16.2291 26.2676 16.7021C26.6391 17.0651 26.8799 17.5295 26.9654 18.0428L27.4396 20.8893H4.55881L5.03302 18.0428C5.12469 17.4965 5.4009 16.9918 5.81401 16.6239C6.31755 16.1741 6.36033 15.4017 5.91056 14.8982C5.46079 14.3947 4.68836 14.3519 4.18481 14.8016C3.35983 15.5398 2.80495 16.5481 2.62284 17.642L1.40064 24.9738C1.16353 26.3939 1.56075 27.8385 2.49206 28.9373C3.42216 30.036 4.78247 30.6666 6.22222 30.6666H25.7775C27.2172 30.6666 28.5763 30.036 29.5076 28.9385C30.4389 27.8398 30.8349 26.3952 30.599 24.975ZM19.6029 23.3336L20.2837 28.2223H11.7148L12.3943 23.3336H19.6029ZM4.35592 27.3582C3.89148 26.8083 3.69227 26.0859 3.81082 25.3759L4.15181 23.3336H9.92794L9.24839 28.2223H6.22222C5.50235 28.2223 4.82036 27.907 4.35592 27.3582ZM27.6413 27.3582C27.1756 27.907 26.4961 28.2223 25.7775 28.2223H22.7513L22.0705 23.3336H27.8479L28.1889 25.3759C28.3074 26.0859 28.107 26.8083 27.6413 27.3582Z"
              fill="#FF3D9A"
            />
          </svg>
        </div>

        <p class="text-[#2A2F4F] text-[1.5rem] font-bold leading-10 mt-[1rem]">
          Update your business location by adding your address.
        </p>
        <p class="text-[#7F8295] text-[1rem] leading-7">
          Address must contain the street name and any additional information
          (building number, floor, suite, etc.).
        </p>
      </div>
      <form @submit="onUpdateUserData" class="min-w-[44rem]">
        <div class="my-[2.5rem]">
          <p
            class="text-[1.25rem] text-[#2A2F4F] font-semibold leading-9 mb-[0.5rem]"
          >
            Location details <span class="text-[#FF3D9A]">*</span>
          </p>
          <p class="text-[#7F8295] text-[0.875rem] leading-7">
            Address must contain the street name and any additional information
            (building number, floor, suite, etc.).
          </p>
          <div
            class="w-full h-full shadow-lg p-[1rem] sm:p-[1.5rem] rounded-2xl bg-[#fff] mx-auto"
          >
            <!-- rounded-[2rem] border-[0.875rem] border-[#D4D5DC] -->
            <div class="mb-[1.5rem]">
              <GMapMap
                ref="myMapRef"
                :center="{ lat: 30.033333, lng: 31.233334 }"
                style="width: 100%; height: 260px"
              />
            </div>
            <div class="my-[1rem]">
              <p class="text-[#2A2F4F] text-[0.875rem] leading-6 mb-[0.25rem]">
                City <span class="text-[#FF3D9A]">*</span>
              </p>
              <!-- <select
                name="Category"
                v-model="cityId"
                v-bind="cityIdAttrs"
                id="select"
                class="w-full border-[#D4D5DC] border-[0.063rem] outline-0 text-[0.875rem] md:text-[1rem] text-[#000] rounded-full block h-[3rem] md:h-[3.5rem] pl-5 p-2.5 dark:placeholder-[#AAACB9]"
              >
                <option disabled>Choose a City</option>
                <option
                  :value="city.id"
                  v-for="city in Locations"
                  :key="city.title"
                >
                  {{ city.title }}
                </option>
              </select> -->
              <PopoverGroup class="my-[1rem] md:my-auto">
                <Popover class="relative" v-slot="{ open }">
                  <PopoverButton
                    class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white focus:outline-none w-full"
                  >
                    <div class="relative w-full">
                      <div>
                        <div class="relative">
                          <input
                            type="text"
                            name="Category"
                            class="w-full border-[#D4D5DC] border-[0.063rem] outline-0 text-[0.875rem] md:text-[1rem] text-[#000] rounded-full block h-[3rem] md:h-[3.5rem] pl-5 p-2.5 dark:placeholder-[#AAACB9]"
                            placeholder="Choose your category"
                            :value="cityTitle"
                            v-bind="cityTitleAttrs"
                          />
                        </div>
                        <ChevronDownIcon
                          :class="{ 'rotate-180 transform': open }"
                          class="transition duration-500 absolute inset-y-0 right-[1.25rem] flex items-center my-auto h-[1.5rem] w-[1.5rem] flex-none text-[#2A2F4F]"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </PopoverButton>

                  <transition
                    enter-active-class="transition ease-out duration-200"
                    enter-from-class="opacity-0 translate-y-1"
                    enter-to-class="opacity-100 translate-y-0"
                    leave-active-class="transition ease-in duration-150"
                    leave-from-class="opacity-100 translate-y-0"
                    leave-to-class="opacity-0 translate-y-1"
                  >
                    <PopoverPanel
                      class="w-full transition-all duration-500 absolute left-[0rem] top-full z-50 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
                    >
                      <div
                        class="rounded-[1rem] mx-[1.5rem] hover:bg-[#ff3d9a0d] my-[1rem]"
                      >
                        <div
                          class="px-[1rem] py-[0.75rem] flex items-center cursor-pointer"
                        >
                          <p
                            class="ml-2 text-[1rem] font-semibold text-[#2A2F4F]"
                          >
                            Cairo
                          </p>
                        </div>
                      </div>
                    </PopoverPanel>
                  </transition>
                </Popover>
              </PopoverGroup>
              <div
                v-if="errors.cityTitle"
                class="text-[#cc0000] mx-[1rem] text-[0.875rem] md:text-[1rem] my-[0.75rem]"
              >
                {{ errors.cityTitle }}
              </div>
            </div>
            <!-- <div>
              <p class="text-[#2A2F4F] text-[0.875rem] leading-6 mb-[0.25rem]">
                City <span class="text-[#FF3D9A]">*</span>
              </p>
              <div class="relative mt-[0.25rem] mb-[1.5rem]">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"
                >
                  <img
                    class="h-[1.25rem] w-[1.25rem]"
                    :src="locationIcon"
                    alt="userIcon"
                  />
                </div>
                <Field
                  type="text"
                  name="city_name"
                  class="w-full border-[#D4D5DC] border-[0.063rem] outline-0 text-[0.875rem] md:text-[1rem] text-[#000] rounded-full block h-[3rem] md:h-[3.5rem] pl-10 p-2.5 dark:placeholder-[#AAACB9]"
                  placeholder="Choose user city"
                />
              </div>
              <div class="mt-[0.75rem]">
                <ErrorMessage
                  name="city_name"
                  class="text-[#cc0000] m-[1rem] text-[0.875rem] md:text-[1rem]"
                />
              </div>
              <PopoverGroup class="my-[1rem] md:my-auto">
                <Popover class="relative" v-slot="{ open }">
                  <PopoverButton
                    class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white focus:outline-none w-full"
                  >
                    <div class="relative w-full">
                      <input
                        type="text"
                        id="input-group-1"
                        class="cursor-pointer outline-0 bg-[#fff] text-gray-900 text-sm rounded-full block w-full h-[3rem] p-2.5 border border-[#D4D5DC] placeholder-[#AAACB9]"
                        placeholder="Choose User City"
                      />
                      <ChevronDownIcon
                        :class="{ 'rotate-180 transform': open }"
                        class="transition duration-500 absolute inset-y-0 right-[1.25rem] flex items-center my-auto h-[1.5rem] w-[1.5rem] flex-none text-[#2A2F4F]"
                        aria-hidden="true"
                      />
                    </div>
                  </PopoverButton>
  
                  <transition
                    enter-active-class="transition ease-out duration-200"
                    enter-from-class="opacity-0 translate-y-1"
                    enter-to-class="opacity-100 translate-y-0"
                    leave-active-class="transition ease-in duration-150"
                    leave-from-class="opacity-100 translate-y-0"
                    leave-to-class="opacity-0 translate-y-1"
                  >
                    <PopoverPanel
                      class="w-full transition-all duration-500 absolute left-[0rem] top-full z-50 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
                    >
                      <div
                        class="rounded-[1rem] mx-[1.5rem] hover:bg-[#ff3d9a0d] my-[1rem]"
                        v-for="city in Locations"
                      >
                        <div
                          class="px-[1rem] py-[0.75rem] flex items-center cursor-pointer"
                        >
                          <p
                            class="ml-2 text-[1rem] font-semibold text-[#2A2F4F]"
                          >
                            {{ city.title }}
                          </p>
                        </div>
                      </div>
                    </PopoverPanel>
                  </transition>
                </Popover>
              </PopoverGroup>
            </div> -->
            <div class="mt-[1.5rem]">
              <p class="text-[#2A2F4F] text-[0.875rem] leading-6">
                Address <span class="text-[#FF3D9A]">*</span>
              </p>
              <div class="relative mt-[0.25rem] mb-[1.5rem]">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"
                >
                  <img
                    class="h-[1.25rem] w-[1.25rem]"
                    :src="locationIcon"
                    alt="userIcon"
                  />
                </div>
                <Field
                  type="text"
                  name="address"
                  class="w-full border-[#D4D5DC] border-[0.063rem] outline-0 text-[0.875rem] md:text-[1rem] text-[#000] rounded-full block h-[3rem] md:h-[3.5rem] pl-10 p-2.5 dark:placeholder-[#AAACB9]"
                  placeholder="Enter Address"
                  v-model="address"
                  v-bind="addressAttrs"
                />
              </div>
              <div
                v-if="errors.address"
                class="text-[#cc0000] mx-[1rem] text-[0.875rem] md:text-[1rem] my-[0.75rem]"
              >
                {{ errors.address }}
              </div>
            </div>
          </div>
        </div>
        <div class="flex mt-[2rem] md:mt-[4rem]">
          <div
            class="flex flex-col sm:flex-row justify-center gap-x-[1.5rem] gap-y-[0.5rem] sm:gap-y-0 mx-auto"
          >
            <NuxtLink to="/registeration-steps/step1">
              <button
                class="rounded-[2rem] bg-[#fff] border-[0.063rem] border-[#FF3D9A] w-[11.25rem] h-[3.5rem] cursor-pointer"
              >
                <p class="text-[#FF3D9A] text[1rem] leading-7 font-bold">
                  Back
                </p>
              </button>
            </NuxtLink>
            <button
              type="submit"
              class="rounded-[2rem] bg-[#FF3D9A] w-[11.25rem] border-[0.063rem] border-[#FF3D9A] h-[3.5rem] cursor-pointer"
            >
              <p class="text-[#fff] text[1rem] leading-7 font-bold">
                Save & continue
              </p>
            </button>
          </div>
        </div>
      </form>
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
import { useUserStore } from '~/stores/user.state.js';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { getAddress, updateAddress } from '~/apis/address';

definePageMeta({
  layout: 'registeration-steps',
});

const props = defineProps({
  header: { type: Boolean, default: true },
  actions: { type: Boolean, default: true },
});

const { errors, handleSubmit, defineField, setFieldValue } = useForm<any>({
  validationSchema: yup.object({
    // cityId: yup.number().required(),
    cityTitle: yup.string().required(),
    address: yup.string().min(3).required(),
  }),
});

// let [cityId, cityIdAttrs] = defineField('cityId');
let [cityTitle, cityTitleAttrs] = defineField('cityTitle');
let [address, addressAttrs] = defineField('address');

const router = useRouter();

// Pinia Store
const userStore = useUserStore();

const Locations = reactive([
  {
    id: 2,
    title: 'Cairo',
    checked: false,
  },
]);

let currentUser: any = ref({});
// const { step2: getAddress, updateStep2 } = useSteps();
const isPageLoading = ref(false);

const setCurrentUserData = async () => {
  isPageLoading.value = true;
  try {
    const { data } = await getAddress();
    currentUser.value = {
      ...userStore.userData,
      ...data.data,
    };
    // currentUser.value.cityId &&
    //   setFieldValue('cityId', currentUser.value.cityId ?? '');
    currentUser.value.cityName &&
      setFieldValue('cityTitle', currentUser.value.cityName ?? '');
    currentUser.value.address &&
      setFieldValue('address', currentUser.value.address ?? '');
  } catch (err) {
    console.log(err);
  } finally {
    isPageLoading.value = false;
  }
};

const onUpdateUserData = handleSubmit(async (values) => {
  try {
    const payload = {
      cityId: 2,
      address: values.address,
      coordinate: {
        latitude: 22,
        longitude: 23,
      },
    };
    await updateAddress(payload);
    props.actions && router.push('/registeration-steps/step3');
  } catch (err) {
    console.log(err);
  }
});

setCurrentUserData();
</script>
