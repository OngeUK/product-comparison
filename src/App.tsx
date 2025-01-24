import "./App.css";
import CompareBar from "./components/CompareBar/CompareBar";
import PageLayout from "./components/PageLayout/PageLayout";

const App = () => {
	return (
		<>
			<div className="wrapper">
				<a href="#main-content" className="jump-link">
					Skip to main content
				</a>
				<header>
					<h1 className="h1">Product comparison</h1>
				</header>
				<PageLayout />
			</div>
			<CompareBar />
		</>
	);
};

export default App;
