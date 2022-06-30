import { UsesGear } from '../types/UsesGear';
import GEAR_IMAGE from '../../public/images/setup.jpeg';

export const usesGearImage = {
    src: GEAR_IMAGE.src,
    alt: '',
    blurUrl: GEAR_IMAGE.blurDataURL,
};

export const usesGear: UsesGear[] = [
    {
        category: 'Hardware',
        gear: ['Test', 'Test', 'Test'],
    },
];
