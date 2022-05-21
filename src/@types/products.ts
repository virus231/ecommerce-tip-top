export type TQuery = "asc" | "desc" | "";

export interface IProduct {
    id: string;
    amount: number;
    brand: string;
    category: string;
    created_at: string;
    imageURL: string;
    name: string;
}
