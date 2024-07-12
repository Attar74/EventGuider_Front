/**
 *
 * @param User
 * @returns {User}
 */
async function getCountries(): Promise<any> {
  const response: any = await $fetch(
    'https://event-guider-dev.azurewebsites.net/countries/app-view',
    {
      method: 'GET',
    }
  );

  return response;
}

export default function useCommon() {
  return {
    getCountries,
  };
}
