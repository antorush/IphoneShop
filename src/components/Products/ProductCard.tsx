import type { Product } from "../../types/types";
import { API_URL } from "../../api/config";
import { FavoriteButton } from "../../features/FavoriteBtn/FavoriteBtn";
interface Props {
    product: Product;
    onToggleFavorite: (id: number) => void;
}

export const ProductCard=({ product, onToggleFavorite }: Props)=> {
    return (
        <div className="w-[270px] h-[432px] rounded-[10px] relative flex justify-center items-center text-center flex-col gap-4 p-4 bg-bannerText/50 ">
            <img src={`${API_URL}${product.image}`} alt={product.name} />
            <h3 className="font-medium leading-6 text-sizePrimary">{product.name}</h3>
            <p className="leading-6 tracking-wider font-semibold text-2xl">${product.price}</p>
           <div className="product-card__top">
                <FavoriteButton
                    className="absolute top-4 right-4 z-20"
                    active={product.favorite}
                    onClick={() => onToggleFavorite(product.id)}
                />
            <button type="button" className="mt-4">Buy Now</button>
        </div>
        </div>
    );
}