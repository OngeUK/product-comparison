import { useAtomValue, useSetAtom } from "jotai";
import { useState } from "react";
import { maxPriceAtom, productPriceRangeRoundedAtom } from "../../state/atoms";
import ProductPrice from "../ProductPrice/ProductPrice";
import "./FilterByPrice.css";

const FilterByPrice = () => {
	const [minPrice, maxPrice] = useAtomValue(productPriceRangeRoundedAtom);
	const setFilteredMaxPrice = useSetAtom(maxPriceAtom);
	const [selectedMaxPrice, setSelectedMaxPrice] = useState(maxPrice);
	const setFilteredPriceValue = () => {
		setFilteredMaxPrice(selectedMaxPrice);
	};

	// Update UI to show selected slider value
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(event.target.value);
		setSelectedMaxPrice(value);
	};

	// The following handlers only update the Jotai atom/state when the user finishes interacting with the slider
	const handleMouseUp = () => {
		setFilteredPriceValue();
	};

	const handleTouchEnd = () => {
		setFilteredPriceValue();
	};

	const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
			setFilteredPriceValue();
		}
	};

	return (
		<div>
			<div className="filter-by-price-heading">
				<label className="h3" htmlFor="priceRange">
					Maximum price
				</label>
				<ProductPrice price={selectedMaxPrice} maximumFractionDigits={0} />
			</div>
			<input
				className="filter-by-price-slider"
				onChange={handleChange}
				onMouseUp={handleMouseUp}
				onKeyUp={handleKeyUp}
				onTouchEnd={handleTouchEnd}
				type="range"
				min={minPrice}
				max={maxPrice}
				defaultValue={maxPrice}
				step="1"
				id="priceRange"
				name="price"
				list="values"
			/>
			<datalist id="values" className="filter-by-price-labels">
				<option className="filter-by-price-label" value={minPrice} label={isFinite(minPrice) ? minPrice.toString() : ""}></option>
				<option className="filter-by-price-label" value={maxPrice} label={isFinite(minPrice) ? maxPrice.toString() : ""}></option>
			</datalist>
		</div>
	);
};

export default FilterByPrice;
