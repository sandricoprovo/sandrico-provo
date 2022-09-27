import styled from 'styled-components';
import { TwitterIcon, GitHubIcon, LinkedinIcon } from '../Shared/Icons';

const FooterStyled = styled.footer`
    width: 100%;
    max-width: var(--spacing-page-max);

    & > div:nth-of-type(1) {
        height: 500px;
        padding: 0 var(--spacing-content-mobile);
        margin-bottom: calc(var(--spacing-content) / 2);
        background-color: var(--clr-footer-bkg);

        display: flex;
        justify-content: flex-start;
        align-items: center;

        @media (min-width: 575px) {
            padding: 0 var(--spacing-content);
        }
    }

    & > div:nth-of-type(1) > h4 {
        color: var(--clr-white);
        font-family: var(--font-header);
        font-size: var(--font-lg);
        line-height: 120%;

        @media (min-width: 575px) {
            line-height: 140%;
            font-size: var(--font-xl);
        }
    }

    & > div:nth-of-type(1) > h4 > span:nth-of-type(1) {
        font-family: var(--font-display);
        font-size: var(--font-xl);

        @media (min-width: 575px) {
            font-size: var(--font-xxxl);
        }
    }

    & > div:nth-of-type(1) > h4 > span:nth-of-type(2) {
        font-family: var(--font-display);
        color: var(--clr-main);
        font-size: var(--font-xxl);
    }

    & > div:nth-of-type(2) {
        height: 90vh;
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    & > div:nth-of-type(2) > div {
        margin-top: auto;
        margin-bottom: 48px;
        width: 100%;

        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: 80px;
    }

    & > div:nth-of-type(2) > div:nth-child(1) > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        gap: 40px;
    }

    & > div:nth-of-type(2) > div:nth-child(1) > div > p {
        max-width: 400px;
        line-height: 120%;
        font-size: var(--font-lg);
        font-family: var(--font-header);
    }

    & > div:nth-of-type(2) > div:nth-child(1) > div > p > span:nth-child(1) {
        font-family: var(--font-display);
    }

    & > div:nth-of-type(2) > div:nth-child(1) > div > p > span:nth-child(2) {
        color: var(--clr-main);
    }

    & > div:nth-of-type(2) > div:nth-child(1) > p {
        max-width: 200px;
        line-height: 120%;
        font-family: var(--font-display);
        font-size: var(--font-md);
    }

    & > div:nth-of-type(2) > div:nth-child(2) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start;

        @media (min-width: 575px) {
            justify-content: space-between;
            align-items: flex-start;
        }
    }

    & > div:nth-of-type(2) > div:nth-child(2) > div:nth-of-type(1) {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 80px;
    }

    & > div:nth-of-type(2) > div:nth-child(2) > div:nth-of-type(1) > div,
    & > div:nth-of-type(2) > div:nth-child(2) > div:nth-of-type(2) {
        height: 64px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        gap: 16px;
    }

    & > div:nth-of-type(2) > div:nth-child(2) > div > p {
        font-size: var(--font-base);
    }

    & > div:nth-of-type(2) > div:nth-child(2) > div > div > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 24px;
    }
`;

export function Footer() {
    return (
        <FooterStyled>
            <div>
                <h4>
                    Lets Work <br />
                    <span>Together</span>
                    <span>.</span>
                </h4>
            </div>
            <div>
                <div>
                    <div>
                        <p>
                            I'm excited to <span>CONNECT</span> with you
                            <span>.</span>
                        </p>
                        <button type="button">Get In Touch</button>
                    </div>
                    <p>DESIGNED AND BUILT BY ME.</p>
                </div>
                <div>
                    <div>
                        <div>
                            <p>Socials</p>
                            <div>
                                <GitHubIcon
                                    title="GitHub"
                                    href="https://google.ca"
                                />
                                <TwitterIcon
                                    title="Twitter"
                                    href="https://google.ca"
                                />
                                <LinkedinIcon
                                    title="LinkedIn"
                                    href="https://google.ca"
                                />
                            </div>
                        </div>
                        <div>
                            <p>Local Time</p>
                            <div>Time</div>
                        </div>
                    </div>
                    <div>
                        <p>2022 Edition</p>
                        <p>Sandrico Provo 2018-2022</p>
                    </div>
                </div>
            </div>
        </FooterStyled>
    );
}
