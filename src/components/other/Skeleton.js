import { useEffect, useState } from "react";
import { Skeleton } from "@mui/material"

export default function _Skeleton({ children, loading }) {

	const [_loading, _loadingSet] = useState(true)
	useEffect(() => {
		_loadingSet(loading)
	}, [loading]) // external loading state

	return (
		!_loading
			?
			<>{children}</>
			:
			<Skeleton className="m0a">
				{children}
			</Skeleton>
	)
}
