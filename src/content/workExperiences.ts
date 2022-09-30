import { IWorkExperience } from '../types/WorkExperience';

const WORK_EXPERIENCES: IWorkExperience[] = [
    {
        jobTitle: 'Software Developer',
        companyName: 'REDspace',
        companyLink: 'https://www.redspace.com/',
        timeline: 'April 2022 - Present / Halifax, NS / Remote',
        details: [
            'Utilizing React & TypeScript to provide critical front-end UI components daily.',
            'Interact with a variety of technologies including Docker, React, CSS, TypeScript, C#, GraphQL.',
            'Contributing to documentation maintenance.',
        ],
        previousRoles: [
            'Junior Software Developer / May 2021 - April 2022 / Remote',
            'Web Development Intern / April 2021 - May 2021 / Remote',
        ],
    },
    {
        jobTitle: 'Web Application Developer',
        companyName: 'Bursity',
        timeline:
            'May 2020 - August 2020 (CO-OP) / Halifax, NS / Remote / Early Stage Startup',
        details: [
            'Implemented the majority of a CMS front-end which displays 100’s of personalized scholarships to users within 15 minutes.',
            'Designed a light weight user interface that provided hundreds of personalized scholarships to students within 5 steps or less.',
            'Created a full design prototype using Figma which attracted two interested startup investors after demonstrations.',
        ],
    },
];

export { WORK_EXPERIENCES };
