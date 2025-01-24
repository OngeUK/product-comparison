import FilterByCategory from "../FilterByCategory/FilterByCategory";
import FilterByPrice from "../FilterByPrice/FilterByPrice";
import "./FilterBar.css";

const FilterBar = () => {
	return (
		<aside className="filter-bar">
			<h2 className="h2">Filters</h2>
			<form className="filter-bar__wrapper">
				<FilterByPrice />
				<FilterByCategory />
			</form>
		</aside>
	);
};

export default FilterBar;
