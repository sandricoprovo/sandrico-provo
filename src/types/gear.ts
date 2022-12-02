import { StaticImageData } from 'next/image';

export interface GearList {
    label: string;
    list: string[];
}

export interface Gear {
    photo: {
        src: StaticImageData;
        alt: string;
    };
    list: GearList[];
}
