import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { TwitterIcon, GitHubIcon, LinkedinIcon } from '../../Shared/Icons';

const NavDrawerFooterStyled = styled(motion.div)`
    display: flex;
    justify-content: space-between;

    & > div:nth-child(1) {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        gap: 1rem;
    }

    & > div:nth-child(2) {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        align-items: flex-end;
        gap: 1.5rem;
    }
`;

export function NavDrawerFooter() {
    return (
        <NavDrawerFooterStyled
            initial={{ opacity: 0, x: -50 }}
            animate={{
                opacity: 1,
                x: 0,
                transition: {
                    delay: 0.7,
                    duration: 0.2,
                    ease: [0.65, 0.05, 0.36, 1],
                },
            }}
            exit={{
                opacity: 0,
                x: -50,
                transition: {
                    delay: 0.7,
                    duration: 0.2,
                    ease: [0.65, 0.05, 0.36, 1],
                },
            }}
        >
            <div>
                <p>
                    Based In <br />
                    Nova Scotia, Canada
                </p>
                <p>Local Time:</p>
            </div>
            <div>
                <TwitterIcon title="Twitter" href="https://google.com" />
                <GitHubIcon title="GitHub" />
                <LinkedinIcon title="LinkedIn" />
            </div>
        </NavDrawerFooterStyled>
    );
}
