import { useUserStore } from '~/stores/user.state.js';

/**
 *
 * @param User
 * @returns {User}
 */
async function step1(): Promise<any> {
  // Pinia Store
  const userStore = useUserStore();

  const { accessToken } = userStore.userData;
  const response = await $fetch(
    'https://event-guider-dev.azurewebsites.net/vendors/my-basic-info',
    {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
      }),
    }
  );

  return response;
}

/**
 *
 * @param User
 * @returns {User}
 */
async function updateStep1(updatedUser: any): Promise<any> {
  // Pinia Store
  const userStore = useUserStore();

  const { accessToken } = userStore.userData;
  const response = await $fetch(
    'https://event-guider-dev.azurewebsites.net/vendors/my-basic-info',
    {
      method: 'PUT',
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
      }),
      body: {
        ...updatedUser,
      },
    }
  );

  return response;
}

/**
 *
 * @param User
 * @returns {User}
 */
async function step2(): Promise<any> {
  // Pinia Store
  const userStore = useUserStore();

  const { accessToken } = userStore.userData;
  const response = await $fetch(
    'https://event-guider-dev.azurewebsites.net/vendors/my-address',
    {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
      }),
    }
  );

  return response;
}

/**
 *
 * @param User
 * @returns {User}
 */
async function updateStep2(updatedUser: any): Promise<any> {
  // Pinia Store
  const userStore = useUserStore();

  const { accessToken } = userStore.userData;
  const response = await $fetch(
    'https://event-guider-dev.azurewebsites.net/vendors/my-address',
    {
      method: 'PUT',
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
      }),
      body: {
        ...updatedUser,
      },
    }
  );

  return response;
}

/**
 *
 * @param User
 * @returns {User}
 */
async function step3(vendorId: string): Promise<any> {
  // Pinia Store
  const userStore = useUserStore();

  const { accessToken } = userStore.userData;
  const response = await $fetch(
    `https://event-guider-dev.azurewebsites.net/vendors/my-photos`,
    {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
      }),
    }
  );

  return response;
}

/**
 *
 * @param User
 * @returns {User}
 */
async function updateStep3(body: any): Promise<any> {
  console.log('🚀 ~ updateStep3 ~ body:', body);
  // Pinia Store
  const userStore = useUserStore();

  const { accessToken } = userStore.userData;
  const response = await $fetch(
    `https://event-guider-dev.azurewebsites.net/vendors/my-photos`,
    {
      method: 'PUT',
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
      }),
      body: {
        Photos: [body],
      },
    }
  );
  return response;
}

export default function useAuth() {
  return {
    step1,
    updateStep1,
    step2,
    updateStep2,
    step3,
    updateStep3,
  };
}
