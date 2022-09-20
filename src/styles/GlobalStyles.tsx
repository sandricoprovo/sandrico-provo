import { createGlobalStyle } from 'styled-components';

import { Reset } from './Reset';

export const GlobalStyles = createGlobalStyle`
    ${Reset}
    :root {
        /* === COLORS === */
        // green blue crayola
        --clr-gbc-hs: 205, 74%;
        --clr-gbc-l: 45%;
        --clr-gbc-100: hsla(206, 75%, 89%, 1);
        --clr-gbc-200: hsla(205, 73%, 72%, 1);
        --clr-gbc-300: hsla(205, 73%, 58%, 1);
        --clr-gbc-400: hsla(205, 74%, 45%, 1); // Main
        --clr-gbc-500: hsla(205, 73%, 35%, 1);
        --clr-gbc-600: hsla(205, 73%, 26%, 1);
        --clr-gbc-700: hsla(205, 73%, 26%, 1);
        --clr-gbc-800: hsla(205, 73%, 17%, 1);
        --clr-gbc-900: hsla(206, 73%, 9%, 1);
        // eerie black / grey scale
        --clr-eb-hs: 0, 0%;
        --clr-eb-l: 12%;
        --clr-white: hsla(0, 0%, 100%, 1);
        --clr-eb-100: hsla(0, 0%, 78%, 1);
        --clr-eb-200: hsla(0, 0%, 56%, 1);
        --clr-eb-300: hsla(0, 0%, 41%, 1);
        --clr-eb-400: hsla(0, 0%, 34%, 1);
        --clr-eb-500: hsla(0, 0%, 26%, 1);
        --clr-eb-600: hsla(0, 0%, 12%, 1); // Main
        --clr-eb-700: hsla(0, 0%, 9%, 1);
        --clr-eb-800: hsla(0, 0%, 7%, 1);
        --clr-eb-900: hsla(0, 0%, 4%, 1);
        // maize crayola
        --clr-mc-hs: 46, 83%;
        --clr-mc-l: 60%;
        --clr-mc-100: hsla(46, 85%, 91%, 1);
        --clr-mc-200: hsla(45, 82%, 83%, 1);
        --clr-mc-300: hsla(46, 83%, 75%, 1);
        --clr-mc-400: hsla(45, 82%, 67%, 1);
        --clr-mc-500: hsla(46, 83%, 60%, 1); // Main
        --clr-mc-600: hsla(45, 83%, 47%, 1);
        --clr-mc-700: hsla(45, 83%, 35%, 1);
        --clr-mc-800: hsla(45, 83%, 23%, 1);
        --clr-mc-900: hsla(45, 83%, 11%, 1);
        // red salsa
        --clr-rs-hs: 1, 79%;
        --clr-rs-l: 60%;
        --clr-rs-100: hsla(1, 80%, 91%, 1);
        --clr-rs-200: hsla(0, 80%, 84%, 1);
        --clr-rs-300: hsla(1, 78%, 75%, 1);
        --clr-rs-400: hsla(0, 79%, 68%, 1);
        --clr-rs-500: hsla(1, 79%, 60%, 1); // Main
        --clr-rs-600: hsla(1, 79%, 48%, 1);
        --clr-rs-700: hsla(1, 79%, 36%, 1);
        --clr-rs-900: hsla(0, 78%, 24%, 1);
        --clr-rs-900: hsla(1, 80%, 11%, 1);
        // viridian
        --clr-viridian-hs: 151, 29%;
        --clr-viridian-l: 40%;
        --clr-viridian-100: hsla(151, 27%, 88%, 1);
        --clr-viridian-200: hsla(150, 29%, 76%, 1);
        --clr-viridian-300: hsla(150, 28%, 64%, 1);
        --clr-viridian-400: hsla(150, 28%, 52%, 1);
        --clr-viridian-500: hsla(151, 29%, 40%, 1);
        --clr-viridian-600: hsla(150, 29%, 32%, 1);
        --clr-viridian-700: hsla(150, 28%, 24%, 1);
        --clr-viridian-800: hsla(150, 29%, 16%, 1);
        --clr-viridian-900: hsla(152, 26%, 8%, 1);

        /* === TYPOGRAPHY === */
        /* === SPACING === */
    }

    /* === THEMES === */
`;
