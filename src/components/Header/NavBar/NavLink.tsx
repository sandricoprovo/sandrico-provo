import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const LinkItem = styled.div`
    height: 30px;
    text-decoration: none;

    display: flex;
    align-items: center;

    /* All child hover effects fire when parent is hovered */
    @media (hover: hover) {
        &:hover {
            & > * {
                cursor: pointer;
            }

            & > span > li {
                transform: translateY(-18px);
            }

            & > span > li > a:nth-child(1) {
                transform: rotate(20deg);
            }

            & > span > li > a:nth-child(2) {
                transform: rotate(0);
            }
        }
    }
`;

const AnimationMask = styled.span`
    position: relative;
    padding: 0;
    height: 20px;
    /* This line is what hides the bottom link */
    overflow: hidden;
`;

// NOTES: Both below transitions are need and must match to move li & child
// a tags in unison.
const NavLinkStyled = styled.li`
    list-style: none;
    transition: transform 0.5s cubic-bezier(0.86, 0, 0.07, 1);

    /* This is the default styling for the links */
    & > a {
        color: var(--clr-text);
        text-decoration: none;
        display: block;
        transition: transform 0.5s cubic-bezier(0.86, 0, 0.07, 1);
    }

    & > a:nth-child(1) {
        transform-origin: right center;
    }

    & > a:nth-child(2) {
        color: var(--clr-text);
        font-family: var(--font-display);
        transform-origin: left center;
        transform: rotate(20deg);
    }
`;

interface NavLinkProps {
    href: string;
    label: string;
}

export const NavLink = ({ href, label }: NavLinkProps) => (
    <LinkItem>
        <AnimationMask>
            <NavLinkStyled>
                {/* Link viewed not hovering */}
                <Link href={href} passHref>
                    <a className="body">{label}</a>
                </Link>
                {/* Link viewed while hovering */}
                <Link tabIndex={-1} href={href} passHref>
                    <a tabIndex={-1} className="body">
                        {label}
                    </a>
                </Link>
            </NavLinkStyled>
        </AnimationMask>
    </LinkItem>
);
