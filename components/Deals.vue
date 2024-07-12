<template>
  <div
    class="mx-auto px-[1rem] md:px-[4rem] mt-[2.5rem] mb-[10rem]"
    :class="{ container: false, 'mx-[11rem]': true }"
  >
    <div>
      <div class="text-center" v-if="false">
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
      <form>
        <div class="my-[2.5rem]">
          <p
            class="text-[1.25rem] text-[#2A2F4F] font-semibold leading-9 mb-[0.5rem]"
          >
            Discount
          </p>
          <div
            class="w-full h-full overflow-hidden shadow-lg p-[1rem] sm:p-[1.5rem] rounded-2xl bg-[#fff] mx-auto"
          >
            <p class="text-[#2A2F4F] text-[1rem] font-semibold leading-7">
              Discount Info
            </p>
            <div class="my-[1rem]">
              <div
                class="w-full h-full overflow-hidden shadow-lg p-[1rem] sm:p-[1.5rem] rounded-2xl mx-auto bg-[#2A2F4F]"
              >
                <p v-for="i in 9" class="text-[#2A2F4F]">x</p>
              </div>
            </div>
            <div class="my-[1rem]">
              <div
                class="w-full h-full overflow-hidden sm:p-[1.5rem] rounded-[0.75rem] mx-auto border-[0.063rem] border-[#ff3d9a08] bg-[#ff3d9a08]"
              >
                <div class="flex justify-end gap-x-[1rem]">
                  <svgEdit />
                  <svgDelete />
                </div>
                <table class="table-auto w-full">
                  <thead>
                    <tr>
                      <th
                        class="text-left text-[#555972] text-[0.875rem] leading-6 font-medium"
                      >
                        Discount for :
                      </th>
                      <th
                        class="text-left text-[#555972] text-[0.875rem] leading-6 font-medium"
                      >
                        Discount Ratio :
                      </th>
                      <th
                        class="text-left text-[#555972] text-[0.875rem] leading-6 font-medium"
                      >
                        Valid until :
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="flex gap-x-[0.5rem]">
                        <img
                          class="w-10 h-10 rounded-full"
                          src="@/public/assets/auth/loginImg.png"
                          alt="Rounded avatar"
                        />
                        <p
                          class="text-[#2A2F4F] text-[1rem] leading-7 font-semibold my-auto"
                        >
                          Venue one name
                        </p>
                      </td>
                      <td>
                        <div class="flex gap-x-[0.5rem]">
                          <svgDiscount />
                          <p
                            class="text-[#FF3D9A] text-[1rem] font-bold leading-7"
                          >
                            10 % off
                          </p>
                        </div>
                      </td>
                      <td>
                        <div class="flex gap-x-[0.5rem]">
                          <svgDate />
                          <p
                            class="text-[#2A2F4F] text-[1rem] font-medium leading-7"
                          >
                            25 October 2024
                          </p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="flex justify-between mt-[2rem]">
                <p
                  class="my-auto text-[#7F8295] text-[1rem] font-medium leading-7"
                >
                  Want to add another venue discount ?
                </p>
                <button
                  class="rounded-[2rem] bg-[#FF3D9A] border-[0.063rem] border-[#FF3D9A] w-[11.25rem] h-[3.5rem] cursor-pointer"
                >
                  <p class="text-[#fff] text[1rem] leading-7 font-bold">
                    Add discount
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="my-[2.5rem]">
          <p
            class="text-[1.25rem] text-[#2A2F4F] font-semibold leading-9 mb-[0.5rem]"
          >
            Deals
          </p>
          <div
            class="w-full h-full overflow-hidden shadow-lg p-[1rem] sm:p-[1.5rem] rounded-2xl bg-[#fff] mx-auto"
          >
            <div
              class="bg-no-repeat bg-contain bg-[url(@/public/assets/bg/coloredBg.png)] p-[2rem]"
            >
              <div class="flex gap-x-[1rem]">
                <svgDeal />
                <p
                  class="text-[#fff] my-auto text-[1.25rem] capitalize leading-10 font-bold"
                >
                  Create deal
                </p>
              </div>
              <div class="flex justify-between mt-[1rem]">
                <p class="text-[#fff] text-[1rem] leading-7">
                  Offer a discount or special package to attract new business.
                  <br />
                  Please contact your account manager if you are unsure about
                  whether <br />
                  you have paid for the deals package.
                </p>
                <button
                  class="rounded-[2rem] bg-[#fff] w-[11.25rem] h-[3.5rem] cursor-pointer"
                >
                  <p class="text-[#FF3D9A] text[0.875rem] leading-7 font-bold">
                    Create Deal
                  </p>
                </button>
              </div>
            </div>
            <div class="mt-[2rem]">
              <p
                class="text-[#2A2F4F] text-[1rem] leading-7 font-semibold mb-[0.5rem]"
              >
                Your deals
              </p>
              <div
                class="flex gap-x-[1rem] w-full h-full overflow-hidden sm:p-[1.5rem] rounded-[0.75rem] mx-auto border-[0.063rem] border-[#ff3d9a1a] bg-[#ff3d9a08]"
              >
                <div
                  class="bg-no-repeat bg-contain bg-[url(@/public/assets/bg/solidBg.png)] p-[2rem] min-w-[18.75rem] min-h-[9.25rem]"
                ></div>
                <div class="w-full">
                  <div class="flex justify-between w-full">
                    <p
                      class="text-[#2A2F4F] text-[1.25rem] font-bold leading-9 capitalize my-auto"
                    >
                      Deal name
                    </p>
                    <div class="flex gap-x-[1rem] my-auto">
                      <svgEdit />
                      <svgDelete />
                    </div>
                  </div>
                  <div class="mt-[1.5rem]">
                    <p class="text-[#7F8295] text-[1rem] leading-7">
                      Lorem Ipsum is simply dummy text of the printing <br />
                      and typeset industry. Lorem Ipsum <br />
                      has been the...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="my-[2.5rem]">
          <p
            class="text-[1.25rem] text-[#2A2F4F] font-semibold leading-9 mb-[0.5rem]"
          >
            Create Deals
          </p>
          <div
            class="w-full shadow-lg p-[1.5rem] sm:p-[1.5rem] rounded-2xl bg-[#fff] mx-auto"
          >
            <div
              class="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-[1.5rem] mb-[1.5rem]"
            >
              <div class="col-span-2 md:col-span-1">
                <p
                  class="text-[1rem] text-[#2A2F4F] font-semibold leading-9 mb-[0.5rem]"
                >
                  Deal Info
                </p>
                <div
                  class="w-full p-[1rem] sm:p-[1.5rem] rounded-2xl bg-[#2a2f4f08] mx-auto"
                >
                  <div class="col-span-2 md:col-span-1">
                    <p class="text-[#2A2F4F] text-[0.875rem] leading-6">
                      Deal name <span class="text-[#FF3D9A]">*</span>
                    </p>
                    <div class="relative mt-[0.25rem] mb-[0.5rem]">
                      <input
                        type="number"
                        name="enter min price"
                        class="w-full border-[#D4D5DC] border-[0.063rem] outline-0 text-[0.875rem] md:text-[1rem] text-[#000] rounded-full block h-[3rem] md:h-[3.5rem] pl-10 p-2.5 dark:placeholder-[#AAACB9]"
                        placeholder="Enter deal name"
                      />
                    </div>
                  </div>
                  <div class="col-span-2 md:col-span-1">
                    <p class="text-[#2A2F4F] text-[0.875rem] leading-6">
                      Valid until <span class="text-[#FF3D9A]">*</span>
                    </p>
                    <div class="relative mt-[0.25rem] mb-[0.5rem]">
                      <input
                        type="number"
                        name="email"
                        class="w-full border-[#D4D5DC] border-[0.063rem] outline-0 text-[0.875rem] md:text-[1rem] text-[#000] rounded-full block h-[3rem] md:h-[3.5rem] pl-10 p-2.5 dark:placeholder-[#AAACB9]"
                        placeholder="Choose discount ratio"
                      />
                      <div
                        class="absolute inset-y-0 right-[1.25rem] flex items-center pl-3.5"
                      >
                        <p
                          class="text-[#2A2F4F] text-[1rem] leading-7 font-bold"
                        >
                          <svgDate color="#FF3D9A" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-span-2 md:col-span-1">
                <p
                  class="text-[1rem] text-[#2A2F4F] font-semibold leading-9 mb-[0.5rem]"
                >
                  Deal Image
                </p>
                <div class="rounded-2xl">
                  <label for="file_input">
                    <input
                      class="hidden"
                      id="file_input"
                      type="file"
                      accept="image/*"
                      multiple
                    />
                    <div
                      class="flex cursor-pointer border-[0.063rem] border-[#FF3D9A] border-dashed rounded-[0.875rem] bg-[#ff3d9a08] py-[1.5rem]"
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
                          class="text-[#FF3D9A] text-center underline mt-[0.5rem] text-[1rem]"
                        >
                          Click here to upload
                        </p>
                        <p class="text-[#7F8295] text-center text-[0.875rem]">
                          Max file: 8MB
                        </p>
                      </div>
                    </div>
                  </label>
                  <div class="flex gap-x-[0.5rem] mt-[1rem]">
                    <svgExclamation class="mt-[0.2rem]" />
                    <p class="text-[#7F8295] text-[0.875rem] leading-6">
                      Collages, photos with watermarks, contact <br />
                      details and illustrations cannot be <br />
                      published
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="my-[2.5rem]">
              <p
                class="text-[1.25rem] text-[#2A2F4F] font-semibold leading-9 mb-[0.5rem]"
              >
                Deals Discription <span class="text-[#FF3D9A]">*</span>
              </p>
              <div class="mt-[1rem]">
                <Field
                  as="textarea"
                  name="businessDescription"
                  class="bg-[#F9F9FA] w-full border-[#D4D5DC] border-[0.063rem] outline-0 text-[0.875rem] md:text-[1rem] text-[#000] rounded-xl block pt-[0.875rem] pl-[1.25rem]"
                  placeholder="Write discription"
                  rows="5"
                />
              </div>
            </div>
            <div class="flex justify-end">
              <button
                class="rounded-[2rem] bg-[#FF3D9A] border-[0.063rem] border-[#FF3D9A] w-[11.25rem] h-[3.5rem] cursor-pointer"
              >
                <p class="text-[#fff] text[1rem] leading-7 font-bold">
                  Save Deal
                </p>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import svgDelete from '@/components/svgs/delete.vue';
import svgEdit from '@/components/svgs/edit.vue';
import svgDiscount from '@/components/svgs/discount.vue';
import svgDate from '@/components/svgs/date.vue';
import svgExclamation from '@/components/svgs/exclamation.vue';
import svgDeal from '@/components/svgs/deal.vue';
</script>
