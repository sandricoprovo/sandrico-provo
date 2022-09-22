import styled from 'styled-components';

const SVGContainer = styled.svg`
    /* P */
    & > g > g > path:nth-child(1) {
        transition: transform 0.22s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    }
    /* S */
    & > g > g > path:nth-child(2) {
        transition: transform 0.22s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    }

    @media (hover: hover) {
        &:hover {
            & > g > g > path:nth-child(1) {
                transform: translate(20px, -145px);
            }
            & > g > g > path:nth-child(2) {
                transform: translate(-20px, 145px);
            }
        }
    }
`;

export function LogoContainer({ children }: any) {
    return (
        <SVGContainer
            width="48px"
            height="48px"
            viewBox="0 0 85 80"
            xmlns="http://www.w3.org/2000/svg"
        >
            {children}
        </SVGContainer>
    );
}