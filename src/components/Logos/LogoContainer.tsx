import styled from 'styled-components';

const SVGContainer = styled.svg`
    width: 64px;
    height: 64px;
    padding-top: 1rem;
    opacity: 0;
    margin-left: -6px;

    animation-name: fadeIn;
    animation-duration: 0.3s;
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    animation-delay: 0.3s;
    animation-fill-mode: forwards;

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

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(8px);
        }
        to {
            opacity: 1;
            transform: translateY(0px);
        }
    }
`;

export function LogoContainer({ children }: { children: any }) {
    return (
        <SVGContainer
            name="Slanted S Logo"
            width="48px"
            height="48px"
            viewBox="0 0 85 80"
            xmlns="http://www.w3.org/2000/svg"
        >
            {children}
        </SVGContainer>
    );
}
