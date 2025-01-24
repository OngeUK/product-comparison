import { Product } from "../../types/product";
import CategoryBadge from "../CategoryBadge/CategoryBadge";
import CompareButton from "../CompareButton/CompareButton";
import ProductPrice from "../ProductPrice/ProductPrice";
import ProductRating from "../ProductRating/ProductRating";
import "./ProductCard.css";

export const ProductCard = ({ product, isSelected }: { product: Product; isSelected: boolean }) => {
	return (
		<div className={`product-card${isSelected ? " product-card_selected" : ""}`}>
			<img className="product-card__image" src={product.image} alt={product.title} loading="lazy" />
			<div className="product-card__info">
				<h2 className="product-card__title">{product.title}</h2>
				<CategoryBadge label={product.category}></CategoryBadge>
				<ProductRating rate={product.rating.rate} count={product.rating.count} />
				<strong>
					<ProductPrice price={product.price} />
				</strong>
				<CompareButton productId={product.id} />
			</div>
		</div>
	);
};

export default ProductCard;
