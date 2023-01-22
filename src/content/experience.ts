import { Experience } from '../types/experience';

const experienceList: Experience[] = [
    {
        id: 'RSSD_C',
        jobTitle: 'Software Developer',
        companyName: 'REDspace',
        companyLink: 'https://www.redspace.com/',
        timeline: 'May 2022 - Present',
        location: 'Remote',
        achievements: [
            'Developed a UI form renderer that utilizes JSON by designing an intake JSON structure and component mapping system.',
            'Utilized React and TypeScript to build at least 2 critical user flows including authentication and selecting primary UI elements.',
            'Optimized load times of a high usage component by a factor of N by loading data in chunks as needed instead of all on load.',
        ],
        techUsed: [
            'React',
            'TypeScript',
            'CSS',
            'GraphQL',
            'React Native',
            'Docker',
            'AWS',
            'Styled Components',
        ],
    },
    {
        id: 'RSJSD_2022',
        jobTitle: 'Jr. Software Developer',
        companyName: 'REDspace',
        companyLink: 'https://www.redspace.com/',
        timeline: 'May 2021 - April 2022',
        location: 'Remote',
        achievements: [
            'Built a 3 step data-driven user authentication flow using React, TypeScript and GraphQL.',
            'Decreased team debug time by 16 hours by integrating a new docker startup flow using open source tools.',
            'Developed a procedure to add and refresh list items while also preserving the previous lists’ order.',
        ],
        techUsed: [
            'React',
            'TypeScript',
            'CSS',
            'GraphQL',
            'C#',
            'Docker',
            'Styled Components',
        ],
    },
    {
        id: 'BWAD_2022',
        jobTitle: 'Web Application Developer',
        companyName: 'Bursity',
        timeline: 'May 2020 - August 2020',
        location: 'Remote',
        wasCoOp: true,
        achievements: [
            "Implemented the majority of a CMS front-end which displays 100's of personalized scholarships to users within 15 minutes.",
            'Designed a light weight user interface that provided hundreds of personalized scholarships to students within 5 steps or less.',
            'Created a full design prototype using Figma which attracted two interested startup investors after demonstrations.',
        ],
        techUsed: ['CSS', 'WordPress', 'Figma'],
    },
];

const educationList = [
    {
        id: 'NSCC-ITWEBP-2021',
        school: 'Nova Scotia Community College',
        program: 'IT Web Programming',
        endDate: 'April 2021 // Graduated with Honours',
    },
    {
        id: 'SMU-GS-2017',
        school: "Saint Mary's University",
        program: 'B.A. Geography & Sociology',
        endDate: 'January 2017',
    },
];

export { experienceList, educationList };
