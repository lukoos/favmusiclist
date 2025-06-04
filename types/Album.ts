export interface Album {
    id: number;
    title?: string;
    favourite?: boolean;
    date?: string;
}

export interface SortBy {
    key: string,
    name: string,
    date?:string
}

export enum AlbumLayout {
    GRID = 'grid',
    LIST = 'list',
}