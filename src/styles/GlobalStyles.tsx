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
        --font-base: 1rem;
        --font-scale-ratio: 1.333;
        // Raw Type Scale
        --scale-xs: calc(0.707 / var(--font-scale-ratio));
        --scale-sm: calc(1 / var(--font-scale-ratio));
        --scale-base: calc(var(--scale-sm) * var(--font-scale-ratio));
        --scale-md: calc(var(--scale-base) * var(--font-scale-ratio));
        --scale-lg: calc(var(--scale-md) * var(--font-scale-ratio));
        --scale-xl: calc(var(--scale-lg) * var(--font-scale-ratio));
        --scale-xxl: calc(var(--scale-xl) * var(--font-scale-ratio));
        --scale-xxxl: calc(var(--scale-xxl) * var(--font-scale-ratio));
        --scale-max: calc(var(--scale-xxxl) * var(--font-scale-ratio));
        // Clamped / Responsive Type Scale
        --font-xs: clamp(var(--scale-xs) * 0.25, 12vw + 1rem, var(--scale-xs) * 1rem);
        --font-sm: clamp(var(--scale-sm) * 0.25, 12vw + 1rem, var(--scale-sm) * 1rem);
        --font-md: clamp(var(--scale-md) * 0.25, 12vw + 1rem, var(--scale-md) * 1rem);
        --font-lg: clamp(var(--scale-lg) * 0.25 * 1rem, 12vw + 1rem, var(--scale-lg) * 1rem);
        --font-xl: clamp(var(--scale-xl) * 0.25, 12vw + 1rem, var(--scale-xl) * 1rem);
        --font-xxl: clamp(var(--scale-xxl) * 0.25, 12vw + 1rem, var(--scale-xxl) * 1rem);
        --font-xxxl: clamp(var(--scale-xxxl) * 0.25, 12vw + 1rem, var(--scale-xxxl) * 1rem);
        --font-max: clamp(var(--scale-max) * 0.25, 12vw + 1rem, var(--scale-max) * 1rem);
        // Montserrat
        --font-montserrat-50: var(--font-max)/var(--font-text-lh) var(--font-secondary), var(--font-fallback);
        --font-montserrat-40: var(--font-xxxl)/var(--font-text-lh) var(--font-secondary), var(--font-fallback);
        --font-montserrat-30: var(--font-xxl)/var(--font-text-lh) var(--font-secondary), var(--font-fallback);
        --font-montserrat-20: var(--font-xl)/var(--font-text-lh) var(--font-secondary), var(--font-fallback);
        --font-montserrat-10: var(--font-lg)/var(--font-text-lh) var(--font-secondary), var(--font-fallback);
        // Poppins
        --font-poppins-70: var(--font-xxl)/var(--font-text-lh) var(--font-primary), var(--font-fallback);
        --font-poppins-60: var(--font-xl)/var(--font-text-lh) var(--font-primary), var(--font-fallback);
        --font-poppins-50: var(--font-lg)/var(--font-text-lh) var(--font-primary), var(--font-fallback);
        --font-poppins-40: var(--font-md)/var(--font-text-lh) var(--font-primary), var(--font-fallback);
        --font-poppins-30: var(--font-base)/var(--font-text-lh) var(--font-primary), var(--font-fallback);
        --font-poppins-20: var(--font-sm)/var(--font-text-lh) var(--font-primary), var(--font-fallback);
        --font-poppins-10: var(--font-xs)/var(--font-text-lh) var(--font-primary), var(--font-fallback);
        // Poppins SemiBold
        --font-poppinsSb-70: var(--font-xxl)/var(--font-text-lh) var(--font-primary-sb), var(--font-fallback);
        --font-poppinsSb-60: var(--font-xl)/var(--font-text-lh) var(--font-primary-sb), var(--font-fallback);
        --font-poppinsSb-50: var(--font-lg)/var(--font-text-lh) var(--font-primary-sb), var(--font-fallback);
        --font-poppinsSb-40: var(--font-md)/var(--font-text-lh) var(--font-primary-sb), var(--font-fallback);
        --font-poppinsSb-30: var(--font-base)/var(--font-text-lh) var(--font-primary-sb), var(--font-fallback);
        --font-poppinsSb-20: var(--font-sm)/var(--font-text-lh) var(--font-primary-sb), var(--font-fallback);
        --font-poppinsSb-10: var(--font-xs)/var(--font-text-lh) var(--font-primary-sb);

        // Spacing
        --space-base: 0.64rem;
        --space-xm: calc(var(--space-base)/2);
        --space-sm: calc(var(--space-base)/2);
        --space-md: var(--space-base);
        --space-lg: calc(var(--space-base)*2);
        --space-xl: calc(var(--space-base)*3);

        // Elevation

        // Animation
        --underline-bezier: cubic-bezier(0.18, 0.89, 0.32, 1.27);
        --fadeUp-bezier: cubic-bezier(0.68, -0.55, 0.27, 1.55);

        // Media Queries
        @media (min-width: 500px) {
            --space-base: 2rem;
            --font-scale-ratio: 1.414;
        }
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
