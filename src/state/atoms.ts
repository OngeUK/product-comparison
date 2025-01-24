import { atom } from "jotai";
import { Product } from "../types/product";
import { DEFAULT_ORDER_BY, OrderBy, SortBy } from "../types/state";

// Primitive atoms
export const productsAtom = atom<Product[]>([]);
export const selectedProductIdsAtom = atom<number[]>([]);
export const sortByAtom = atom<SortBy | null>(null);
export const sortDirectionAtom = atom<OrderBy>(DEFAULT_ORDER_BY);
export const loadingAtom = atom(false);
export const errorAtom = atom<string | null>(null);
export const showComparisonDialogAtom = atom(false);
export const selectedCategoriesAtom = atom<string[]>([]);
export const maxPriceAtom = atom<number | null>(null);

// Derived atoms
export const productCategoriesAtom = atom((get) => {
	const products = get(productsAtom);
	const categories = products.map((product) => product.category);
	return Array.from(new Set(categories)).sort();
});

export const productPriceRangeAtom = atom<[number, number]>((get) => {
	const products = get(productsAtom);
	const prices = products.map((product) => product.price);
	return [Math.min(...prices), Math.max(...prices)];
});

export const productPriceRangeRoundedAtom = atom<[number, number]>((get) => {
	const [min, max] = get(productPriceRangeAtom);
	return [Math.ceil(min), Math.ceil(max)];
});

export const filteredAndSortedProductsAtom = atom((get) => {
	const products = get(productsAtom);
	const selectedCategories = get(selectedCategoriesAtom);
	const maxPrice = get(maxPriceAtom);
	const sortBy = get(sortByAtom);
	const sortDirection = get(sortDirectionAtom);

	return products
		.filter((product) => selectedCategories.length === 0 || selectedCategories.includes(product.category))
		.filter((product) => maxPrice === null || product.price <= maxPrice)
		.sort((a, b) => {
			if (sortBy === null) return 0;
			if (sortBy === "price") return sortDirection === "asc" ? a.price - b.price : b.price - a.price;
			return sortDirection === "asc" ? a.rating.rate - b.rating.rate : b.rating.rate - a.rating.rate;
		});
});

export const selectedProductsDataAtom = atom((get) => {
	const products = get(productsAtom);
	const selectedProductIds = get(selectedProductIdsAtom);
	return products.filter((product) => selectedProductIds.includes(product.id));
});
