import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Header } from '../Header';

import { Page } from './Page';

const LayoutStyled = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: var(--clr-background);
    padding-inline: var(--spg-padding-inline);

    color: var(--clr-text);
`;

interface LayoutProps {
    children: ReactNode | ReactNode[];
}

export function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <LayoutStyled>
                <Page>{children}</Page>
            </LayoutStyled>
            <footer />
        </>
    );
}