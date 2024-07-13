import { resource } from './client';

const resourceObj = resource('vendors/my-address');

const { get: getAddress, replace: updateAddress } = resourceObj;

export { getAddress, updateAddress };
