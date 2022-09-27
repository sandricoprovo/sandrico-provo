import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { ArrowRightIcon, ExternalLinkIcon } from '../Shared/Icons';

const GoToBase = styled.a`
    color: var(--clr-text);
    text-decoration: none;
    font-size: var(--font-base);
    position: relative;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;

    &::before {
        content: '';
        position: absolute;
        width: 0%;
        height: 2px;
        bottom: -12%;
        left: 0;
        background-color: var(--clr-text);
        transition: width 0.3s cubic-bezier(0.79, 0.14, 0.15, 0.86);
    }

    @media (hover: hover) {
        cursor: pointer;

        &:hover::before {
            width: 100%;
        }

        &:hover > svg {
            animation-name: rightArrowPoint;
            animation-duration: 0.6s;
            animation-timing-function: cubic-bezier(0.79, 0.14, 0.15, 0.86);
            animation-direction: alternate;
            animation-iteration-count: infinite;
        }
    }

    @keyframes rightArrowPoint {
        from {
            transform: translateX(0px);
        }
        to {
            transform: translateX(16px);
        }
    }
`;

const GoToInternal = styled(GoToBase)``;
const GoToExternal = styled(GoToBase)``;

interface GoToBtnProps {
    label: string;
    href: string;
    isExternal?: boolean;
}

export function GoToBtn({ href, isExternal = false, label }: GoToBtnProps) {
    const internalGoToBtn = (
        <Link href={href}>
            <GoToInternal>
                {label} <ArrowRightIcon title={label} size={16} />
            </GoToInternal>
        </Link>
    );

    const externalGoToBtn = (
        <GoToExternal>
            {label} <ExternalLinkIcon title={label} />
        </GoToExternal>
    );

    return !isExternal ? internalGoToBtn : externalGoToBtn;
}