export interface Product {
    id: string;
    name: string;
    category: string;
    description: string;
    price: number;
    promotionalPrice?: number | null;
    image: string;
    discount?: string;
}