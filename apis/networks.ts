import { resource } from './client';

const { get: getNetworks, create: addNewNetwork, remove: removeNetwork } = resource('vendors/my-social-network');


export { getNetworks, addNewNetwork, removeNetwork };
