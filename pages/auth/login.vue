<template>
  <div class="my-[1.5rem] md:my-auto">
    <div>
      <p
        class="top-[8rem] px-[5rem] absolute border-2 border-[#4BB543] bg-[#4bb54333] text-[#4BB543] text-center text-[1rem] transition-opacity duration-1000 ease-in-out my-[0.5rem] py-[0.5rem] rounded-[0.25rem]"
        :class="{ 'opacity-0': !isregistered }"
      >
        You have successfully registered
      </p>
      <h1
        class="text-[#2A2F4F] text-[1rem] md:text-[1.25rem] font-bold leading-8 text-center"
      >
        Login as a Vendor
      </h1>
      <p
        class="text-[#7F8295] max-w-[18rem] md:max-w-[30rem] mt-[0.5rem] text-[0.75rem] md:text-[1rem] font-normal leading-6 text-center"
      >
        Please , enter your credentials below to be login
      </p>
    </div>
    <form @submit="onSubmit" class="px-[1rem] mt-[2rem]">
      <div class="flex justify-center">
        <div class="mx-auto w-full">
          <div>
            <p
              class="text-[#2A2F4F] text-[0.75rem] lg:text-[0.875rem] mb-[0.25rem] ml-[1rem] font-bold"
            >
              Email*
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
                  <path
                    d="M18.4666 13.7113C18.4666 13.7116 18.4666 13.7118 18.4666 13.7121C18.4654 14.5288 18.1378 15.3129 17.5537 15.8922C16.9692 16.4719 16.1755 16.799 15.3464 16.8H4.65359C3.82448 16.799 3.03077 16.4719 2.44626 15.8922C1.86204 15.3128 1.53441 14.5285 1.53331 13.7117V6.2883C1.53441 5.47146 1.86204 4.68719 2.44626 4.1078C3.03068 3.5282 3.82424 3.20108 4.65321 3.2H15.3468C16.1757 3.20108 16.9693 3.5282 17.5537 4.1078L18.0466 3.61077L19.1666 13.7121L18.4666 13.7113ZM18.4666 13.7113V6.28872M18.4666 13.7113V6.28872M18.4666 6.28872L18.4666 6.28788L18.4666 6.28872ZM4.65276 3.31515L4.65139 3.31515C4.05557 3.31632 3.47324 3.49425 2.97932 3.82674C2.48534 4.15928 2.1021 4.63144 1.87985 5.18314L1.67297 5.69668L2.12506 6.01628L7.93112 10.1209C8.48857 10.6494 9.22953 10.9443 9.99998 10.9443C10.7704 10.9443 11.5114 10.6494 12.0688 10.1209L17.8749 6.01628L18.327 5.69668L18.1201 5.18314C17.8979 4.63144 17.5146 4.15928 17.0206 3.82674C16.5267 3.49425 15.9444 3.31632 15.3486 3.31515H15.3472L4.65276 3.31515ZM2.74406 6.83829L1.66109 6.13048V7.42424V13.7121C1.66109 14.5024 1.97771 15.2592 2.53939 15.8162C3.10087 16.373 3.86118 16.6848 4.65276 16.6848H15.3472C16.1388 16.6848 16.8991 16.373 17.4606 15.8162C18.0223 15.2592 18.3389 14.5024 18.3389 13.7121V7.42424V6.13048L17.2559 6.83829L12.3181 10.0656L12.259 10.1042L12.2088 10.1539C11.6235 10.7329 10.8292 11.0591 9.99998 11.0591C9.17074 11.0591 8.3765 10.7329 7.79115 10.1539L7.74095 10.1042L7.68184 10.0656L2.74406 6.83829Z"
                    stroke="#AAACB9"
                    stroke-width="1.4"
                  />
                </svg>
              </div>
              <input
                type="email"
                name="email"
                class="w-full border-[#D4D5DC] border-[0.063rem] outline-0 text-[0.875rem] md:text-[1rem] text-[#000] rounded-full block h-[3rem] md:h-[3.5rem] pl-10 p-2.5 dark:placeholder-[#AAACB9]"
                placeholder="Enter your Email"
                v-model="email"
                v-bind="emailAttrs"
                :disabled="loginBtnLoading"
              />
            </div>
            <div
              class="text-[#cc0000] mx-[1rem] text-[0.875rem] md:text-[1rem] mt-[0.75rem]"
            >
              {{ errors.email }}
            </div>
          </div>
          <div>
            <p
              class="text-[#2A2F4F] text-[0.75rem] lg:text-[0.875rem] mt-[1rem] mb-[0.25rem] ml-[1rem] font-bold"
            >
              Password*
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
                  <path
                    d="M15.25 7.26831V6.18053C15.25 4.76236 14.6969 3.40228 13.7123 2.39948C12.7277 1.39668 11.3924 0.833313 10 0.833313C8.60761 0.833313 7.27226 1.39668 6.28769 2.39948C5.30312 3.40228 4.75 4.76236 4.75 6.18053V7.26831C4.08202 7.56524 3.51347 8.05399 3.11387 8.67479C2.71428 9.2956 2.50096 10.0215 2.5 10.7639V15.3472C2.50119 16.3598 2.89666 17.3306 3.59966 18.0466C4.30267 18.7626 5.2558 19.1654 6.25 19.1666H13.75C14.7442 19.1654 15.6973 18.7626 16.4003 18.0466C17.1033 17.3306 17.4988 16.3598 17.5 15.3472V10.7639C17.499 10.0215 17.2857 9.2956 16.8861 8.67479C16.4865 8.05399 15.918 7.56524 15.25 7.26831ZM6.25 6.18053C6.25 5.16756 6.64509 4.19606 7.34835 3.47978C8.05161 2.7635 9.00544 2.36109 10 2.36109C10.9946 2.36109 11.9484 2.7635 12.6517 3.47978C13.3549 4.19606 13.75 5.16756 13.75 6.18053V6.94442H6.25V6.18053ZM16 15.3472C16 15.955 15.7629 16.5379 15.341 16.9677C14.919 17.3974 14.3467 17.6389 13.75 17.6389H6.25C5.65326 17.6389 5.08097 17.3974 4.65901 16.9677C4.23705 16.5379 4 15.955 4 15.3472V10.7639C4 10.1561 4.23705 9.57319 4.65901 9.14341C5.08097 8.71364 5.65326 8.4722 6.25 8.4722H13.75C14.3467 8.4722 14.919 8.71364 15.341 9.14341C15.7629 9.57319 16 10.1561 16 10.7639V15.3472Z"
                    fill="#AAACB9"
                  />
                  <path
                    d="M10.0001 11.6667C9.77907 11.6667 9.56711 11.7545 9.41083 11.9108C9.25455 12.067 9.16675 12.279 9.16675 12.5V14.1667C9.16675 14.3877 9.25455 14.5997 9.41083 14.7559C9.56711 14.9122 9.77907 15 10.0001 15C10.2211 15 10.4331 14.9122 10.5893 14.7559C10.7456 14.5997 10.8334 14.3877 10.8334 14.1667V12.5C10.8334 12.279 10.7456 12.067 10.5893 11.9108C10.4331 11.7545 10.2211 11.6667 10.0001 11.6667Z"
                    fill="#AAACB9"
                  />
                </svg>
              </div>
              <input
                :type="!showPassword ? 'password' : 'text'"
                name="password"
                v-model="password"
                v-bind="passwordAttrs"
                class="w-full border-[#D4D5DC] border-[0.063rem] outline-0 text-[0.875rem] md:text-[1rem] text-[#000] rounded-full block h-[3rem] md:h-[3.5rem] pl-10 p-2.5 dark:placeholder-[#AAACB9]"
                placeholder="Enter your password"
                :disabled="loginBtnLoading"
              />
              <div
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-[1.25rem] flex items-center pl-3.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  class="cursor-pointer"
                  v-if="!showPassword"
                >
                  <path
                    d="M17.8241 8.23137C17.1975 7.22318 16.407 6.32261 15.484 5.56541L17.4278 3.6558C17.5542 3.52717 17.6242 3.3549 17.6226 3.17608C17.621 2.99726 17.548 2.8262 17.4193 2.69975C17.2906 2.57331 17.1165 2.50158 16.9345 2.50003C16.7525 2.49847 16.5771 2.56721 16.4462 2.69145L14.3324 4.77088C13.022 4.00623 11.524 3.60769 9.99996 3.61829C5.70225 3.61829 3.25315 6.50862 2.17577 8.23137C1.84293 8.76027 1.66663 9.3698 1.66663 9.99162C1.66663 10.6134 1.84293 11.223 2.17577 11.7519C2.80246 12.7601 3.59295 13.6606 4.51588 14.4178L2.57216 16.3274C2.50585 16.3904 2.45297 16.4656 2.41659 16.5488C2.38021 16.632 2.36106 16.7215 2.36025 16.8121C2.35945 16.9026 2.37702 16.9924 2.41192 17.0762C2.44683 17.1601 2.49837 17.2362 2.56355 17.3002C2.62873 17.3643 2.70624 17.4149 2.79155 17.4492C2.87686 17.4835 2.96827 17.5008 3.06045 17.5C3.15262 17.4992 3.24371 17.4804 3.32841 17.4446C3.4131 17.4089 3.4897 17.3569 3.55374 17.2918L5.6724 15.2103C6.98112 15.9748 8.47738 16.3741 9.99996 16.3649C14.2977 16.3649 16.7468 13.4746 17.8241 11.7519C18.157 11.223 18.3333 10.6134 18.3333 9.99162C18.3333 9.3698 18.157 8.76027 17.8241 8.23137ZM3.35867 11.0378C3.16092 10.7234 3.05618 10.3612 3.05618 9.99162C3.05618 9.62206 3.16092 9.2598 3.35867 8.94543C4.28472 7.4682 6.37769 4.9823 9.99996 4.9823C11.1525 4.97596 12.2889 5.24885 13.3085 5.77683L11.9111 7.14971C11.2446 6.715 10.4456 6.52022 9.64956 6.59841C8.85355 6.6766 8.10959 7.02295 7.54393 7.57869C6.97826 8.13443 6.62572 8.86533 6.54613 9.64737C6.46654 10.4294 6.66481 11.2144 7.10728 11.8692L5.50371 13.4446C4.6534 12.7692 3.92779 11.9551 3.35867 11.0378ZM12.0825 9.99162C12.0825 10.5343 11.8631 11.0547 11.4726 11.4384C11.082 11.8221 10.5523 12.0376 9.99996 12.0376C9.69071 12.0365 9.38574 11.9665 9.10793 11.833L11.8743 9.11524C12.0101 9.38818 12.0813 9.6878 12.0825 9.99162ZM7.9174 9.99162C7.9174 9.44898 8.13681 8.92857 8.52737 8.54487C8.91792 8.16117 9.44763 7.94561 9.99996 7.94561C10.3092 7.94678 10.6142 8.01673 10.892 8.15021L8.12565 10.868C7.98979 10.5951 7.9186 10.2954 7.9174 9.99162ZM16.6412 11.0378C15.7152 12.515 13.6222 15.0009 9.99996 15.0009C8.84742 15.0073 7.71106 14.7344 6.69146 14.2064L8.08886 12.8335C8.75533 13.2682 9.55436 13.463 10.3504 13.3848C11.1464 13.3066 11.8903 12.9603 12.456 12.4045C13.0217 11.8488 13.3742 11.1179 13.4538 10.3359C13.5334 9.55384 13.3351 8.76883 12.8926 8.11406L14.4962 6.53863C15.3465 7.21401 16.0721 8.02816 16.6412 8.94543C16.839 9.2598 16.9437 9.62206 16.9437 9.99162C16.9437 10.3612 16.839 10.7234 16.6412 11.0378Z"
                    fill="#AAACB9"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="cursor-pointer"
                  v-else
                >
                  <path
                    d="M21.389 9.79048C20.097 7.62804 17.1581 4 12 4C6.84191 4 3.903 7.62804 2.61098 9.79048C2.21157 10.4544 2 11.2195 2 12C2 12.7805 2.21157 13.5456 2.61098 14.2095C3.903 16.372 6.84191 20 12 20C17.1581 20 20.097 16.372 21.389 14.2095C21.7884 13.5456 22 12.7805 22 12C22 11.2195 21.7884 10.4544 21.389 9.79048ZM19.9687 13.3132C18.8591 15.1675 16.3476 18.2879 12 18.2879C7.65244 18.2879 5.14087 15.1675 4.03129 13.3132C3.79399 12.9186 3.6683 12.4639 3.6683 12C3.6683 11.5361 3.79399 11.0814 4.03129 10.6868C5.14087 8.83253 7.65244 5.71215 12 5.71215C16.3476 5.71215 18.8591 8.82911 19.9687 10.6868C20.206 11.0814 20.3317 11.5361 20.3317 12C20.3317 12.4639 20.206 12.9186 19.9687 13.3132Z"
                    fill="#AAACB9"
                  />
                  <path
                    d="M12 8C11.2089 8 10.4355 8.2346 9.77772 8.67412C9.11992 9.11365 8.60723 9.73836 8.30448 10.4693C8.00173 11.2002 7.92252 12.0044 8.07686 12.7804C8.2312 13.5563 8.61216 14.269 9.17157 14.8284C9.73098 15.3878 10.4437 15.7688 11.2196 15.9231C11.9956 16.0775 12.7998 15.9983 13.5307 15.6955C14.2616 15.3928 14.8864 14.8801 15.3259 14.2223C15.7654 13.5645 16 12.7911 16 12C15.9987 10.9395 15.5769 9.92285 14.827 9.17298C14.0772 8.42311 13.0605 8.00127 12 8ZM12 14.4C11.5253 14.4 11.0613 14.2592 10.6666 13.9955C10.272 13.7318 9.96434 13.357 9.78269 12.9184C9.60104 12.4799 9.55351 11.9973 9.64612 11.5318C9.73872 11.0662 9.9673 10.6386 10.3029 10.3029C10.6386 9.9673 11.0662 9.73872 11.5318 9.64611C11.9973 9.55351 12.4799 9.60104 12.9184 9.78269C13.357 9.96434 13.7318 10.272 13.9955 10.6666C14.2592 11.0613 14.4 11.5253 14.4 12C14.4 12.6365 14.1471 13.247 13.6971 13.6971C13.247 14.1471 12.6365 14.4 12 14.4Z"
                    fill="#AAACB9"
                  />
                </svg>
              </div>
            </div>
            <div
              class="mt-[0.5rem] text-[#cc0000] mx-[1rem] text-[0.875rem] md:text-[1rem]"
            >
              {{ errors.password }}
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-end">
        <NuxtLink to="/auth/forgetPassword">
          <p
            class="text-[0.75rem] md:text-[0.875rem] text-[#FF3D9A] cursor-pointer mt-[0.5rem] md:font-semibold hover:underline leading-[1.5rem]"
          >
            Forget Password ?
          </p>
        </NuxtLink>
      </div>
      <button
        type="submit"
        class="w-full font-bold mt-[0.5rem] md:mt-[2rem] mx-auto text-white bg-[#FF3D9A] hover:bg-[#e8388c] focus:outline-none leading-7 rounded-full text-[0.875rem] md:text-[1rem] py-[0.6rem] md:py-[0.875rem] text-center dark:bg-[#FF3D9A] dark:focus:ring-red-900"
      >
        <p class="mx-3" v-if="!loginBtnLoading">Log In</p>
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
      </button>
      <div class="flex justify-center mt-[1rem]">
        <p
          class="text-[0.875rem] md:text-[1rem] text-[#AAACB9] mr-[0.5rem] leading-[1.5rem]"
        >
          Don’t have an account ?
        </p>
        <NuxtLink to="/auth/register">
          <p
            class="text-[0.75rem] md:text-[0.875rem] text-[#FF3D9A] cursor-pointer font-semibold hover:underline leading-[1.5rem]"
          >
            Register
          </p>
        </NuxtLink>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { useUserStore } from '~/stores/user.state.js';
import { useCommonStore } from '~/stores/common.state.js';

definePageMeta({
  layout: 'auth',
  middleware: ['auth'],
});

const route = useRoute();
let isregistered = ref(false);

if (route.query.registered) {
  setTimeout(() => {
    isregistered.value = true;
  }, 500);
  setTimeout(() => {
    isregistered.value = false;
  }, 4000);
}
// const data = useFetch('/api/auth/login')

const setCountries = async () => {
  if (localStorage.getItem('countries')) {
    return;
  }
};

const showPassword = ref(false);

const { errors, handleSubmit, defineField } = useForm<LoginForm>({
  validationSchema: yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  }),
});

const loginBtnLoading = ref(false);
const router = useRouter();

// Pinia Store
const userStore = useUserStore();
const commonStore = useCommonStore();

const onSubmit = handleSubmit(
  async (values) => {
    const { email, password } = values;

    const userPayload = {
      identifier: email,
      password,
    };
    loginBtnLoading.value = true;
    try {
      await userStore.onLogin(userPayload);
      if (Object.keys(userStore.userData ?? {}).length) {
        router.push('/registeration-steps');
      }
    } catch {
    } finally {
      loginBtnLoading.value = false;
      commonStore.setCountries();
    }
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

const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');
</script>
