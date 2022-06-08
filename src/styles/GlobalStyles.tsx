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
        --fallback-fonts: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        --font-primary: "Poppins", var(--fallback-fonts);
        --font-primary-sb: "Poppins-SemiBold", var(--fallback-fonts);
        --font-secondary: "Montserrat", var(--fallback-fonts);
        --font-base: 1rem;
        --font-scale: 1.414;
        --font-min-scaler: 0.75;
        // Base Font Sizes
        --scale-400: var(--font-base);
        --scale-300: var(--scale-400) / var(--font-scale);
        --scale-200: var(--scale-300) / var(--font-scale);
        --scale-500: var(--scale-400) * var(--font-scale);
        --scale-600: var(--scale-500) * var(--font-scale);
        --scale-700: var(--scale-600) * var(--font-scale);
        --scale-800: var(--scale-700) * var(--font-scale);
        --scale-900: var(--scale-800) * var(--font-scale);
        --scale-max: var(--scale-900) * var(--font-scale);
        // Clamped font sizes
        --font-200: clamp(var(--scale-200) * var(--font-min-scaler), 12vw + 1rem, var(--scale-200));
        --font-300: clamp(var(--scale-300) * var(--font-min-scaler), 12vw + 1rem, var(--scale-300));
        --font-400: clamp(var(--scale-400) * var(--font-min-scaler), 12vw + 1rem, var(--scale-400));
        --font-500: clamp(var(--scale-500) * var(--font-min-scaler), 12vw + 1rem, var(--scale-500));
        --font-600: clamp(var(--scale-600) * var(--font-min-scaler), 12vw + 1rem, var(--scale-600));
        --font-700: clamp(var(--scale-700) * var(--font-min-scaler), 12vw + 1rem, var(--scale-700));
        --font-800: clamp(var(--scale-800) * var(--font-min-scaler), 12vw + 1rem, var(--scale-800));
        --font-900: clamp(var(--scale-900) * var(--font-min-scaler), 12vw + 1rem, var(--scale-900));
        --font-max: clamp(var(--scale-max) * var(--font-min-scaler), 12vw + 1rem, var(--scale-max));

        // Spacing
        --max-page-width: 1970px;
        --space-base: 2rem;
        --space-xm: calc(var(--space-base) / 2);
        --space-sm: calc(var(--space-base) / 2);
        --space-md: var(--space-base);
        --space-lg: calc(var(--space-base) * 2);
        --space-xl: calc(var(--space-base) * 3);
        --space-xxl: calc(var(--space-base) * 4);
        --space-xxxl: calc(var(--space-base) * 5);

        // Elevation

        // Animation
        --underline-bezier: cubic-bezier(0.18, 0.89, 0.32, 1.27);
        --fadeUp-bezier: cubic-bezier(0.68, -0.55, 0.27, 1.55);
        --drawerFadeIn: cubic-bezier(0.55, 0.08, 0.68, 0.53);

        // Media Queries
        @media (max-width: 700px) {
            --space-base: 0.64rem;
        }
    }

    .theme--light {
        --clr-text: var(--clr-black-60);
        --clr-text-faded: var(--clr-black-30);
        --clr-hover: var(--clr-pastelblue-60);
        --clr-background: var(--clr-white-60);
    }

    .theme--dark {
        --clr-text: var(--clr-white-60);
        --clr-text-faded: var(--clr-black-30);
        --clr-hover: var(--clr-pastelblue-60);
        --clr-background: var(--clr-black-60)
    }
`;
