import "./CategoryBadge.css";

const CategoryBadge = ({ label, isOverlay = true }: { label: string; isOverlay?: boolean }) => {
	return (
		<span
			className={`
				category-badge 
				category-badge_${label.replace(/\s/g, "-").replace(/'/g, "")}
				${isOverlay ? " category-badge_overlay" : ""}
			`}
		>
			{label}
		</span>
	);
};

export default CategoryBadge;
