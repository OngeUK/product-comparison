import { Provider } from "jotai";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import App from "./App.tsx";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage.tsx";
import "./main.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

createRoot(rootElement).render(
	<StrictMode>
		<ErrorBoundary fallbackRender={ErrorMessage}>
			<Provider>
				<App />
			</Provider>
		</ErrorBoundary>
	</StrictMode>,
);
