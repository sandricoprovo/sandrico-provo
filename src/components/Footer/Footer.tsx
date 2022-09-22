import styled from 'styled-components';

const FooterStyled = styled.footer`
    padding: 0 var(--spacing-content-mobile);

    @media (min-width: 575px) {
        padding: 0 var(--spacing-content);
    }
`;

export function Footer() {
    return (
        <FooterStyled>
            <p>Footer</p>
        </FooterStyled>
    );
}
