export const ErrorMessage = () => {
	return (
		<section className="wrapper">
			<h1 className="h1">Something went wrong</h1>
			<p>We're sorry, but something went wrong. Please try refreshing the page.</p>
			<button onClick={() => window.location.reload()}>Refresh Page</button>
		</section>
	);
};
