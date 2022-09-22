import styled from 'styled-components';

const HeaderStyled = styled.header`
    padding: 0 var(--spacing-content);
`;

export function Header() {
    return (
        <HeaderStyled>
            <p>Header</p>
        </HeaderStyled>
    );
}
