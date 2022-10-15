import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { ArrowRightIcon } from '../Shared/Icons';

const GoToBase = styled.a`
    color: var(--clr-text);
    text-decoration: none;
    font-size: var(--font-base);
    position: relative;
`;

const GoToInternal = styled(GoToBase)`
    &::before {
        content: '';
        position: absolute;
        width: 0%;
        height: 1px;
        bottom: -40%;
        left: 0;
        background-color: var(--clr-text);
        transition: width 0.3s cubic-bezier(0.79, 0.14, 0.15, 0.86);
    }

    @media (hover: hover) {
        cursor: pointer;

        &:hover::before {
            width: 100%;
        }

        &:hover > svg,
        &:focus > svg {
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

const GoToExternal = styled(GoToBase)`
    display: flex;
    align-items: center;
    gap: 8px;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: -40%;
        left: 0;
        background-color: var(--clr-text);
        transition: transform 0.3s cubic-bezier(0.79, 0.14, 0.15, 0.86);
    }

    @media (hover: hover) {
        &:hover::before {
            transform: translateY(4px);
        }
    }
`;

interface GoToBtnProps {
    label: string;
    href: string;
    isExternal?: boolean;
}

export function GoToBtn({ href, isExternal = false, label }: GoToBtnProps) {
    const internalGoToBtn = (
        <Link href={href} title={label} passHref>
            <GoToInternal tabIndex={0}>
                {label} <ArrowRightIcon title={label} size={16} />
            </GoToInternal>
        </Link>
    );

    const externalGoToBtn = (
        <GoToExternal
            tabIndex={0}
            title={label}
            href={href}
            rel="noopener noreferrer"
            target="_blank"
        >
            {label}
        </GoToExternal>
    );

    return !isExternal ? internalGoToBtn : externalGoToBtn;
}
