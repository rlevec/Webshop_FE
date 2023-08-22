export type FaqHoveredStateTypes = {
    orders: boolean,
    delivery: boolean,
    payment: boolean,
    return: boolean,
    other: boolean
}

export type FaqDataContentTypes = {
    id: number,
    frontendSlug: string,
    question: string,
    answer: string,
    subCategories: string[],
}

export type FaqDataTitleTypes = {
    id: number,
    frontendSlug: string,
    title: string,
}

export type FaqDataTypes = {
    route: string,
    globalTitle: string
    titles: FaqDataTitleTypes[],
    content: FaqDataContentTypes[]
}