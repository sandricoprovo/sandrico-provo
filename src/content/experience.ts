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
            'Optimized performance by 50% by iterating on data loading strategies for a high-traffic React component.',
            'Increased test coverage by 20% by creating unit and end-to-end tests using modern testing tools in React.',
            'Provided a data-driven form component in under 150ms by developing a form renderer that consumes JSON using React Hooks.',
            'Reduced type duplication in a TypeScript application by 80% by creating a generic type for reusable components.',
            'Guided a small dev team through common engineering cycles leading to a successful MVP demo after three months while using new technologies.',
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
            'Boosted rendering performance by 92% by experimenting with and integrating a virtualized list inside a high-use table component.',
            'Reduced technical debt by 30% by integrating a state management library into a large React and TypeScript codebase.',
            'Actioned on user feedback by building drag and drop, duplicating, and reordering functionality into multiple data-drivenReact components.',
            'Coded a 3-step data-driven user authentication flow with sessions using React, TypeScript and GraphQL.',
            'Diagnosed and implemented a fix for a blocking full-stack issue that allowed the team to maintain velocity within tight deadlines.',
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
            'Produced a design prototype using Figma that attracted two potential investors after demonstrations.',
            'Worked collaboratively to integrate third-party data sources into a front-end application using WordPress and custom CSS.',
            'Built a frontend using WordPress and custom CSS that provided hundreds of personalized scholarships to students within five steps or less.',
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
