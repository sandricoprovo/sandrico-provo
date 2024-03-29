import mePhoto from '../../public/images/me-2.jpeg';

const aboutMe = {
    title: 'Software Engineer',
    photo: {
        src: mePhoto,
        alt: 'Sandrico Provo sitting in front of a white wall smiling for a photo.',
    },
    links: {
        github: 'https://github.com/sandricoprovo',
        twitter: 'https://twitter.com/sandricoprovo',
        linkedIn: 'https://www.linkedin.com/in/sandrico-provo/',
        resume: '/static/Sandrico_Provo_Resume.pdf',
    },
    education: [
        'NSCC IT Web Programming / 2021 / Honours',
        'B.A. Geography & Sociology / 2017',
    ],
    techSkills: [
        'React',
        'TypeScript',
        'JavaScript',
        'HTML',
        'CSS',
        'NextJS',
        'GraphQL',
        'NodeJS',
        'PostgreSQL',
        'Git',
    ],
};

export { aboutMe };
