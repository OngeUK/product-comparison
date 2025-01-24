import { Loader } from "lucide-react";
import "./LoadingSpinner.css";

const LoadingSpinner = () => (
	<div className="loading-spinner" role="status">
		<Loader size={36} strokeWidth={1.2} />
		<p>Loading - please wait...</p>
	</div>
);

export default LoadingSpinner;
