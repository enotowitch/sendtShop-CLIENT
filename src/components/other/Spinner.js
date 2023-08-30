import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function Spinner({ children, loading }) {

	const [_loading, _loadingSet] = useState(true)
	useEffect(() => {
		_loadingSet(loading)
	}, [loading]) // external loading state

	return (
		!_loading
			?
			<>{children}</>
			:
			<div className="wfc m0a">
				<CircularProgress />
			</div>
	)
}