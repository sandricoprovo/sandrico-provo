import { StaticImageData } from 'next/image';

export interface Project {
    name: string;
    photo: StaticImageData;
    photoAlt: string;
    description: string;
    links: {
        github?: string;
        external?: string;
    };
    stack: string[];
    shouldFeature: boolean;
}
