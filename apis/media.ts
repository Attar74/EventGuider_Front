import { resource } from './client';
import axios from 'axios';

const resourceObj = resource('/vendors/my-photos');

const { get: getMedia } = resourceObj;

const updateMedia = async function (form: FormData) {
  try {
    await axios.put(
      `https://event-guider-dev.azurewebsites.net/vendors/my-photos`,
      form,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem('accessToken') ?? ''
          )}`,
        },
      }
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteMedia = async function (id: string) {
  try {
    await axios.delete(
      `https://event-guider-dev.azurewebsites.net/vendors/my-photos`,
      {
        data: {
          photosUrl: [id],
        },
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem('accessToken') ?? ''
          )}`,
        },
      }
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { getMedia, updateMedia, deleteMedia };
