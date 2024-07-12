import work from '../public/assets/svgs_icons/Work.svg';
import location from '../public/assets/svgs_icons/location.svg';
import images from '../public/assets/svgs_icons/images.svg';
import circle from '../public/assets/svgs_icons/circle.svg';

const userStore: any = localStorage.getItem('user');

const steps = [
  {
    id: 1,
    title: 'Step 1',
    description: 'Add information about your business',
    estimitadeTime: '6m',
    icon: userStore?.status !== 'vendorAddBasicInfo' ? circle : work,
  },
  {
    id: 2,
    title: 'Step 2',
    description: 'add your business addresss',
    estimitadeTime: '2m',
    icon:
      userStore?.status !== 'vendorAddAddressInfo' &&
      userStore?.status !== 'vendorAddBasicInfo'
        ? circle
        : location,
  },
  {
    id: 3,
    title: 'Step 3',
    description: 'upload at least 6 high quality photos / videos',
    estimitadeTime: '3m',
    icon:
      userStore?.status !== 'vendorAddPhotos' &&
      userStore?.status !== 'vendorAddAddressInfo' &&
      userStore?.status !== 'vendorAddBasicInfo'
        ? circle
        : images,
  },
];

export default steps;
