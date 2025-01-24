import { useAtom } from "jotai";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import { sortByAtom, sortDirectionAtom } from "../../state/atoms";
import { DEFAULT_ORDER_BY, OrderBy, SortBy } from "../../types/state";
import "./SortButton.css";

const SortIcon = ({ type, sortBy, sortDirection }: { type: SortBy; sortBy: SortBy | null; sortDirection: OrderBy }) => {
	const ICON_SIZE = "1.2rem";
	const iconProps = { size: ICON_SIZE, role: "presentation" };

	if (sortBy !== type) return <ArrowUpDown {...iconProps} />;
	return sortDirection === "asc" ? <ArrowUp {...iconProps} /> : <ArrowDown {...iconProps} />;
};

const SortButton = ({ type }: { type: SortBy }) => {
	const [sortBy, setSortBy] = useAtom(sortByAtom);
	const [sortDirection, setSortDirection] = useAtom(sortDirectionAtom);

	const toggleSort = (type: SortBy) => {
		if (sortBy === type) {
			setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
		} else {
			setSortBy(type);
			setSortDirection(DEFAULT_ORDER_BY);
		}
	};

	return (
		<button className="sort-button" onClick={() => toggleSort(type)}>
			Sort by {type}
			<SortIcon type={type} sortBy={sortBy} sortDirection={sortDirection} />
		</button>
	);
};

export default SortButton;
