import { WorkExperience } from '../types/WorkExperience';

export const professionalLinks = {
    twitter: 'https://twitter.com/sandricoprovo',
    github: 'https://github.com/sandricoprovo',
    linkedIn: 'https://www.linkedin.com/in/sandrico-provo-7ab42a93/',
    resumeFile: '',
};

export const workExperience: WorkExperience[] = [
    {
        company: 'REDspace',
        companyUrl: 'https://www.redspace.com/',
        title: 'Software Developer',
        timeFrame: 'April 2022 - Present',
        details: [
            'Utilizing React & TypeScript to provide critical front-end UI components daily.',
            'Interact with a variety of technologies including Docker, React, CSS, TypeScript, C#, GraphQL.',
            'Contributing to documentation maintenance.',
        ],
    },
    {
        company: 'REDspace',
        companyUrl: 'https://www.redspace.com/',
        title: 'Jr. Software Developer',
        timeFrame: 'April 2021 - April 2022',
        details: [
            'Assisted in project architecture discussions & decision making.',
            'Provided constructive feedback during code reviews daily.',
        ],
    },
    {
        company: 'Bursity Inc. (Startup)',
        companyUrl: '',
        title: 'Web Application Developer',
        timeFrame: 'May 2020 - August 2020 (CO-OP)',
        details: [
            'Designed the front-end layout using modern design tools.',
            'Utilized a popular CMS to build front-end.',
            'Contributed to critical architecture decisions.',
        ],
    },
];
