import { IWorkExperience } from '../types/WorkExperience';

const WORK_EXPERIENCES: IWorkExperience[] = [
    {
        jobTitle: 'Software Developer',
        companyName: 'REDspace',
        companyLink: 'https://www.redspace.com/',
        timeline: 'April 2022 - Present / Halifax, NS / Remote',
        details: [
            'Acted in a tech lead role on a small internal development team which took an application from proposal to minimum viable product in less than two months.',
            'Utilized React and TypeScript to build at least 2 critical user flows including authentication and selecting primary UI elements.',
            'Implemented a secondary approach to running a back-end application which prevented 16 hours of lost development time.',
        ],
        techUsed: [
            'React',
            'TypeScript',
            'CSS',
            'GraphQL',
            'React Native',
            'Git',
            'JIRA',
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
            "Implemented the majority of a CMS front-end which displays 100's of personalized scholarships to users within 15 minutes.",
            'Designed a light weight user interface that provided hundreds of personalized scholarships to students within 5 steps or less.',
            'Created a full design prototype using Figma which attracted two interested startup investors after demonstrations.',
        ],
        techUsed: ['CSS', 'WordPress', 'Figma'],
    },
];

export { WORK_EXPERIENCES };
