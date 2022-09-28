import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getFormattedUTC } from '../utils/getFormattedTime';

const TimeStyled = styled.span`
    display: block;
    line-height: 120%;
`;

interface TimezoneClockProps {
    timezone?: string;
}

const LOADING_STATE = 'Getting my time...';

export function Time({
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

    return <TimeStyled>{timezoneUTC ?? LOADING_STATE}</TimeStyled>;
}
