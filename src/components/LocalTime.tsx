import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getFormattedUTC } from '../utils/getFormattedTime';

const LocalTimeStyled = styled.p`
    font: var(--font-body);
    color: var(--clr-text);
    max-width: 80ch;
    font-variant: tabular-nums;
`;

interface TimezoneClockProps {
    timezone?: string;
}

const LOADING_STATE = 'Getting my local time...';

export function LocalTime({
    timezone = 'America/Halifax',
}: TimezoneClockProps): JSX.Element {
    const [timezoneUTC, setTimezoneUTC] = useState(LOADING_STATE);

    useEffect(() => {
        const updateUTCInterval = setInterval(() => {
            const formattedUTC = getFormattedUTC(timezone);
            setTimezoneUTC(formattedUTC);
        }, 1000);
        return () => clearInterval(updateUTCInterval);
    }, [timezone]);

    return <LocalTimeStyled>{timezoneUTC ?? LOADING_STATE}</LocalTimeStyled>;
}
