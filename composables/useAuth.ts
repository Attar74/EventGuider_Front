/**
 *
 * @param User
 * @returns {User}
 */
async function register(user: RegisterForm): Promise<RegisterForm> {
  const response: RegisterForm = await $fetch(
    'https://event-guider-dev.azurewebsites.net/vendors/register',
    {
      method: 'POST',
      body: {
        ...user,
        phoneNumber: {
          code: 20,
          number: user.phoneNumber,
        },
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
async function login(user: LoginForm): Promise<LoginForm> {
  const response: LoginForm = await $fetch(
    'https://event-guider-dev.azurewebsites.net/authentications/credentials-login',
    {
      method: 'POST',
      body: user,
    }
  );

  return response;
}

export default function useAuth() {
  return {
    register,
    login,
  };
}
