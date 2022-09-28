// Gets the current UTC/GTM time of the passed in timezone and returns it with the full day, month, year, hours, mins, secs
export function getFormattedUTC(timezone = 'America/Halifax'): string {
    // Options list to configure how that date and time are shown on page.
    const longFormatOptions = {
        timeZone: timezone,
        timeZoneName: 'shortOffset' as const,
        hourCycle: 'h23' as const,
        month: 'short' as const,
        day: 'numeric' as const,
        year: 'numeric' as const,
        hour: '2-digit' as const,
        minute: 'numeric' as const,
        second: 'numeric' as const,
    };

    // Uses international date time to get date and time string
    const currentLocalTime = new Intl.DateTimeFormat(
        'en-US',
        longFormatOptions
    ).format(new Date());

    return currentLocalTime;
}
