import { createGlobalStyle } from 'styled-components';

import poppinsRegTtf from '../../public/fonts/Poppins-Regular.ttf';
import poppinsRegWoff from '../../public/fonts/Poppins-Regular.woff';
import poppinsRegWoff2 from '../../public/fonts/Poppins-Regular.woff2';
import poppinsSemiBoldTtf from '../../public/fonts/Poppins-SemiBold.ttf';
import poppinsSemiBoldWoff from '../../public/fonts/Poppins-SemiBold.woff';
import poppinsSemiBoldWoff2 from '../../public/fonts/Poppins-SemiBold.woff2';
import montserratBlackTtf from '../../public/fonts/Montserrat-Black.ttf';
import montserratBlackWoff from '../../public/fonts/Montserrat-Black.woff';
import montserratBlackWoff2 from '../../public/fonts/Montserrat-Black.woff2';

const Fonts = createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: url(${poppinsRegWoff2}) format('woff2'),
            url(${poppinsRegWoff}) format('woff'),
            url(${poppinsRegTtf}) format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Poppins-SemiBold';
        src: url(${poppinsSemiBoldWoff2}) format('woff2'),
            url(${poppinsSemiBoldWoff}) format('woff'),
            url(${poppinsSemiBoldTtf}) format('truetype');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url(${montserratBlackWoff2}) format('woff2'),
            url(${montserratBlackWoff}) format('woff'),
            url(${montserratBlackTtf}) format('truetype');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }
`;

export default Fonts;
