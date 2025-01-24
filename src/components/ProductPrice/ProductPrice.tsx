const ProductPrice = ({ price, maximumFractionDigits = 2 }: { price: number; maximumFractionDigits?: number }) => {
	if (!isFinite(price)) return <></>;

	const formattedPrice = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits }).format(price);
	return <>{formattedPrice}</>;
};

export default ProductPrice;
