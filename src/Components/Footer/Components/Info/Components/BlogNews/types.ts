export type BlogFormDataCategoriesTypes = {
    id: number,
    frontendSlug: string,
    title: string,
    image: string,
    alt: string,
    description: string
    route: string,
    subContent?: string
}

export type BlogFormDataTypes = {
    id: number,
    frontendSlug: string,
    title: string,
    categories?: BlogFormDataCategoriesTypes[]
}