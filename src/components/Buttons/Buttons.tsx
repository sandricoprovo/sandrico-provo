import { ArrowRightIcon } from '../Icons';

import { ContactButton } from './styles';

const contactBtnVariant = {
    rest: { y: 0 },
    hover: {
        y: [0, 5, -5, 0],
        transition: {
            duration: 0.8,
        },
    },
};

export function ContactBtn() {
    return (
        <ContactButton
            initial="rest"
            whileHover="hover"
            variants={contactBtnVariant}
        >
            Get In Touch <ArrowRightIcon size="2rem" />
        </ContactButton>
    );
}
