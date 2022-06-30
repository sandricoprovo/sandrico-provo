export interface HeaderLink {
    label: string;
    url: string;
}

export interface Header {
    logo: string;
    label: string;
    links: HeaderLink[];
}
