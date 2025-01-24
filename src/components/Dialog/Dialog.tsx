import { useAtom } from "jotai";
import { useEffect, useRef } from "react";
import { showComparisonDialogAtom } from "../../state/atoms";
import ComparisonTable from "../ComparisonTable/ComparisonTable";
import "./Dialog.css";

const Dialog = () => {
	const [showComparisonDialog, setShowComparisonDialog] = useAtom(showComparisonDialogAtom);
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (showComparisonDialog) {
			dialogRef.current?.showModal();
		} else {
			dialogRef.current?.close();
		}
	}, [showComparisonDialog]);

	const handleCloseDialog = () => {
		setShowComparisonDialog(false);
	};

	const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
		// Close dialog if user clicks outside of the dialog area
		if (e.target === dialogRef.current) handleCloseDialog();
	};

	return (
		<dialog className="dialog" ref={dialogRef} onClick={handleDialogClick} onClose={handleCloseDialog} aria-labelledby="dialog-title">
			{showComparisonDialog && (
				<>
					<header className="dialog__header">
						<h2 className="h2" id="dialog-title">
							Product Comparison
						</h2>
						<button onClick={() => setShowComparisonDialog(false)}>Close</button>
					</header>
					<ComparisonTable />
				</>
			)}
		</dialog>
	);
};

export default Dialog;
