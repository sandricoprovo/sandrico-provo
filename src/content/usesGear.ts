import { UsesGear } from '../types/UsesGear';
import GEAR_IMAGE from '../../public/images/setup.jpeg';

export const usesGearImage = {
    src: GEAR_IMAGE.src,
    alt: '',
    blurUrl: GEAR_IMAGE.blurDataURL,
};

export const usesGear: UsesGear[] = [
    {
        category: 'Hardware',
        gear: [
            "2018 13' MacBook Pro w/ Touch Bar",
            "32' Samsung 4K Monitor",
            'Quantis Monitor Light Bar',
            'Flexispot Desk Legs',
            'Ikea Saljan Desk Top',
            '2x Vivo Monitor Arms',
            'Vivo Laptop Tray',
            'Vaydeer Desk Organizer',
            'Blue Yeti Microphone',
            'Blue Yeti Radius 3 Shock Mount',
            'Samson Boom Arm',
            'Sony XM4 Headphones',
            'Logitech Stream Cam',
            'Cal Digit TS3 Plus',
            'Logitech MX Keys',
            'Logitech MX Master 3',
            'Delta Hub Wrist Rest',
            'VIJIM LS02 Camera Desk Mount Stand',
        ],
    },
    {
        category: 'Software',
        gear: [
            'VS Code + Material Palenight Theme',
            'iTerm2 + Material Palenight Theme',
            'Fig',
            'Raycast',
            'Starship Terminal Prompt',
            'Notion',
            'Height App',
            'Fork Git Gui',
            'Affinity Serif Suite',
            'Figma',
            'Things 3',
        ],
    },
];
