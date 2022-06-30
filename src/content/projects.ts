import { Project } from '../types/Project';
import ESLPC_IMAGE from '../../public/images/eslpc.png';
import DOC_IMAGE from '../../public/images/doc.png';

export const projects: Project[] = [
    {
        index: 0,
        key: 'eslp-config',
        name: 'ESLint + Prettier Config',
        techStack: ['ESLint', 'Prettier', 'TypeScript', 'npmJS'],
        description:
            'Once I had learned enough to understand what ESlint & Prettier do, I found myself using it in all of my projects to make my writing more consistent. However, I found I was doing a copy-paste of the configuration with each new project. To solve that issue, I created this package so I could have an easily accessible package I could grab. Having this package also makes distributing updates quick and easy across projects that use this.',
        links: {
            external:
                'https://www.npmjs.com/package/eslint-config-sandricoprovo',
            github: 'https://github.com/sandricoprovo/eslint-config-sandricoprovo',
        },
        image: {
            src: ESLPC_IMAGE.src,
            alt: '',
            blurUrl: ESLPC_IMAGE.blurDataURL,
        },
    },
    {
        index: 1,
        key: 'deck-of-cards',
        name: 'Deck of Cards',
        techStack: ['React', 'Styled Components', 'TypeScript', 'SnowPack'],
        description:
            'My family and I have a card game that we play that always requires a second deck. One deck to draw from, and one deck distributed amongst everyone. After a few times of playing this game I realized that we always had trouble locating a second deck of cards, and this drew me to build this application as the draw from deck. It allows us to always have a second deck as long as there is a phone, with the added bonus of being able to reference the order of drawn cards. It was a simple life problem, but one that I learned a lot while solving.',
        links: {
            external: 'https://candy-game-deck.netlify.app/',
            github: 'https://github.com/sandricoprovo/deckofcards',
        },
        image: {
            src: DOC_IMAGE.src,
            alt: '',
            blurUrl: DOC_IMAGE.blurDataURL,
        },
    },
];
