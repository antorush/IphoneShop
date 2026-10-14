import Container from "../../features/Container/Container";
import { useProducts } from "../../hooks/useProducts";
import { ProductCard } from "./ProductCard";


interface Props {
    category?: string;
}

const ProductList=({ category }: Props)=> {
    const { products, loading, error, toggleFav  } = useProducts({ category });

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error}</p>;

    return (
        <section className="block relative py-[56px] w-full">
            <Container maxWidth="1600" padding="30">
                <div className="grid grid-cols-4 place-content-center gap-4 w-full">
                    {products.slice(0,8).map((p) => (
                        <ProductCard onToggleFavorite={toggleFav} key={p.id} product={p} />
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default ProductList;
