import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        // Base Colors
        --clr-white-60: hsla(0,0%,100%,1);
        --clr-white-70: hsla(0,0%,83%,1);
        --clr-white-80: hsla(0,0%,66%,1);
        --clr-white-90: hsla(0,0%,50%,1);
        --clr-white-100: hsla(0,0%,33%,1);
        --clr-white-110: hsla(0,0%,20%,1);
        --clr-yellow-10: hsla(52,100%,93%,1);
        --clr-yellow-20: hsla(53,100%,90%,1);
        --clr-yellow-30: hsla(53,100%,84%,1);
        --clr-yellow-40: hsla(53,100%,80%,1);
        --clr-yellow-50: hsla(53,100%,75%,1);
        --clr-yellow-60: hsla(53,100%,70%,1);
        --clr-yellow-70: hsla(53,59%,58%,1);
        --clr-yellow-80: hsla(53,42%,46%,1);
        --clr-yellow-90: hsla(53,43%,35%,1);
        --clr-yellow-100: hsla(53,42%,23%,1);
        --clr-yellow-110: hsla(52,43%,13%,1);
        --clr-pastelblue-10: hsla(205,33%,88%,1);
        --clr-pastelblue-20: hsla(204,34%,81%,1);
        --clr-pastelblue-30: hsla(205,33%,72%,1);
        --clr-pastelblue-40: hsla(205,33%,62%,1);
        --clr-pastelblue-50: hsla(205,33%,53%,1);
	    --clr-pastelblue-60: hsla(205,41%,44%,1);
	    --clr-pastelblue-70: hsla(204,41%,37%,1);
	    --clr-pastelblue-80: hsla(205,41%,29%,1);
	    --clr-pastelblue-90: hsla(205,42%,22%,1);
	    --clr-pastelblue-100: hsla(204,42%,14%,1);
	    --clr-pastelblue-110: hsla(205,42%,8%,1);
        --clr-skyblue-10: hsla(202,64%,96%,1);
        --clr-skyblue-20: hsla(200,64%,94%,1);
        --clr-skyblue-30: hsla(201,61%,91%,1);
        --clr-skyblue-40: hsla(201,63%,89%,1);
        --clr-skyblue-50: hsla(200,62%,86%,1);
        --clr-skyblue-60: hsla(200,63%,83%,1);
        --clr-skyblue-70: hsla(200,28%,69%,1);
        --clr-skyblue-80: hsla(201,15%,55%,1);
        --clr-skyblue-90: hsla(201,12%,42%,1);
        --clr-skyblue-100: hsla(200,12%,27%,1);
        --clr-skyblue-110: hsla(202, 12%, 16%, 1);
    	--clr-black-20: hsla(0,0%,70%,1);
    	--clr-black-30: hsla(0,0%,56%,1);
    	--clr-black-40: hsla(0,0%,41%,1);
    	--clr-black-50: hsla(0,0%,26%,1);
    	--clr-black-60: hsla(0,0%,12%,1);
    	--clr-black-70: hsla(0,0%,10%,1);
    	--clr-black-80: hsla(0,0%,8%,1);
    	--clr-black-90: hsla(0,0%,6%,1);
    	--clr-black-100: hsla(0,0%,3%,1);
    	--clr-black-110: hsla(0,0%,2%,1);

        // Type Scale
        --font-primary: "Poppins";
        --font-primary-sb: "Poppins-SemiBold";
        --font-secondary: "Montserrat";
        --font-fallback: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        --font-text-lh: 180%;
        --font-scale-ratio: 1.414;
        --font-base: 1rem;
        --font-xs: calc(1rem / (var(--font-scale-ratio) * var(--font-scale-ratio))); // 0.5rem
        --font-sm: calc(1rem / var(--font-scale-ratio)); // 0.707rem
        --font-md: calc(1rem * var(--font-scale-ratio)); // 1.414rem
        --font-lg: calc(1rem * (var(--font-scale-ratio) * var(--font-scale-ratio))); // 1.999rem
        --font-xl: calc(
            1rem * (var(--font-scale-ratio) * var(--font-scale-ratio) * var(--font-scale-ratio))
        ); // 2.827rem
        --font-xxl: calc(
            1rem * (var(--font-scale-ratio) * var(--font-scale-ratio) * var(--font-scale-ratio) * var(--font-scale-ratio))
        ); // 3.998rem
        --font-xxxl: calc(
            1rem * (var(--font-scale-ratio) * var(--font-scale-ratio) * var(--font-scale-ratio) * var(--font-scale-ratio)) * var(--font-scale-ratio)
        ); // 5.653rem
        --font-max: calc(
            1rem * (var(--font-scale-ratio) * var(--font-scale-ratio) * var(--font-scale-ratio) * var(--font-scale-ratio)) * var(--font-scale-ratio) * var(--font-scale-ratio)
        ); // 7.992rem

        --font-montserrat-50: var(--font-max)/var(--font-text-lh) var(--font-secondary), var(--font-fallback);
        --font-montserrat-40: var(--font-xxxl)/var(--font-text-lh) var(--font-secondary), var(--font-fallback);
        --font-montserrat-30: var(--font-xxl)/var(--font-text-lh) var(--font-secondary), var(--font-fallback);
        --font-montserrat-20: var(--font-xl)/var(--font-text-lh) var(--font-secondary), var(--font-fallback);
        --font-montserrat-10: var(--font-lg)/var(--font-text-lh) var(--font-secondary), var(--font-fallback);

        --font-poppins-70: var(--font-xxl)/var(--font-text-lh) var(--font-primary), var(--font-fallback);
        --font-poppins-60: var(--font-xl)/var(--font-text-lh) var(--font-primary), var(--font-fallback);
        --font-poppins-50: var(--font-lg)/var(--font-text-lh) var(--font-primary), var(--font-fallback);
        --font-poppins-40: var(--font-md)/var(--font-text-lh) var(--font-primary), var(--font-fallback);
        --font-poppins-30: var(--font-base)/var(--font-text-lh) var(--font-primary), var(--font-fallback);
        --font-poppins-20: var(--font-sm)/var(--font-text-lh) var(--font-primary), var(--font-fallback);
        --font-poppins-10: var(--font-xm)/var(--font-text-lh) var(--font-primary), var(--font-fallback);

        --font-poppinsSb-70: var(--font-xxl)/var(--font-text-lh) var(--font-primary-sb), var(--font-fallback);
        --font-poppinsSb-60: var(--font-xl)/var(--font-text-lh) var(--font-primary-sb), var(--font-fallback);
        --font-poppinsSb-50: var(--font-lg)/var(--font-text-lh) var(--font-primary-sb), var(--font-fallback);
        --font-poppinsSb-40: var(--font-md)/var(--font-text-lh) var(--font-primary-sb), var(--font-fallback);
        --font-poppinsSb-30: var(--font-base)/var(--font-text-lh) var(--font-primary-sb), var(--font-fallback);
        --font-poppinsSb-20: var(--font-sm)/var(--font-text-lh) var(--font-primary-sb), var(--font-fallback);
        --font-poppinsSb-10: var(--font-xm)/var(--font-text-lh) var(--font-primary-sb);

        // Spacing
        --space-base: 32px;
        --space-xm: calc(var(--space-base)/2);
        --space-sm: calc(var(--space-base)/2);
        --space-md: var(--space-base);
        --space-lg: calc(var(--space-base)*2);
        --space-xl: calc(var(--space-base)*3);

        // Elevation

        // Animation
        --underline-bezier: cubic-bezier(0.18, 0.89, 0.32, 1.27);
    }

    .theme--light {
        --clr-text: var(--clr-black-60);
        --clr-text-faded: var(--clr-black-30);
        --clr-hover: var(--clr-pastelblue-60);
    }

    .theme--dark {
        --clr-text: var(--clr-white-60);
        --clr-text-faded: var(--clr-black-30);
        --clr-hover: var(--clr-pastelblue-60);
    }
`;
