import { StaticImageData } from 'next/image';

export interface Project {
    id: string;
    name: string;
    description: string;
    stack: string[];
    updatedOn: string;
    photo: {
        src: StaticImageData;
        alt: string;
    };
    links: {
        github?: string;
        external?: string;
    };
}
