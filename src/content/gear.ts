import setupPhoto from '../../public/images/setup-1.jpeg';
import { Gear } from '../types/gear';

const gear: Gear = {
    photo: {
        src: setupPhoto,
        alt: 'My home office desk with all of the gear I use to stay productive everyday.',
    },
    list: [
        {
            label: 'HardWare',
            list: [
                '2018 MacBook Pro w/Touch Bar',
                'Keychron V1 Mechanical Keyboard',
                "32' Samsung 4k Monitor",
                'CalDigit T3 Plus',
                'Blue Yeti Mic',
                'Blue Yeti Radius 3 Shock Mount',
                'Samson Boom Arm',
                'Logitech StreamCam',
                'Quntis Monitor Light',
                'Vaydeer Desk Shelf',
                'Amazon Monitor Arm',
                'Vivo Monitor Arm + Laptop Tray',
                'Sony XM4 Headphones',
                'Ikea Saljan 72" Table Top',
                'Flexi Spot Desk Legs',
                'Wayfair High Stool Chair',
                'VIJIM LS02 Camera Desk Mount Stand',
                'Delta Hub Wrist Rest',
                'Logitech MX Master 3 Mouse',
            ],
        },
        {
            label: 'Software',
            list: [
                'Visual Studio Code + Material PaleNight Theme',
                'Dank Mono Font',
                'iTerm2 / Warp',
                'Things 3',
                'Notion',
                'Figma',
                'Affinity Serif Suite',
                'Arc Browser / Chrome',
                'Fig',
                'Raycast',
                'Starship Terminal Prompt',
            ],
        },
    ],
};

export { gear };
