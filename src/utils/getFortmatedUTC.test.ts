import '@testing-library/react';

import { getFormattedUTC } from './getFormattedUTC';

describe('getFormattedUTC', () => {
    function getDateTimeString(ms: number) {
        const date = new Date(ms).toLocaleDateString();
        const time = new Date(ms).toLocaleTimeString();
        return `${date} ${time}`;
    }

    describe('Valid Input Tests', () => {
        test('Matches current date & time', () => {
            const formattedUTCMs = Date.parse(getFormattedUTC() as string);
            const testCurrMs = new Date().getTime();

            const formattedUTCDateTime = getDateTimeString(formattedUTCMs);
            const testDateTime = getDateTimeString(testCurrMs);

            expect(formattedUTCDateTime).equal(testDateTime);
        });
        test('Handles valid timezone argument', () => {
            const formattedUTCMs = getFormattedUTC('America/Glace_Bay');
            expect(formattedUTCMs).not.equal(undefined);
        });
    });

    describe('Invalid input tests', () => {
        test('Handles invalid timezone argument', () => {
            // Correct timezone = 'America/Glace_Bay'
            const formattedUTCMs = getFormattedUTC('America/GlaceBay');
            expect(formattedUTCMs).equal(undefined);
        });
    });
});
