import { useAtom, useSetAtom } from "jotai";
import { selectedProductIdsAtom, showComparisonDialogAtom } from "../../state/atoms";
import "./CompareBar.css";

const CompareBar = () => {
	const [selectedProductIds, setSelectedProductIds] = useAtom(selectedProductIdsAtom);
	const selectedProductCount = selectedProductIds.length;
	const setShowComparisonDialog = useSetAtom(showComparisonDialogAtom);

	if (selectedProductCount === 0) return null;

	return (
		<>
			<footer className="compare-bar">
				<div className="wrapper compare-bar__wrapper">
					<span className="compare-bar__text">
						{selectedProductCount} product{selectedProductCount > 1 ? "s" : ""} selected
					</span>
					<div className="compare-bar__buttons">
						<button onClick={() => setSelectedProductIds([])} className="compare-bar__clear-button">
							Clear selection
						</button>
						<button onClick={() => setShowComparisonDialog(true)}>Compare products</button>
					</div>
				</div>
			</footer>
			<div className="compare-bar__spacer"></div>
		</>
	);
};

export default CompareBar;
