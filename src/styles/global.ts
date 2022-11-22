import { createGlobalStyle } from 'styled-components';

import { Reset } from './reset';

export const GlobalStyles = createGlobalStyle`
    ${Reset}
    :root {
        /* === COLORS === */
        /* indigo-dye */
        --clr-id-900: hsla(210, 38.5%, 5.1%, 1);
        --clr-id-800: hsla(209, 41.2%, 10%, 1);
        --clr-id-700: hsla(212, 41%, 15.3%, 1);
        --clr-id-600: hsla(211, 41.7%, 20.2%, 1);
        --clr-id-500: hsla(211, 41.1%, 25.3%, 1);
        --clr-id-400: hsla(211, 21%, 40.2%, 1);
        --clr-id-300: hsla(212, 14%, 55.3%, 1);
        --clr-id-200: hsla(209, 13.7%, 70%, 1);
        --clr-id-100: hsla(210, 13.2%, 85.1%, 1);
        /* orange-yellow-crayola */
        --clr-oyc-900: hsla(42, 36.1%, 14.1%, 1);
        --clr-oyc-800: hsla(42, 36.1%, 28.2%, 1);
        --clr-oyc-700: hsla(42, 36.7%, 42.2%, 1);
        --clr-oyc-600: hsla(42, 47.1%, 56.3%, 1);
        --clr-oyc-500: hsla(42, 86.8%, 70.4%, 1);
        --clr-oyc-400: hsla(42, 86.8%, 76.3%, 1);
        --clr-oyc-300: hsla(42, 86.8%, 82.2%, 1);
        --clr-oyc-200: hsla(42, 86.7%, 88.2%, 1);
        --clr-oyc-100: hsla(42, 86.7%, 94.1%, 1);
        /* grayscale */
        --clr-gs-black: hsla(0, 0%, 0%, 1);
        --clr-gs-900: hsla(210, 14.3%, 5.5%, 1);
        --clr-gs-800: hsla(207, 16.4%, 10.8%, 1);
        --clr-gs-700: hsla(206, 16.7%, 16.5%, 1);
        --clr-gs-600: hsla(205, 17.1%, 21.8%, 1);
        --clr-gs-500: hsla(206, 16.5%, 27.3%, 1);
        --clr-gs-400: hsla(205, 8.9%, 41.8%, 1);
        --clr-gs-300: hsla(206, 6.3%, 56.5%, 1);
        --clr-gs-200: hsla(207, 6%, 70.8%, 1);
        --clr-gs-100: hsla(210, 5.4%, 85.5%, 1);
        --clr-gs-50: hsla(240, 4.3%, 95.5%, 1);
        --clr-gs-background: hsla(200, 100%, 99.4%, 1);
        --clr-gs-white: hsla(0, 0%, 100%, 1);

        /* === TYPOGRAPHY === */
        /* Base */
        --font-scale: 0.60;
        --font-xs: 0.707rem;
        --font-base: 1rem;
        --font-md: 1.125rem;
        --font-lg: 1.375rem;
        --font-xl: 2rem;
        --font-xxl: 2.812rem;
        --font-xxxl: 4rem;
        --font-xxxxl: 5.625rem;
        /* Clamps */
        --font-75: var(--font-xs);
        --font-100: var(--font-base);
        --font-200: clamp(calc(var(--font-md) * var(--font-scale)), 12vw, var(--font-md));
        --font-300: clamp(calc(var(--font-lg) * var(--font-scale)), 14vw, var(--font-lg));
        --font-400: clamp(calc(var(--font-xl) * var(--font-scale)), 15vw, var(--font-xl));
        --font-500: clamp(calc(var(--font-xxl) * var(--font-scale)), 15vw, var(--font-xxl));
        --font-600: clamp(calc(var(--font-xxxl) * var(--font-scale)), 12vw, var(--font-xxxl));
        --font-700: clamp(calc(var(--font-xxxxl) * var(--font-scale)), 12vw, var(--font-xxxxl));
        /* Families */
        --font-primary: 'Work Sans';
        --font-body: var(--font-100)/180% 'Work Sans';
        --font-subheader: 600 var(--font-300)/140% 'Work Sans';
        --font-header: bold var(--font-500)/120% 'Work Sans';

        /* === SPACING === */
        --spg-layout-max-width: 1200px;
        --spg-padding-block: 40px;
        --spg-padding-inline: clamp(16px, 4vw, 165px);
        --spg-section: clamp(104px, 8vw, 165px);
        --spg-links: 16px;

        /* === ELEVATION === */
        --shadow-bg-color: 0deg 0% 63%;
        --shadow-bg-100:
            0.3px 0.5px 0.7px hsl(var(--shadow-bg-color) / 0.34),
            0.4px 0.8px 1px -1.2px hsl(var(--shadow-bg-color) / 0.34),
            1px 2px 2.5px -2.5px hsl(var(--shadow-bg-color) / 0.34);
        --shadow-bg-200:
            0.3px 0.5px 0.7px hsl(var(--shadow-bg-color) / 0.36),
            0.8px 1.6px 2px -0.8px hsl(var(--shadow-bg-color) / 0.36),
            2.1px 4.1px 5.2px -1.7px hsl(var(--shadow-bg-color) / 0.36),
            5px 10px 12.6px -2.5px hsl(var(--shadow-bg-color) / 0.36);
        --shadow-bg-300:
            0.3px 0.5px 0.7px hsl(var(--shadow-bg-color) / 0.34),
            1.5px 2.9px 3.7px -0.4px hsl(var(--shadow-bg-color) / 0.34),
            2.7px 5.4px 6.8px -0.7px hsl(var(--shadow-bg-color) / 0.34),
            4.5px 8.9px 11.2px -1.1px hsl(var(--shadow-bg-color) / 0.34),
            7.1px 14.3px 18px -1.4px hsl(var(--shadow-bg-color) / 0.34),
            11.2px 22.3px 28.1px -1.8px hsl(var(--shadow-bg-color) / 0.34),
            17px 33.9px 42.7px -2.1px hsl(var(--shadow-bg-color) / 0.34),
            25px 50px 62.9px -2.5px hsl(var(--shadow-bg-color) / 0.34);
        --shadow-main-color: 0deg 0% 0%;
        --shadow-main-100:
            0.3px 0.5px 0.7px hsl(var(--shadow-main-color) / 0.1),
            0.4px 0.8px 1px -1.2px hsl(var(--shadow-main-color) / 0.1),
            1px 2px 2.5px -2.5px hsl(var(--shadow-main-color) / 0.1);
        --shadow-main-200:
            0.3px 0.5px 0.7px hsl(var(--shadow-main-color) / 0.11),
            0.8px 1.6px 2px -0.8px hsl(var(--shadow-main-color) / 0.11),
            2.1px 4.1px 5.2px -1.7px hsl(var(--shadow-main-color) / 0.11),
            5px 10px 12.6px -2.5px hsl(var(--shadow-main-color) / 0.11);
        --shadow-main-300:
            0.3px 0.5px 0.7px hsl(var(--shadow-main-color) / 0.1),
            1.5px 2.9px 3.7px -0.4px hsl(var(--shadow-main-color) / 0.1),
            2.7px 5.4px 6.8px -0.7px hsl(var(--shadow-main-color) / 0.1),
            4.5px 8.9px 11.2px -1.1px hsl(var(--shadow-main-color) / 0.1),
            7.1px 14.3px 18px -1.4px hsl(var(--shadow-main-color) / 0.1),
            11.2px 22.3px 28.1px -1.8px hsl(var(--shadow-main-color) / 0.1),
            17px 33.9px 42.7px -2.1px hsl(var(--shadow-main-color) / 0.1),
            25px 50px 62.9px -2.5px hsl(var(--shadow-main-color) / 0.1);

        /* === TRANSITIONS & ANIMATIONS */
        --easing-hover: cubic-bezier(0.65,0.05,0.36,1);
    }

    .theme--default {
        --clr-background: var(--clr-gs-900);
        --clr-text-header: var(--clr-gs-background);
        --clr-text: var(--clr-gs-300);
        --clr-icon: var(--clr-text);
        --clr-icon-hover: var(--clr-text-header);
        --clr-accent: var(--clr-oyc-500);
        --clr-project-img-background: var(--clr-gs-800);
    }

    html {
        background-color: var(--clr-background);
    }
`;
