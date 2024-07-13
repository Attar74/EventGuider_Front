import { resource } from './client';

const resourceObj = resource('vendors/my-basic-info');

const { get: getBasicInfo, replace: updateBasicInfo } = resourceObj;

export { getBasicInfo, updateBasicInfo };
