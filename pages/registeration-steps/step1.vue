<template>
  <div class="container mx-auto px-[1rem] md:px-[4rem] mt-[2.5rem] mb-[5.5rem]">
    <div class="xl:px-[19.2rem]">
      <div class="text-center">
        <div class="bg-[#ff3d9a08] mx-auto p-[1.5rem] w-[5rem] rounded-xl">
          <svg
            class="mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 56 56"
            fill="none"
          >
            <path
              d="M43.0769 10.7693H40.7077C40.2078 8.33845 38.8851 6.15431 36.9627 4.58495C35.0402 3.0156 32.6355 2.157 30.1538 2.15387L25.8461 2.15387C23.3644 2.157 20.9597 3.0156 19.0373 4.58495C17.1148 6.15431 15.7922 8.33845 15.2923 10.7693H12.923C10.0679 10.7727 7.3307 11.9084 5.31182 13.9273C3.29294 15.9461 2.15723 18.6834 2.15381 21.5385L2.15381 43.077C2.15723 45.9321 3.29294 48.6693 5.31182 50.6882C7.3307 52.7071 10.0679 53.8428 12.923 53.8462H43.0769C45.932 53.8428 48.6692 52.7071 50.6881 50.6882C52.707 48.6693 53.8427 45.9321 53.8461 43.077V21.5385C53.8427 18.6834 52.707 15.9461 50.6881 13.9273C48.6692 11.9084 45.932 10.7727 43.0769 10.7693ZM25.8461 6.46156H30.1538C31.4854 6.46708 32.7829 6.8839 33.8685 7.65498C34.9542 8.42607 35.7752 9.51376 36.219 10.7693H19.7809C20.2248 9.51376 21.0457 8.42607 22.1314 7.65498C23.2171 6.8839 24.5145 6.46708 25.8461 6.46156ZM12.923 15.0769H43.0769C44.7906 15.0769 46.4341 15.7577 47.6459 16.9695C48.8577 18.1813 49.5384 19.8248 49.5384 21.5385V28H6.4615V21.5385C6.4615 19.8248 7.14227 18.1813 8.35404 16.9695C9.56582 15.7577 11.2093 15.0769 12.923 15.0769ZM43.0769 49.5385H12.923C11.2093 49.5385 9.56582 48.8577 8.35404 47.6459C7.14227 46.4342 6.4615 44.7907 6.4615 43.077V32.3077H25.8461V34.4616C25.8461 35.0328 26.073 35.5806 26.477 35.9846C26.8809 36.3885 27.4287 36.6154 28 36.6154C28.5712 36.6154 29.119 36.3885 29.523 35.9846C29.9269 35.5806 30.1538 35.0328 30.1538 34.4616V32.3077H49.5384V43.077C49.5384 44.7907 48.8577 46.4342 47.6459 47.6459C46.4341 48.8577 44.7906 49.5385 43.0769 49.5385Z"
              fill="#FF3D9A"
            />
          </svg>
        </div>

        <p class="text-[#2A2F4F] text-[1.5rem] font-bold leading-10 mt-[1rem]">
          Add information about your business
        </p>
        <p class="text-[#7F8295] text-[1rem] leading-7">
          Your storefront features information about your wedding services to
          attract and convert our audience of engaged couples.
        </p>
      </div>
      <div class="my-[2.5rem]">
        <p
          class="text-[1.25rem] text-[#2A2F4F] font-semibold leading-9 mb-[0.5rem]"
        >
          Your login details
        </p>
        <div
          class="w-full h-full overflow-hidden shadow-lg p-[1rem] sm:p-[1.5rem] rounded-2xl bg-[#fff] mx-auto"
        >
          <div>
            <p class="text-[#2A2F4F] text-[0.875rem] leading-6">
              User Name <span class="text-[#FF3D9A]">*</span>
            </p>
            <div class="relative mt-[0.25rem] mb-[1.5rem]">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"
              >
                <img
                  class="h-[1.25rem] w-[1.25rem]"
                  :src="userIcon"
                  alt="userIcon"
                />
              </div>
              <Field
                type="text"
                name="user_name"
                class="w-full border-[#D4D5DC] border-[0.063rem] outline-0 text-[0.875rem] md:text-[1rem] text-[#000] rounded-full block h-[3rem] md:h-[3.5rem] pl-10 p-2.5 dark:placeholder-[#AAACB9]"
                placeholder="Update user name"
              />
            </div>
            <div class="mt-[0.75rem]">
              <ErrorMessage
                name="user_name"
                class="text-[#cc0000] m-[1rem] text-[0.875rem] md:text-[1rem]"
              />
            </div>
          </div>
          <NuxtLink>
            <p class="text-[#FF3D9A] text-[1rem] leading-7">Change Password</p>
          </NuxtLink>
        </div>
      </div>
      <div class="my-[2.5rem]">
        <p
          class="text-[1.25rem] text-[#2A2F4F] font-semibold leading-9 mb-[0.5rem]"
        >
          Describe your business and services *
        </p>
        <div
          class="w-full h-full overflow-hidden shadow-lg p-[1rem] sm:p-[1.5rem] rounded-2xl bg-[#fff] mx-auto"
        >
          <div>
            <p class="text-[#2A2F4F] text-[0.875rem] leading-6">
              Share unique, descriptive information about your business in order
              to attract more couples and boost your visibility across top
              search engines. Please do not include any contact information in
              this section.
            </p>
            <div class="mt-[1rem]">
              <Field
                as="textarea"
                name="business_details"
                class="bg-[#F9F9FA] w-full border-[#D4D5DC] border-[0.063rem] outline-0 text-[0.875rem] md:text-[1rem] text-[#000] rounded-xl block pt-[0.875rem] pl-[1.25rem]"
                placeholder="Enter your message"
                rows="10"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p
          class="text-[1.25rem] text-[#2A2F4F] font-semibold leading-9 mb-[0.5rem]"
        >
          Contact details
        </p>
        <div
          class="w-full h-full overflow-hidden shadow-lg p-[1rem] sm:p-[1.5rem] rounded-2xl bg-[#fff] mx-auto"
        >
          <div>
            <div class="bg-[#F9F9FA] p-[1rem] rounded-xl">
              <p class="text-[#2A2F4F] text-[1rem] leading-6">
                Lead notifications and updates from Hitched will be sent to this
                email address.
              </p>
            </div>
            <div
              class="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-[1.5rem]"
            >
              <div class="col-span-2 md:col-span-1">
                <p class="text-[#2A2F4F] text-[0.875rem] leading-6">
                  Trade Name <span class="text-[#FF3D9A]">*</span>
                </p>
                <div>
                  <div class="relative mt-[0.25rem] mb-[1.5rem]">
                    <div
                      class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"
                    >
                      <img
                        class="h-[1.25rem] w-[1.25rem]"
                        :src="mailIcon"
                        alt="mailIcon"
                      />
                    </div>
                    <Field
                      type="text"
                      name="trade_name"
                      class="w-full border-[#D4D5DC] border-[0.063rem] outline-0 text-[0.875rem] md:text-[1rem] text-[#000] rounded-full block h-[3rem] md:h-[3.5rem] pl-10 p-2.5 dark:placeholder-[#AAACB9]"
                      placeholder="Update trade name"
                    />
                  </div>
                  <div class="mt-[0.75rem]">
                    <ErrorMessage
                      name="trade_name"
                      class="text-[#cc0000] m-[1rem] text-[0.875rem] md:text-[1rem]"
                    />
                  </div>
                </div>
              </div>
              <div class="col-span-2 md:col-span-1">
                <p class="text-[#2A2F4F] text-[0.875rem] leading-6">
                  Email <span class="text-[#FF3D9A]">*</span>
                </p>
                <div>
                  <div class="relative mt-[0.25rem] mb-[1.5rem]">
                    <div
                      class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"
                    >
                      <img
                        class="h-[1.25rem] w-[1.25rem]"
                        :src="mailIcon"
                        alt="mailIcon"
                      />
                    </div>
                    <Field
                      type="email"
                      name="email"
                      class="w-full border-[#D4D5DC] border-[0.063rem] outline-0 text-[0.875rem] md:text-[1rem] text-[#000] rounded-full block h-[3rem] md:h-[3.5rem] pl-10 p-2.5 dark:placeholder-[#AAACB9]"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div class="mt-[0.75rem]">
                    <ErrorMessage
                      name="email"
                      class="text-[#cc0000] m-[1rem] text-[0.875rem] md:text-[1rem]"
                    />
                  </div>
                </div>
              </div>
              <div class="col-span-2 md:col-span-1">
                <p class="text-[#2A2F4F] text-[0.875rem] leading-6">
                  Mobile Number <span class="text-[#FF3D9A]">*</span>
                </p>
                <div>
                  <div class="relative mt-[0.25rem] mb-[1.5rem]">
                    <div
                      class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"
                    >
                      <img
                        class="h-[1.25rem] w-[1.25rem]"
                        :src="mobileIcon"
                        alt="mobileIcon"
                      />
                    </div>
                    <Field
                      type="text"
                      name="mobile_number"
                      class="w-full border-[#D4D5DC] border-[0.063rem] outline-0 text-[0.875rem] md:text-[1rem] text-[#000] rounded-full block h-[3rem] md:h-[3.5rem] pl-10 p-2.5 dark:placeholder-[#AAACB9]"
                      placeholder="Enter mobile number"
                    />
                  </div>
                  <div class="mt-[0.75rem]">
                    <ErrorMessage
                      name="mobile_number"
                      class="text-[#cc0000] m-[1rem] text-[0.875rem] md:text-[1rem]"
                    />
                  </div>
                </div>
              </div>
              <div class="col-span-2 md:col-span-1">
                <p class="text-[#2A2F4F] text-[0.875rem] leading-6">
                  Telephone
                </p>
                <div>
                  <div class="relative mt-[0.25rem] mb-[1.5rem]">
                    <div
                      class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"
                    >
                      <img
                        class="h-[1.25rem] w-[1.25rem]"
                        :src="telephoneIcon"
                        alt="telephoneIcon"
                      />
                    </div>
                    <Field
                      type="text"
                      name="telephone_number"
                      class="w-full border-[#D4D5DC] border-[0.063rem] outline-0 text-[0.875rem] md:text-[1rem] text-[#000] rounded-full block h-[3rem] md:h-[3.5rem] pl-10 p-2.5 dark:placeholder-[#AAACB9]"
                      placeholder="Enter telephone number"
                    />
                  </div>
                </div>
              </div>
              <div class="col-span-2">
                <p class="text-[#2A2F4F] text-[0.875rem] leading-6">Website</p>
                <div>
                  <div class="relative mt-[0.25rem] mb-[1.5rem]">
                    <div
                      class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"
                    >
                      <img
                        class="h-[1.25rem] w-[1.25rem]"
                        :src="webIcon"
                        alt="webIcon"
                      />
                    </div>
                    <Field
                      type="text"
                      name="Website"
                      class="w-full border-[#D4D5DC] border-[0.063rem] outline-0 text-[0.875rem] md:text-[1rem] text-[#000] rounded-full block h-[3rem] md:h-[3.5rem] pl-10 p-2.5 dark:placeholder-[#AAACB9]"
                      placeholder="Enter Website"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex mt-[2rem] md:mt-[4rem]">
        <div
          class="flex flex-col sm:flex-row justify-center gap-x-[1.5rem] gap-y-[0.5rem] sm:gap-y-0 mx-auto"
        >
          <NuxtLink to="/registeration-steps">
            <button
              class="rounded-[2rem] bg-[#fff] border-[0.063rem] border-[#FF3D9A] w-[11.25rem] h-[3.5rem] cursor-pointer"
            >
              <p class="text-[#FF3D9A] text[1rem] leading-7 font-bold">Back</p>
            </button>
          </NuxtLink>
          <button
            class="rounded-[2rem] bg-[#FF3D9A] w-[11.25rem] border-[0.063rem] border-[#FF3D9A] h-[3.5rem] cursor-pointer"
          >
            <p class="text-[#fff] text[1rem] leading-7 font-bold">
              Save & continue
            </p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import userIcon from '@/public/assets/svgs_icons/user.svg';
import mailIcon from '@/public/assets/svgs_icons/mail.svg';
import mobileIcon from '@/public/assets/svgs_icons/mobile.svg';
import telephoneIcon from '@/public/assets/svgs_icons/telephone.svg';
import webIcon from '@/public/assets/svgs_icons/web.svg';
</script>
