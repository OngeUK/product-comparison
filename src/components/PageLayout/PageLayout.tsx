import useFetchProducts from "../../hooks/useFetchProducts";
import Dialog from "../Dialog/Dialog";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import FilterBar from "../FilterBar/FilterBar";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ProductList from "../ProductList/ProductList";
import SortButton from "../SortButton/SortButton";

const PageLayout = () => {
	const { isLoading, hasError } = useFetchProducts();

	if (isLoading) return <LoadingSpinner />;
	if (hasError) return <ErrorMessage />;

	return (
		<>
			<div className="container">
				<FilterBar />
				<main id="main-content">
					<div className="sort-options">
						<SortButton type="price" />
						<SortButton type="rating" />
					</div>
					<ProductList />
				</main>
			</div>
			<Dialog />
		</>
	);
};

export default PageLayout;
