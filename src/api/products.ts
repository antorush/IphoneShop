import { API_URL } from "./config";
import type { Product, ProductsResponse } from "../types/types";

export interface GetProductsParams {
    category?: string;
    search?: string;
    minPrice?: number;
    maxPrice?: number;
    favorite?: boolean;
}

export async function getProducts(params: GetProductsParams = {}): Promise<Product[]> {
    const query = new URLSearchParams();
    if (params.category) query.append("category", params.category);
    if (params.search) query.append("search", params.search);
    if (params.minPrice !== undefined) query.append("minPrice", String(params.minPrice));
    if (params.maxPrice !== undefined) query.append("maxPrice", String(params.maxPrice));
    if (params.favorite !== undefined) query.append("favorite", String(params.favorite));

    const url = `${API_URL}/products${query.toString() ? `?${query}` : ""}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Ошибка загрузки товаров");
    const data: ProductsResponse = await res.json();
    return data.products;
}

export async function toggleFavorite(id: number, favorite?: boolean): Promise<Product> {
    const res = await fetch(`${API_URL}/products/${id}/favorite`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(favorite === undefined ? {} : { favorite }),
    });
    if (!res.ok) throw new Error("Не удалось изменить избранное");
    return res.json();
}