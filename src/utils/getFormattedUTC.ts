// Gets the current UTC/GTM time of the passed in timezone and returns it with the full day, month, year, hours, mins, secs
export function getFormattedUTC(timezone = 'America/Halifax'): string {
    // Options list to configure how that date and time are shown on page.
    const longFormatOptions = {
        timeZone: timezone,
        month: 'long' as const,
        day: 'numeric' as const,
        weekday: 'long' as const,
        year: 'numeric' as const,
        hour: 'numeric' as const,
        minute: 'numeric' as const,
        second: 'numeric' as const,
    };

    // Uses international date time to get date and time string
    const halifaxCurrentTime = new Intl.DateTimeFormat(
        'en-US',
        longFormatOptions
    ).format(new Date());

    return halifaxCurrentTime;
}
