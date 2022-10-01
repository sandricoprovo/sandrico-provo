import React from 'react';
import styled from 'styled-components';
import { GoToBtn } from '../src/components/Buttons';

import { Head } from '../src/components/Head/Head';

const Styled404 = styled.section`
    padding: 160px var(--spacing-content-mobile);
    margin-bottom: var(--spacing-margin);

    display: flex;
    flex-direction: column;
    gap: 40px;

    & > div:nth-of-type(1) {
        & > p {
            color: var(--clr-main);
            font-family: var(--font-display);
        }

        & > h1 {
            font-family: var(--font-header);
            color: var(--clr-text);
            font-size: var(--font-max);
        }
    }

    & > div:nth-of-type(2) {
        display: flex;
        flex-direction: column;
        gap: 40px;

        & > p {
            font-size: var(--font-body);
            color: var(--clr-text);
            font-family: var(--font-body);
            width: 64%;
            min-width: 350px;
            line-height: 180%;
        }

        & > div {
            min-width: 350px;
            width: 50%;

            display: flex;
            gap: 80px;
        }
    }

    @media (min-width: 575px) {
        padding: 160px var(--spacing-content);
    }
`;

function NotFoundPage() {
    return (
        <>
            <Head title="Sandrico Provo - 404" />
            <Styled404>
                <div>
                    <p>Oops!</p>
                    <h1>404</h1>
                </div>
                <div>
                    <p>
                        Unfortunately you've found my 404 page, which means what
                        you were looking for isn't here. Feel free to go back
                        home, or contact me if you think this is a bug.
                    </p>
                    <div>
                        <GoToBtn label="Home" href="/" />
                        <GoToBtn label="Contact" href="/contact" />
                    </div>
                </div>
            </Styled404>
        </>
    );
}

export default NotFoundPage;
