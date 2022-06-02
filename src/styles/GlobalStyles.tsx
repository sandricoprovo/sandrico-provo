import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        // White
        --clr-white-60: hsla(0,0%,100%,1);
        --clr-white-70: hsla(0,0%,83.1%,1);
        --clr-white-80: hsla(0,0%,66.7%,1);
        --clr-white-90: hsla(0,0%,50.2%,1);
        --clr-white-100: hsla(0,0%,33.3%,1);
        --clr-white-110: hsla(0,0%,20%,1);
        // Yellow
        --clr-yellow-10: hsla(52,100%,93.9%,1);
        --clr-yellow-20: hsla(53,100%,90%,1);
        --clr-yellow-30: hsla(53,100%,84.9%,1);
        --clr-yellow-40: hsla(53,100%,80%,1);
        --clr-yellow-50: hsla(53,100%,75.1%,1);
        --clr-yellow-60: hsla(53,100%,70%,1);
        --clr-yellow-70: hsla(53,59.6%,58.2%,1);
        --clr-yellow-80: hsla(53,42.9%,46.7%,1);
        --clr-yellow-90: hsla(53,43%,35.1%,1);
        --clr-yellow-100: hsla(53,42.9%,23.3%,1);
        --clr-yellow-110: hsla(52,43.7%,13.9%,1);
        // Pastel Blue
        --clr-pastelblue-10: hsla(205,33.3%,88.8%,1);
        --clr-pastelblue-20: hsla(204,34%,81.6%,1);
        --clr-pastelblue-30: hsla(205,33.8%,72.2%,1);
        --clr-pastelblue-40: hsla(205,33.3%,62.9%,1);
        --clr-pastelblue-50: hsla(205,33.6%,53.9%,1);
	    --clr-pastelblue-60: hsla(205,41.9%,44.5%,1);
	    --clr-pastelblue-70: hsla(204,41.8%,37.1%,1);
	    --clr-pastelblue-80: hsla(205,41.7%,29.6%,1);
	    --clr-pastelblue-90: hsla(205,42.1%,22.4%,1);
	    --clr-pastelblue-100: hsla(204,42.1%,14.9%,1);
	    --clr-pastelblue-110: hsla(205,42.2%,8.8%,1);
        // Sky Blue
        --clr-skyblue-10: hsla(202,64.7%,96.7%,1);
        --clr-skyblue-20: hsla(200,64.3%,94.5%,1);
        --clr-skyblue-30: hsla(201,61.9%,91.8%,1);
        --clr-skyblue-40: hsla(201,63.6%,89.2%,1);
        --clr-skyblue-50: hsla(200,62.9%,86.3%,1);
        --clr-skyblue-60: hsla(200,63.9%,83.7%,1);
        --clr-skyblue-70: hsla(200,28.6%,69.8%,1);
        --clr-skyblue-80: hsla(201,15.6%,55.9%,1);
        --clr-skyblue-90: hsla(201,12.1%,42%,1);
        --clr-skyblue-100: hsla(200,12.7%,27.8%,1);
        --clr-skyblue-110: hsla(202,12.9%,16.7%,1);
        // Black
    	--clr-black-20: hsla(0,0%,70.6%,1);
    	--clr-black-30: hsla(0,0%,56.1%,1);
    	--clr-black-40: hsla(0,0%,41.6%,1);
    	--clr-black-50: hsla(0,0%,26.7%,1);
    	--clr-black-60: hsla(0,0%,12.2%,1);
    	--clr-black-70: hsla(0,0%,10.2%,1);
    	--clr-black-80: hsla(0,0%,8.2%,1);
    	--clr-black-90: hsla(0,0%,6.3%,1);
    	--clr-black-100: hsla(0,0%,3.9%,1);
    	--clr-black-110: hsla(0,0%,2.4%,1);
    }

    // Text Utils
    .text-style-montserrat-127-88-px-7-993-rem {
    	font-size:7.992rem;
    	font-family:"Montserrat";
    	font-weight:900;
    	font-style:normal;
    	text-decoration:none;
    }

    .text-style-montserrat-90-44-px-5-653-rem {
    	font-size:5.653rem;
    	font-family:"Montserrat";
    	font-weight:900;
    	font-style:normal;
    	text-decoration:none;
    }

    .text-style-montserrat-63-96-px-3-998-rem {
    	font-size:3.997rem;
    	font-family:"Montserrat";
    	font-weight:900;
    	font-style:normal;
    	text-decoration:none;
    }

    .text-style-montserrat-45-23-px-2-827-rem {
    	font-size:2.827rem;
    	font-family:"Montserrat";
    	font-weight:900;
    	font-style:normal;
    	text-decoration:none;
    }

    .text-style-montserrat-31-99-px-1-999-rem {
    	font-size:1.999rem;
    	font-family:"Montserrat";
    	font-weight:900;
    	font-style:normal;
    	text-decoration:none;
    }

    .text-style-poppins-regular-90-44-px-5-653-rem {
    	font-size:5.653rem;
    	font-family:"Poppins";
    	font-weight:normal;
    	font-style:normal;
    	text-decoration:none;
    }

    .text-style-poppins-regular-45-23-px-2-827-rem {
    	font-size:2.827rem;
    	font-family:"Poppins";
    	font-weight:normal;
    	font-style:normal;
    	text-decoration:none;
    }

    .text-style-poppins-regular-31-99-px-1-999-rem {
    	font-size:1.999rem;
    	font-family:"Poppins";
    	font-weight:normal;
    	font-style:normal;
    	text-decoration:none;
    }

    .text-style-poppins-regular-22-62-px-1-414-rem {
    	font-size:1.414rem;
    	font-family:"Poppins";
    	font-weight:normal;
    	font-style:normal;
    	text-decoration:none;
    }

    .text-style-poppins-regular-16-px-1-rem {
    	font-size:1rem;
    	font-family:"Poppins";
    	font-weight:normal;
    	font-style:normal;
    	line-height:180%;
    	text-decoration:none;
    }

    .text-style-poppins-regular-11-32-px-0-707-rem {
    	font-size:0.707rem;
    	font-family:"Poppins";
    	font-weight:normal;
    	font-style:normal;
    	text-decoration:none;
    }

    .text-style-poppins-regular-8-px-0-5-rem {
    	font-size:0.5rem;
    	font-family:"Poppins";
    	font-weight:normal;
    	font-style:normal;
    	text-decoration:none;
    }

    .text-style-poppins-semi-bold-45-23-px-2-827-rem {
    	font-size:2.827rem;
    	font-family:"Poppins";
    	font-weight:bolder;
    	font-style:normal;
    	text-decoration:none;
    }

    .text-style-poppins-semi-bold-31-99-px-1-999-rem {
    	font-size:1.999rem;
    	font-family:"Poppins";
    	font-weight:bolder;
    	font-style:normal;
    	text-decoration:none;
    }
`;

export default GlobalStyle;
