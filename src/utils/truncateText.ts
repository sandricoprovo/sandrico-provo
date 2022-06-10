export function truncateText(fullText: string, truncLocation: number): string {
    if (!fullText) return '';
    if (fullText.length <= truncLocation) return fullText;

    return `${fullText.slice(0, truncLocation)}...`;
}
