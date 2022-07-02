export interface ProjectLinks {
    github: string;
    external: string;
}

export interface Project {
    index: number;
    name: string;
    key: string;
    techStack: string[];
    description: string;
    links: ProjectLinks;
    image: {
        src: string;
        alt: string;
        blurUrl: string;
    };
}
