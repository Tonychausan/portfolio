export type ProjectObject = {
    fromTime: string;
    toTime: string;
    workplace: string;
    description: string;
    myRole?: string;
    tools?: string;
}

export type ExperienceObject = {
    fromTime: string;
    toTime: string;
    workplace: string;
    title: string;
    description: string;
    myRole?: string;
    projects?: ProjectObject[];
    tools?: string;
}

