import React from 'react';
import styled from 'styled-components';

const NavDrawerFooterStyled = styled.div`
    display: flex;
    justify-content: space-between;

    & > div {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        gap: 1rem;
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
            <div>Socials</div>
        </NavDrawerFooterStyled>
    );
}
