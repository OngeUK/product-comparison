import { useAtom } from "jotai";
import { selectedProductIdsAtom } from "../../state/atoms";
import "./CompareButton.css";

const CompareButton = ({ productId }: { productId: number }) => {
	const [selectedProductIds, setSelectedProductIds] = useAtom(selectedProductIdsAtom);
	const isSelected = selectedProductIds.some((id) => id === productId);

	const toggleProductSelection = () => {
		if (isSelected) {
			setSelectedProductIds(selectedProductIds.filter((id) => id !== productId));
		} else {
			setSelectedProductIds([...selectedProductIds, productId]);
		}
	};

	return (
		<button onClick={toggleProductSelection} className={`compare-button${isSelected ? "_selected" : ""}`}>
			{!isSelected ? "Compare" : "Remove"}
		</button>
	);
};

export default CompareButton;
