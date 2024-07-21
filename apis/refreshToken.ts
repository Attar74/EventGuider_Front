import { resource } from './client';

const resourceObj = resource('authentications/refresh');

const { create: refreshToken } = resourceObj;

export { refreshToken };
