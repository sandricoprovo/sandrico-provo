import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import setup1 from '../../../public/images/setup-1.jpeg';
import { ExternalLinkIcon, GitHubIcon } from '../Shared/Icons';

const ProjectFullStyled = styled.div`
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 64px;

    & > div:nth-of-type(1) {
        position: relative;
        width: 100%;
        min-width: 300px;
        max-width: 450px;
        height: 500px;
    }

    & > div:nth-of-type(2) {
        height: 100%;
        width: 100%;
        max-width: 650px;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 40px;
    }

    & > div:nth-of-type(2) > div:nth-of-type(1) {
        width: 100%;
        max-width: 650px;

        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start;
    }

    & > div:nth-of-type(2) > div > div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 24px;
    }

    & > div:nth-of-type(2) > div > p {
        width: 50%;
        min-width: 200px;
        font-family: var(--font-display);
        font-size: var(--font-md);
        color: var(--clr-text);
    }

    & > div:nth-of-type(2) > div > a {
        font-size: var(--font-base);
        color: var(--clr-text);
        text-decoration: none;
    }

    & > div:nth-of-type(2) > p {
        line-height: 180%;
    }
`;

export function ProjectFull() {
    return (
        <ProjectFullStyled>
            <div>
                <Image src={setup1.src} layout="fill" objectFit="cover" />
            </div>
            <div>
                <div>
                    <p>Project One One One One</p>
                    <div>
                        <GitHubIcon title="GitHub" href="https://google.ca" />
                        <ExternalLinkIcon
                            title="Live Site"
                            href="https://google.ca"
                        />
                    </div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Aliquam etiam erat velit scelerisque in dictum non
                    consectetur a. Ornare quam viverra orci sagittis eu. Risus
                    commodo viverra maecenas accumsan. Et malesuada fames ac
                    turpis. Amet tellus cras adipiscing enim eu. Amet est
                    placerat in egestas erat. A pellentesque sit amet porttitor.
                    Ac felis donec et odio pellentesque diam volutpat. Dis
                    parturient montes nascetur ridiculus mus mauris. Malesuada
                    nunc vel risus commodo viverra. Porta lorem mollis aliquam
                    ut porttitor. Mauris commodo quis imperdiet massa tincidunt
                    nunc pulvinar. Lorem sed risus ultricies tristique nulla
                    aliquet. Augue mauris augue neque gravida in. Posuere lorem
                    ipsum dolor sit. Venenatis lectus magna fringilla urna
                    porttitor rhoncus dolor purus non. Scelerisque eleifend
                    donec pretium vulputate sapien nec sagittis aliquam
                    malesuada. Posuere urna nec tincidunt praesent semper
                    feugiat nibh sed.
                </p>
            </div>
        </ProjectFullStyled>
    );
}
