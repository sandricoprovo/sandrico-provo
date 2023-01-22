import React, { ReactNode } from 'react';
import styled from 'styled-components';

import RefsContextProvider from '../../contexts/refsContext';
import { Footer } from '../footer/Footer';
import { Header } from '../Header';

import { Page } from './Page';

const LayoutStyled = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: var(--clr-background);
    padding-inline: var(--spg-padding-inline);
    color: var(--clr-text);

    display: flex;
    flex-direction: column;
    gap: var(--spg-section);
`;

interface LayoutProps {
    children: ReactNode | ReactNode[];
}

export function Layout({ children }: LayoutProps) {
    return (
        <RefsContextProvider>
            <LayoutStyled>
                <Header />
                <Page>{children}</Page>
                <Footer />
            </LayoutStyled>
        </RefsContextProvider>
    );
}
