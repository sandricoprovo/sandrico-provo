import styled from 'styled-components';

const FooterStyled = styled.footer`
    width: 100%;
    max-width: var(--spacing-page-max);
`;

export function Footer() {
    return (
        <FooterStyled>
            <p>Footer</p>
        </FooterStyled>
    );
}
