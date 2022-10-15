import deckOfCardsPhoto from '../../public/images/deck_of_cards_mock.png';
import eslintConfigPhoto from '../../public/images/eslint_config_mock.png';
import { Project } from '../types/Project';

const projectsList: Project[] = [
    {
        name: 'Deck of Cards',
        photo: deckOfCardsPhoto,
        photoAlt:
            'The deck of cards application show a title, a new deck button, a new card button, and a queue of previously drawn cards.',
        description:
            'My family and I have a card game that we play that always requires a second deck. One deck to draw from, and one deck distributed amongst everyone. After a few times of playing this game I realized that we always had trouble locating a second deck of cards, and this drew me to build this application as the draw from deck. It allows us to always have a second deck as long as there is a phone, with the added bonus of being able to reference the order of drawn cards. It was a simple life problem, but one that I learned a lot while solving.',
        links: {
            github: 'https://github.com/sandricoprovo/deckofcards',
            external: 'https://candy-game-deck.netlify.app/',
        },
        stack: ['React', 'TypeScript', 'NextJS', 'JavaScript', 'CSS'],
        shouldFeature: true,
    },
    {
        name: 'ESLint Config',
        photo: eslintConfigPhoto,
        photoAlt: 'The npmjs page for my eslint config package.',
        description:
            'Once I had learned enough to understand what ESlint & Prettier do, I found myself using it in all of my projects to make my writing more consistent. However, I found I was doing a copy-paste of the configuration with each new project. To solve that issue, I created this package so I could have an easily accessible package I could grab. Having this package also makes distributing updates quick and easy across projects that use this.',
        links: {
            github: 'https://github.com/sandricoprovo/eslint-config-sandricoprovo',
            external:
                'https://www.npmjs.com/package/eslint-config-sandricoprovo',
        },
        stack: ['ESLint', 'Prettier', 'TypeScript', 'JavaScript'],
        shouldFeature: true,
    },
];

export { projectsList };
