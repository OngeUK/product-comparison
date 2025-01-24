import { useAtomValue } from "jotai";
import { selectedProductsDataAtom } from "../../state/atoms";
import CategoryBadge from "../CategoryBadge/CategoryBadge";
import ProductPrice from "../ProductPrice/ProductPrice";
import ProductRating from "../ProductRating/ProductRating";
import "./ComparisonTable.css";

const ComparisonTable = () => {
	const selectedProductsData = useAtomValue(selectedProductsDataAtom);

	if (selectedProductsData.length === 0) return <p>No selected products found.</p>;

	return (
		<div className="comparison-table-container">
			<table className="comparison-table" style={{ width: `calc(${selectedProductsData.length * 320}px + var(--comparison-table-header-width))` }}>
				<tbody>
					<tr>
						<th>Image</th>
						{selectedProductsData.map((product) => (
							<td key={product.id}>
								<img className="comparison-table__image" src={product.image} alt={product.title} loading="lazy" />
							</td>
						))}
					</tr>
					<tr>
						<th>Title</th>
						{selectedProductsData.map((product) => (
							<td key={product.id}>{product.title}</td>
						))}
					</tr>
					<tr>
						<th>Category</th>
						{selectedProductsData.map((product) => (
							<td key={product.id}>
								<CategoryBadge label={product.category} isOverlay={false} />
							</td>
						))}
					</tr>
					<tr>
						<th>Price</th>
						{selectedProductsData.map((product) => (
							<td key={product.id}>
								<ProductPrice price={product.price} />
							</td>
						))}
					</tr>
					<tr>
						<th>Rating</th>
						{selectedProductsData.map((product) => (
							<td key={product.id}>
								<ProductRating rate={product.rating.rate} count={product.rating.count} />
							</td>
						))}
					</tr>
					<tr>
						<th>Description</th>
						{selectedProductsData.map((product) => (
							<td key={product.id}>{product.description}</td>
						))}
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default ComparisonTable;
