import { createGlobalStyle } from 'styled-components';

export const Fonts = createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: url('/fonts/Poppins-Regular.woff2') format('woff2'),
            url('/fonts/Poppins-Regular.woff') format('woff'),
            url('/fonts/Poppins-Regular.ttf') format('truetype'),
            local("Poppins");
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Poppins-SemiBold';
        src: url('/fonts/Poppins-SemiBold.woff2') format('woff2'),
            url('/fonts/Poppins-SemiBold.woff') format('woff'),
            url('/fonts/Poppins-SemiBold.ttf') format('truetype'),
            local("Poppins-SemiBold");
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url('/fonts/Montserrat-Black.woff2') format('woff2'),
            url('/fonts/Montserrat-Black.woff') format('woff'),
            url('/fonts/Montserrat-Black.ttf') format('truetype'),
            local('Montserrat');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }
`;
