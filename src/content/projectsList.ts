import deckOfCardsPhoto from '../../public/images/deck_of_cards_mock.png';
import eslintConfigPhoto from '../../public/images/eslint_config_mock.png';
import portfolioPhoto from '../../public/images/portfolio_mock.png';
import fasciePhoto from '../../public/images/fascie_mock.png';
import { Project } from '../types/project';

const projectsList: Project[] = [
    {
        id: 'ESPRCO',
        name: 'ESLint + Prettier Config',
        photo: {
            src: eslintConfigPhoto,
            alt: 'The npmjs page for my eslint config package.',
        },
        description:
            'A public npm package maintained by me that provides linting and formatting support for TypeScript and JavaScript projects.',
        links: {
            github: 'https://github.com/sandricoprovo/eslint-config-sandricoprovo',
            external:
                'https://www.npmjs.com/package/eslint-config-sandricoprovo',
        },
        stack: ['ESLint', 'Prettier', 'TypeScript', 'JavaScript'],
        updatedOn: '2022-05-05',
    },
    {
        id: 'DEOFCA',
        name: 'Deck of Cards',
        photo: {
            src: deckOfCardsPhoto,
            alt: 'The deck of cards application shows a title, a new deck button, a new card button, and a queue of previously drawn cards.',
        },
        description:
            'A card drawing web application that uses a third-party deck-of-cards api to draw cards from a shuffled deck.',
        links: {
            github: 'https://github.com/sandricoprovo/deckofcards',
            external: 'https://candy-game-deck.netlify.app/',
        },
        stack: [
            'React',
            'TypeScript',
            'NextJS',
            'JavaScript',
            'CSS',
            'HTML',
            'ESLint',
        ],
        updatedOn: '2021-12-01',
    },
    {
        id: 'POWE',
        name: 'Portfolio Website',
        photo: {
            src: portfolioPhoto,
            alt: 'A landing page that reads "I build web experiences that solve real problems."',
        },
        description:
            'My personal portfolio website built in TypeScript & NextJS 13. Here, you can find out more about me and the work I do.',
        links: {
            github: 'https://github.com/sandricoprovo/sandrico-provo',
            external: 'https://www.sandricoprovo.dev/',
        },
        stack: [
            'React',
            'NextJS',
            'TypeScript',
            'JavaScript',
            'CSS',
            'HTML',
            'Go',
            'ESLint',
        ],
        updatedOn: '2022-11-18',
    },
    {
        id: 'FAREAP',
        name: 'Fascie REST API',
        photo: {
            src: fasciePhoto,
            alt: 'Code related to the facsie web server.',
        },
        description:
            'Fascie is a REST API written in TypeScript that allows small businesses to improve discovery in there local area.',
        links: {
            github: 'https://github.com/sandricoprovo/fascie',
            external: '',
        },
        stack: [
            'TypeScript',
            'JavaScript',
            'ESLint',
            'GraphQL',
            'Prisma',
            'NodeJS',
        ],
        updatedOn: '2022-05-08',
    },
];

// Orders projects by most recently updated.
const orderedProjects = [...projectsList].sort(
    (a, b) => new Date(b.updatedOn).getTime() - new Date(a.updatedOn).getTime()
);

export { projectsList, orderedProjects };
