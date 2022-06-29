import React, { useState, useEffect } from 'react';

import { getFormattedUTC } from '../utils/getFormattedUTC';

interface TimezoneClockProps {
    timezone?: string;
}

const LOADING_STATE = 'Getting my time...';

const TimezoneClock: React.FC<TimezoneClockProps> = ({
    timezone,
}): JSX.Element => {
    const [timezoneUTC, setTimezoneUTC] = useState(LOADING_STATE);

    useEffect(() => {
        const updateUTCInterval = setInterval(() => {
            const formattedUTC = getFormattedUTC(timezone ?? 'America/Halifax');
            setTimezoneUTC(formattedUTC);
        }, 1000);
        return () => clearInterval(updateUTCInterval);
    }, [timezone]);

    return <span>{timezoneUTC ?? LOADING_STATE}</span>;
};

export default TimezoneClock;
