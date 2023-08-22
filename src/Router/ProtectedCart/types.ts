export type CartItemsTypes = {
    frontendSlug: string;
    title: string;
    image: string;
    quantity?: number;
    inCart?: boolean | null;
    price?: null;
};

export type Props = {
    children: JSX.Element
}
