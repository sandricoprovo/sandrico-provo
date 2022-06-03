import { createGlobalStyle } from 'styled-components';

const Fonts = createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: local("Poppins"), url('/fonts/Poppins-Regular.woff2') format('woff2'),
            url('/fonts/Poppins-Regular.woff') format('woff'),
            url('/fonts/Poppins-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Poppins-SemiBold';
        src: local("Poppins-SemiBold"), url('/fonts/Poppins-SemiBold.woff2') format('woff2'),
            url('/fonts/Poppins-SemiBold.woff') format('woff'),
            url('/fonts/Poppins-SemiBold.ttf') format('truetype');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Montserrat';
        src: local('Montserrat'), url('/fonts/Montserrat-Black.woff2') format('woff2'),
            url('/fonts/Montserrat-Black.woff') format('woff'),
            url('/fonts/Montserrat-Black.ttf') format('truetype');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }
`;

export default Fonts;
