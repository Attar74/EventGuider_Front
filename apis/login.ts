import { resource } from './client';

const resourceObj = resource('authentications/credentials-login');

const { create: login } = resourceObj;

export default login;
