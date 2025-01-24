import { useAtomValue } from "jotai";
import { filteredAndSortedProductsAtom, selectedProductIdsAtom } from "../../state/atoms";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

const ProductList = () => {
	const filteredAndSortedProducts = useAtomValue(filteredAndSortedProductsAtom);
	const selectedProductIds = useAtomValue(selectedProductIdsAtom);

	if (filteredAndSortedProducts.length === 0) return <p>No products found</p>;

	return (
		<ul className="product-list">
			{filteredAndSortedProducts.map((product) => {
				const isSelected = selectedProductIds.some((id) => id === product.id);
				return (
					<li className="product-list__item" key={product.id}>
						<ProductCard product={product} isSelected={isSelected} />
					</li>
				);
			})}
		</ul>
	);
};

export default ProductList;
