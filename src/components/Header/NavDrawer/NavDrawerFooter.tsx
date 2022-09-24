import React from 'react';
import styled from 'styled-components';

import { TwitterIcon, GitHubIcon, LinkedinIcon } from '../../Shared/Icons';

const NavDrawerFooterStyled = styled.div`
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
        <NavDrawerFooterStyled>
            <div>
                <p>
                    Based In <br />
                    Nova Scotia, Canada
                </p>
                <p>Local Time:</p>
            </div>
            <div>
                <TwitterIcon title="Twitter" href="https://google.com" />
                <GitHubIcon title="GitHub" href="https://google.com" />
                <LinkedinIcon title="LinkedIn" href="https://google.com" />
            </div>
        </NavDrawerFooterStyled>
    );
}
