export function truncateText(fullText: string, truncLocation: number): string {
    if (!fullText || fullText.length === truncLocation) return '';
    if (fullText.length <= truncLocation) return fullText;

    return `${fullText.slice(0, truncLocation)}...`;
}
