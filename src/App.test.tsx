import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "jotai";
import { beforeEach, describe, expect, it, vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";
import App from "./App";
import { mockDialogMethods } from "./mocks/mockDialogMethods";
import mockProducts from "./mocks/mockProducts";

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

describe("App", () => {
	mockDialogMethods();
	fetchMocker.mockResponse(JSON.stringify(mockProducts));

	beforeEach(() => {
		render(
			<Provider>
				<App />
			</Provider>,
		);
	});

	it("renders loading state initially", () => {
		expect(screen.getByRole("status")).toBeInTheDocument();
	});

	it("renders all products after loading", async () => {
		await screen.findByRole("main");

		const productTitles = mockProducts.map((product) => product.title);

		productTitles.forEach((titleText) => {
			expect(screen.getByText(titleText)).toBeInTheDocument();
		});
	});

	it("can filter products by category", async () => {
		const productList = await screen.findByRole("list");
		const categoryFilter = await screen.findByLabelText(mockProducts[0].category);
		const filteredProducts = mockProducts.filter((product) => product.category === mockProducts[0].category);

		expect(productList.childNodes).toHaveLength(mockProducts.length);

		fireEvent.click(categoryFilter);

		expect(productList.childNodes).toHaveLength(filteredProducts.length);
	});

	it("allows sorting products by price", async () => {
		const productList = await screen.findByRole("list");
		const sortByPriceButton = screen.getByText(/Sort by price/);

		expect(productList.firstChild).toHaveTextContent(mockProducts[0].title);

		// Order by price descending
		fireEvent.click(sortByPriceButton);

		expect(productList.firstChild).toHaveTextContent(mockProducts[1].title);

		// Order by price ascending
		fireEvent.click(sortByPriceButton);

		expect(productList.firstChild).toHaveTextContent(mockProducts[0].title);
	});

	it("allows sorting products by rating", async () => {
		const productList = await screen.findByRole("list");
		const sortByPriceButton = screen.getByText(/Sort by rating/);

		expect(productList.firstChild).toHaveTextContent(mockProducts[0].title);

		// Order by rating descending
		fireEvent.click(sortByPriceButton);

		expect(productList.firstChild).toHaveTextContent(mockProducts[0].title);

		// Order by rating ascending
		fireEvent.click(sortByPriceButton);

		expect(productList.firstChild).toHaveTextContent(mockProducts[1].title);
	});

	it("allows selecting products for comparison in table view", async () => {
		await screen.findByRole("main");

		const compareButtons = screen.getAllByText("Compare");

		compareButtons.forEach((button) => {
			fireEvent.click(button);
		});

		const compareButton = screen.getByText("Compare products");

		fireEvent.click(compareButton);

		expect(await screen.findByRole("table", { hidden: true })).toBeInTheDocument();
	});
});
