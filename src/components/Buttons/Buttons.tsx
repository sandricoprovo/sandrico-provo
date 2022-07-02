import Link from 'next/link';

import { ArrowRightIcon, SendIcon } from '../Icons';

import { ContactButton, SubmitButton } from './styles';

const contactBtnVariant = {
    rest: { y: 0 },
    hover: {
        y: [0, 5, -5, 0],
        transition: {
            duration: 0.8,
        },
    },
};

interface BaseButtonProps {
    onClick?: () => void;
}

export function ContactBtn() {
    return (
        <ContactButton
            initial="rest"
            whileHover="hover"
            variants={contactBtnVariant}
        >
            <Link href="/contact">
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                    }}
                >
                    Get In Touch <ArrowRightIcon size="2rem" />
                </div>
            </Link>
        </ContactButton>
    );
}

interface SubmitBtnProps extends BaseButtonProps {
    formId: string;
    cta?: string;
}
export function SubmitBtn({ formId, cta, onClick }: SubmitBtnProps) {
    return (
        <SubmitButton form={formId} type="submit" onClick={onClick}>
            {cta ?? 'Get In Touch'}
            <SendIcon size="1.5rem" />
        </SubmitButton>
    );
}
