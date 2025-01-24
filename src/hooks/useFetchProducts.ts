import { useAtom } from "jotai";
import { useCallback, useEffect } from "react";
import { errorAtom, loadingAtom, productsAtom } from "../state/atoms";
import { Product } from "../types/product";

const useFetchProducts = () => {
	const [products, setProducts] = useAtom(productsAtom);
	const [isLoading, setIsLoading] = useAtom(loadingAtom);
	const [hasError, setHasError] = useAtom(errorAtom);

	const fetchProducts = useCallback(async () => {
		if (products.length > 0) return;

		try {
			setIsLoading(true);
			setHasError(null);

			const response = await fetch("https://fakestoreapi.com/products");

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data: Product[] = await response.json();

			if (!Array.isArray(data)) {
				throw new Error("Invalid data format received from API");
			}

			setProducts(data);
		} catch (err) {
			console.error("Error fetching products:", err);

			if (err instanceof Error) {
				setHasError(err.message);
			} else {
				setHasError("An unexpected error occurred");
			}
		} finally {
			setIsLoading(false);
		}
	}, [products.length, setProducts, setIsLoading, setHasError]);

	useEffect(() => {
		fetchProducts();

		return () => {
			setIsLoading(false);
			setHasError(null);
		};
	}, [fetchProducts, setIsLoading, setHasError]);

	return { products, isLoading, hasError };
};

export default useFetchProducts;
