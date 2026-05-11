

export interface suitcase {
    id: string,
    title: string,
    items: Array<object>,
    color: string,
}

export interface bag {
    id: string,
    title: string,
    items: Array<object>,
    color: string,
}

export interface pouch {
    id: string,
    title: string,
    items: Array<object>,
    color: string
}

export interface items {
    id: string,
    title: string,
    type: string,
    color: string
}