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
        <div class="mt-[2rem]">
          <div
            class="flex gap-x-[1rem] w-full h-full overflow-hidden sm:p-[1rem] rounded-[0.75rem] mx-auto bg-[#FFF]"
          >
            <div class="w-full">
              <div class="flex justify-between w-full">
                <div class="flex gap-x-[1rem]">
                  <p class="text-[#2A2F4F] text-[1rem] leading-7 my-auto">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>

                <div class="flex gap-x-[0.5rem] my-auto">
                  <plusCircle class="my-auto" />
                  <p class="text-[#AAACB9] text-[1rem] leading-7 font-bold">
                    Add you question
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="my-[2.5rem]">
          <div
            class="w-full h-full overflow-hidden shadow-lg p-[1rem] sm:p-[1.5rem] rounded-2xl bg-[#fff] mx-auto"
          >
            <div class="my-auto">
              <p class="text-[#2A2F4F] text-[0.875rem] leading-6 font-bold">
                Question Title
              </p>
              <div class="flex gap-x-[0.5rem]">
                <div class="mt-[0.25rem] mb-[0.5rem] w-full">
                  <input
                    type="text"
                    name="enter min price"
                    class="w-full border-[#D4D5DC] border-[0.063rem] outline-0 text-[0.875rem] md:text-[1rem] text-[#000] rounded-full block h-[3rem] md:h-[3.5rem] pl-[1rem] p-2.5 dark:placeholder-[#AAACB9]"
                    placeholder="Enter Question Title"
                  />
                </div>
              </div>
            </div>
            <div class="my-[1rem]">
              <p class="text-[#2A2F4F] text-[0.875rem] leading-6 font-bold">
                Answer Type
              </p>
              <div class="mt-[1rem] flex gap-x-[3rem]">
                <div class="flex items-center my-auto">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value=""
                    name="default-radio"
                    class="w-[1.5rem] h-[1.5rem] border-gray-300 cursor-pointer focus:ring-[#FF3D9A]"
                  />
                  <label
                    for="default-radio-1"
                    class="ms-2 text-[0.875rem] font-bold text-[#2A2F4F] leading-6"
                    >Default radio</label
                  >
                </div>

                <div class="flex items-center my-auto">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value=""
                    name="default-radio"
                    class="w-[1.5rem] h-[1.5rem] border-gray-300 cursor-pointer focus:ring-[#FF3D9A]"
                  />
                  <label
                    for="default-radio-1"
                    class="ms-2 text-[0.875rem] font-bold text-[#2A2F4F] leading-6"
                  >
                    Points
                  </label>
                </div>
              </div>
            </div>
            <div class="my-[2.5rem]">
              <div>
                <Field
                  as="textarea"
                  name="businessDescription"
                  class="bg-[#F9F9FA] w-full border-[#D4D5DC] border-[0.063rem] outline-0 text-[0.875rem] md:text-[1rem] text-[#000] rounded-xl block pt-[0.875rem] pl-[1.25rem]"
                  placeholder="enter your Answer"
                  rows="5"
                />
              </div>
            </div>
            <div class="flex justify-end">
              <button
                class="rounded-[2rem] bg-[#FF3D9A] border-[0.063rem] border-[#FF3D9A] w-[11.25rem] h-[3.5rem] cursor-pointer"
              >
                <p class="text-[#fff] text[1rem] leading-7 font-bold">
                  Add Answer
                </p>
              </button>
            </div>
          </div>
        </div>
        <div class="my-[2rem]">
          <div
            class="flex gap-x-[1rem] w-full h-full overflow-hidden sm:p-[1rem] rounded-[0.75rem] mx-auto bg-[#FFF]"
          >
            <div class="w-full">
              <div class="flex justify-between w-full">
                <div class="flex gap-x-[0.5rem]">
                  <p class="text-[#7F8295] text-[1rem] leading-7 font-bold">
                    01
                  </p>
                  <p
                    class="text-[#2A2F4F] text-[1rem] leading-7 my-auto font-bold"
                  >
                    From which price can I hire my Venues ?
                  </p>
                </div>
                <div class="flex gap-x-[0.75rem] my-auto">
                  <svgEdit />
                  <svgDelete />
                </div>
              </div>
              <div class="mt-[0.75rem]">
                <p class="text-[#2A2F4F] text-[1rem] leading-7">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="my-[2rem]">
          <div
            class="flex gap-x-[1rem] w-full h-full overflow-hidden sm:p-[1rem] rounded-[0.75rem] mx-auto bg-[#FFF]"
          >
            <div class="w-full">
              <div class="flex justify-between w-full">
                <div class="flex gap-x-[0.5rem]">
                  <p class="text-[#7F8295] text-[1rem] leading-7 font-bold">
                    02
                  </p>
                  <p
                    class="text-[#2A2F4F] text-[1rem] leading-7 my-auto font-bold"
                  >
                    Venues Type :
                  </p>
                </div>
                <div class="flex gap-x-[0.75rem] my-auto">
                  <svgEdit />
                  <svgDelete />
                </div>
              </div>
              <div
                class="mt-[0.75rem] bg-[#ff3d9a0d] flex gap-x-[0.5rem] p-[1rem] rounded-[2.5rem] max-w-fit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 1C5.93442 1 1 5.93442 1 12C1 18.0656 5.93442 23 12 23C18.0656 23 23 18.0656 23 12C23 5.93442 18.0656 1 12 1ZM17.6833 10.636L13.6262 14.6189C12.9084 15.3229 11.9844 15.674 11.0595 15.674C10.1447 15.674 9.22983 15.3293 8.51483 14.6391L6.77408 12.9277C6.41292 12.5729 6.40833 11.9927 6.76308 11.6315C7.11692 11.2694 7.699 11.2648 8.05925 11.6205L9.7945 13.3264C10.5058 14.0139 11.6287 14.0103 12.3438 13.3099L16.4 9.32792C16.7603 8.97225 17.3387 8.97867 17.6962 9.33983C18.0509 9.701 18.0454 10.2812 17.6833 10.636Z"
                    fill="#FF3D9A"
                  />
                </svg>
                <p>Unusual Weddings</p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-full h-full overflow-hidden sm:p-[1.5rem] rounded-[0.75rem] mx-auto border-[0.063rem] border-[#ff3d9a1a] bg-[#ff3d9a08]"
        >
          <div class="my-auto">
            <p class="text-[#2A2F4F] text-[0.875rem] leading-6 font-bold">
              Question Title
            </p>
            <div class="flex gap-x-[0.5rem]">
              <div class="mt-[0.25rem] mb-[0.5rem] w-full">
                <input
                  type="text"
                  name="enter min price"
                  class="w-full border-[#D4D5DC] border-[0.063rem] outline-0 text-[0.875rem] md:text-[1rem] text-[#000] rounded-full block h-[3rem] md:h-[3.5rem] pl-[1rem] p-2.5 dark:placeholder-[#AAACB9]"
                  placeholder="Enter Question Title"
                />
              </div>
            </div>
          </div>
          <div class="my-[1rem]">
            <p class="text-[#2A2F4F] text-[0.875rem] leading-6 font-bold">
              Answer Type
            </p>
            <div class="mt-[1rem] flex gap-x-[3rem]">
              <div class="flex items-center my-auto">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-[1.5rem] h-[1.5rem] border-gray-300 cursor-pointer focus:ring-[#FF3D9A]"
                />
                <label
                  for="default-radio-1"
                  class="ms-2 text-[0.875rem] font-bold text-[#2A2F4F] leading-6"
                  >Default radio</label
                >
              </div>

              <div class="flex items-center my-auto">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-[1.5rem] h-[1.5rem] border-gray-300 cursor-pointer focus:ring-[#FF3D9A]"
                />
                <label
                  for="default-radio-1"
                  class="ms-2 text-[0.875rem] font-bold text-[#2A2F4F] leading-6"
                >
                  Points
                </label>
              </div>
            </div>
          </div>
          <div
            class="bg-[#F9F9FA] border-[0.063rem] border-[#D4D5DC] rounded-[1rem] p-[1.5rem]"
          >
            <div class="flex justify-between gap-x-[1rem]">
              <div class="w-full my-auto">
                <div class="relative mt-[0.25rem] mb-[0.5rem]">
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
                      <g clip-path="url(#clip0_2463_903)">
                        <path
                          d="M9.99967 0.833252C4.94502 0.833252 0.833008 4.94527 0.833008 9.99992C0.833008 15.0546 4.94502 19.1666 9.99967 19.1666C15.0543 19.1666 19.1663 15.0546 19.1663 9.99992C19.1663 4.94527 15.0543 0.833252 9.99967 0.833252ZM14.7358 8.86325L11.3548 12.1823C10.7567 12.769 9.98669 13.0616 9.21592 13.0616C8.45356 13.0616 7.6912 12.7744 7.09537 12.1992L5.64474 10.773C5.34377 10.4773 5.33995 9.99381 5.63558 9.69283C5.93044 9.3911 6.41551 9.38728 6.71572 9.68367L8.16176 11.1053C8.75453 11.6782 9.6903 11.6751 10.2861 11.0915L13.6663 7.77318C13.9665 7.47679 14.4486 7.48214 14.7465 7.78311C15.0421 8.08408 15.0375 8.56763 14.7358 8.86325Z"
                          fill="#FF3D9A"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2463_903">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="enter min price"
                    class="w-full border-[#D4D5DC] border-[0.063rem] outline-0 text-[0.875rem] md:text-[1rem] text-[#000] rounded-full block h-[3rem] md:h-[3.5rem] pl-10 p-2.5 dark:placeholder-[#AAACB9]"
                    placeholder="Enter First Point"
                  />
                </div>
              </div>
              <div class="my-auto">
                <button
                  class="rounded-[2rem] bg-[#FFF] border-[0.063rem] border-[0.063rem] border-[#FF3D9A] w-[11.25rem] h-[3.5rem] cursor-pointer"
                >
                  <p class="text-[#FF3D9A] text[1rem] leading-7 font-bold">
                    Add Point
                  </p>
                </button>
              </div>
            </div>
            <div
              class="mt-[0.75rem] bg-[#ff3d9a0d] flex gap-x-[1rem] p-[1rem] rounded-[2.5rem] max-w-fit"
            >
              <div class="flex gap-x-[0.5rem]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 1C5.93442 1 1 5.93442 1 12C1 18.0656 5.93442 23 12 23C18.0656 23 23 18.0656 23 12C23 5.93442 18.0656 1 12 1ZM17.6833 10.636L13.6262 14.6189C12.9084 15.3229 11.9844 15.674 11.0595 15.674C10.1447 15.674 9.22983 15.3293 8.51483 14.6391L6.77408 12.9277C6.41292 12.5729 6.40833 11.9927 6.76308 11.6315C7.11692 11.2694 7.699 11.2648 8.05925 11.6205L9.7945 13.3264C10.5058 14.0139 11.6287 14.0103 12.3438 13.3099L16.4 9.32792C16.7603 8.97225 17.3387 8.97867 17.6962 9.33983C18.0509 9.701 18.0454 10.2812 17.6833 10.636Z"
                    fill="#FF3D9A"
                  />
                </svg>
                <p>Unusual Weddings</p>
              </div>
              <div class="flex gap-x-[0.5rem]">
                <svgEdit />
                <svgDelete />
              </div>
            </div>
          </div>

          <div class="flex justify-end mt-[2rem]">
            <button
              class="rounded-[2rem] bg-[#FF3D9A] border-[0.063rem] border-[#FF3D9A] w-[11.25rem] h-[3.5rem] cursor-pointer"
            >
              <p class="text-[#fff] text[1rem] leading-7 font-bold">
                Edit Answer
              </p>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import plusCircle from '@/components/svgs/plusCircle.vue';
import svgDelete from '@/components/svgs/delete.vue';
import svgEdit from '@/components/svgs/edit.vue';
</script>
