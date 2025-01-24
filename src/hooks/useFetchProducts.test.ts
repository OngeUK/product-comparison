import { renderHook, waitFor } from "@testing-library/react";
import { Provider } from "jotai";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";
import mockProducts from "../mocks/mockProducts";
import useFetchProducts from "./useFetchProducts";

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

const callHook = () =>
	renderHook(() => useFetchProducts(), {
		wrapper: Provider,
	});

describe("useFetchProducts", () => {
	beforeEach(() => {
		fetchMocker.resetMocks();
	});

	afterEach(() => {
		vi.clearAllMocks();
	});

	it("should fetch products successfully", async () => {
		fetchMocker.mockResponse(JSON.stringify(mockProducts));

		const { result } = callHook();

		await waitFor(() => expect(result.current.products).toEqual(mockProducts));
		expect(result.current.isLoading).toBe(false);
		expect(result.current.hasError).toBe(null);
	});

	it("should handle fetch error", async () => {
		const ERROR_MESSAGE = "Failed to fetch";
		fetchMocker.mockReject(new Error(ERROR_MESSAGE));

		const { result } = callHook();

		await waitFor(() => expect(result.current.isLoading).toBe(false));
		expect(result.current.products).toEqual([]);
		expect(result.current.hasError).toBe(ERROR_MESSAGE);
	});

	it("should handle invalid data returned from fetch", async () => {
		fetchMocker.mockResponse(JSON.stringify({ data: "invalid" }));

		const ERROR_MESSAGE = "Invalid data format received from API";
		fetchMocker.mockReject(new Error(ERROR_MESSAGE));

		const { result } = callHook();

		await waitFor(() => expect(result.current.isLoading).toBe(false));
		expect(result.current.products).toEqual([]);
		expect(result.current.hasError).toBe(ERROR_MESSAGE);
	});
});
