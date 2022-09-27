import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import setup1 from '../../../public/images/setup-1.jpeg';
import { GoToBtn } from '../Buttons';

const ShortAboutStyled = styled.section`
    width: 100%;
    margin-bottom: var(--spacing-margin);
    padding: 0 var(--spacing-content-mobile);

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 80px;

    & > div:nth-child(1) {
        width: 100%;
        min-width: 300px;
        max-width: 600px;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        gap: 16px;

        & > p {
            font-size: var(--font-base);
            font-family: var(--font-display);
            writing-mode: vertical-rl;
            transform: rotate(180deg);
        }

        & > div {
            position: relative;
            width: 100%;
            height: 100%;

            & > div {
                position: relative;
                height: 100%;
            }
        }
    }

    & > div:nth-child(2) {
        width: 100%;
        min-width: 300px;
        max-width: 600px;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        gap: 40px;

        & > p {
            font-family: var(--font-header);
            line-height: 100%;
        }

        & > div > p {
            line-height: 160%;
        }

        & > p > span {
            font-family: var(--font-display);
        }

        & > p > span > span {
            font-family: var(--font-display);
            color: var(--clr-main);
        }

        & > a {
            color: var(--clr-text);
            text-decoration: none;
        }
    }

    @media (min-width: 575px) {
        padding: 0 var(--spacing-content);
    }
`;

export function ShortAbout() {
    return (
        <ShortAboutStyled>
            <div>
                <p>Software Developer</p>
                <div>
                    <Image
                        src={setup1.src}
                        layout="responsive"
                        width={100}
                        height={100}
                        objectFit="cover"
                    />
                </div>
            </div>
            <div>
                <p className="header-4">
                    A little <br />
                    <span>
                        About Me<span>.</span>
                    </span>
                </p>
                <div>
                    <p className="body">
                        I’m Sandrico Provo, a Software Developer based in
                        Halifax, Nova Scotia, Canada. <br />
                        <br />
                        Mi eget mauris pharetra et ultrices neque ornare. Nisl
                        nunc mi ipsum faucibus vitae aliquet. Massa id neque
                        aliquam vestibulum morbi blandit cursus risus at. Sit
                        amet nisl suscipit adipiscing. Ultrices gravida dictum
                        fusce ut placerat orci nulla pellentesque. Iaculis at
                        erat pellentesque adipiscing commodo elit at. Lobortis
                        mattis aliquam faucibus purus in. <br /> <br />
                        Mi eget mauris pharetra et ultrices neque ornare. Nisl
                        nunc mi ipsum faucibus vitae aliquet. Massa id neque
                        aliquam vestibulum morbi blandit cursus risus at.
                    </p>
                </div>
                <GoToBtn href="/about" label="More About Me" />
            </div>
        </ShortAboutStyled>
    );
}
