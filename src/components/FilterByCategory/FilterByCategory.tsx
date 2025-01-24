import { useAtom, useAtomValue } from "jotai";
import { productCategoriesAtom, selectedCategoriesAtom } from "../../state/atoms";
import "./FilterByCategory.css";

const FilterByCategory = () => {
	const products = useAtomValue(productCategoriesAtom);
	const [selectedCategories, setSelectedCategories] = useAtom(selectedCategoriesAtom);

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const category = event.target.value;
		if (event.target.checked) {
			setSelectedCategories([...selectedCategories, category]);
		} else {
			setSelectedCategories(selectedCategories.filter((selectedCategory) => selectedCategory !== category));
		}
	};

	return (
		<fieldset className="filter-by-category">
			<legend className="h3 filter-by-category-heading">Category</legend>
			{products.length === 0 ? (
				<p>No categories found</p>
			) : (
				<>
					{products.map((category) => (
						<label className="filter-by-category-option" key={category}>
							<input onChange={onChange} className="filter-by-category-checkbox" type="checkbox" value={category} />
							<span>{category}</span>
						</label>
					))}
				</>
			)}
		</fieldset>
	);
};

export default FilterByCategory;
