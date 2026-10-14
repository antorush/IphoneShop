import { useCallback, useEffect, useState } from "react";
import { getProducts, toggleFavorite, type GetProductsParams } from "../api/products";
import type { Product } from "../types/types";

export function useProducts(params: GetProductsParams = {}) {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const load = useCallback(() => {
        setLoading(true);
        setError(null);
        getProducts(params)
            .then(setProducts)
            .catch((e) => setError(e.message))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        load();
    }, [load]);

    // Оптимистичное обновление: сразу меняем UI, потом сервер
    const toggleFav = async (id: number) => {
        setProducts((prev) =>
            prev.map((p) => (p.id === id ? { ...p, favorite: !p.favorite } : p))
        );
        try {
            await toggleFavorite(id);
        } catch {
            // откат при ошибке
            setProducts((prev) =>
                prev.map((p) => (p.id === id ? { ...p, favorite: !p.favorite } : p))
            );
        }
    };

    return { products, loading, error, toggleFav, reload: load };
}