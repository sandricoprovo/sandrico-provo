import deckOfCardsPhoto from '../../public/images/deck_of_cards_mock.png';
import eslintConfigPhoto from '../../public/images/eslint_config_mock.png';
import portfolioPhoto from '../../public/images/portfolio_mock.png';
import { Project } from '../types/project';

// Note: Months are formatted as YYYY-MM-DD

const projectsList: Project[] = [
    {
        id: 'ESCO',
        name: 'ESLint Config',
        photo: {
            src: eslintConfigPhoto,
            alt: 'The npmjs page for my eslint config package.',
        },
        description:
            'A public npm package maintained by me that helps developers adhere to best practices by linting and formatting their JavaScript and TypeScript code.',
        links: {
            github: 'https://github.com/sandricoprovo/eslint-config-sandricoprovo',
            external:
                'https://www.npmjs.com/package/eslint-config-sandricoprovo',
        },
        stack: ['ESLint', 'TypeScript', 'JavaScript', 'GitHub Actions'],
        updatedOn: '2023-01-08',
    },
    {
        id: 'DEOFCA',
        name: 'Deck of Cards',
        photo: {
            src: deckOfCardsPhoto,
            alt: 'An interactive React and TypeScript web app for users to draw and track shuffled cards from a deck.',
        },
        description:
            'An interactive React and TypeScript web app that lets users draw and track shuffled cards from a deck.',
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
            'A full-stack website built with Next.js, TypeScript, and Go serverless functions. Check out my projects, gear, and other ways to get in touch.',
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
        updatedOn: '2023-01-22',
    },
];

// Orders projects by most recently updated.
const orderedProjects = [...projectsList].sort(
    (a, b) => new Date(b.updatedOn).getTime() - new Date(a.updatedOn).getTime()
);

export { projectsList, orderedProjects };
