import { css } from 'styled-components';

export const MenuBtnStyles = css`
    .ham {
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        transition: transform 0.35s;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .hamRotate.active {
        transform: rotate(45deg);
    }

    .line {
        fill: none;
        transition: stroke-dasharray 0.35s, stroke-dashoffset 0.35s;
        stroke: var(--clr-text);
        stroke-width: 3;
        stroke-linecap: round;
    }

    .ham8 .top {
        stroke-dasharray: 40 160;
    }

    .ham8 .middle {
        stroke-dasharray: 40 142;
        transform-origin: 50%;
        transition: transform 0.35s;
    }

    .ham8 .bottom {
        stroke-dasharray: 40 85;
        transform-origin: 50%;
        transition: transform 0.35s, stroke-dashoffset 0.35s;
    }

    .ham8.active .top {
        stroke-dashoffset: -64px;
    }

    .ham8.active .middle {
        transform: rotate(90deg);
    }

    .ham8.active .bottom {
        stroke-dashoffset: -64px;
    }
`;
