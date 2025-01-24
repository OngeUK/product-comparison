import { Star } from "lucide-react";
import { Rating } from "../../types/product";
import "./ProductRating.css";

const ProductRating = ({ rate, count }: Rating) => (
	<div className="product-rating" aria-label={`Rating ${rate} out of 5 (from ${count} reviews)`}>
		<span className="product-rating__icon">
			<Star size="1.25rem" role="presentation" />
		</span>
		<span className="product-rating__count">
			{rate} <span className="product-rating__count_light">({count} reviews)</span>
		</span>
	</div>
);

export default ProductRating;
