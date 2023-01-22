export interface Experience {
    id: string;
    jobTitle: string;
    companyName: string;
    timeline: string;
    location: string;
    techUsed: string[];
    achievements: string[];
    wasCoOp?: true;
    companyLink?: string;
}
