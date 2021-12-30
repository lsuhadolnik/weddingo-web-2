export type CMSCollections = {[name: string]: CMSCollection};

export type CMSCollection = CMSEntry[];

export interface CMSEntry {
    data: {[key: string]: string};
    content: string
}