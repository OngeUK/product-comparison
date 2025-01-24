import { Product } from "../types/product";

const mockProducts: Product[] = [
	{ id: 1, title: "Product 1", price: 10, description: "Description 1", category: "Category 1", image: "image1.jpg", rating: { rate: 4.5, count: 10 } },
	{ id: 2, title: "Product 2", price: 20, description: "Description 2", category: "Category 2", image: "image2.jpg", rating: { rate: 4.0, count: 20 } },
];

export default mockProducts;
