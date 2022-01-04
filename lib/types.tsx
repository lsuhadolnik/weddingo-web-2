export type CMSCollections = {[name: string]: CMSCollection};

export type CMSCollection = CMSEntry[];

export interface CMSEntry {
    data: {[key: string]: string};
    content: string
}

export interface HowItWorksSlideData {
    content: string;
    data: {
        title: string;
        order: number;
        type: 'text' | 'title' | 'final';
    }
}