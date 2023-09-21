import { Button } from "@mui/material"
import React from "react"
import { useContext } from "react"
import { Context } from "../../Context"
import { useLocation } from "react-router-dom"
import { ARTICLES_ROUTE, LIKED_PRODS_ROUTE, MAIN_ROUTE } from "../../consts"

// eg:			SKIP LIMIT
// round 1		 0    10
// round 2		10		10
// round 3		20    10
// round 4		30    10
// ...
export default function LoadMore({ skips, serverPostsNum, status }) {

	const { showLoadMore } = useContext(Context)

	// ! define which skipSet to use
	const location = useLocation().pathname
	let skipSet
	// case 1
	if (location === LIKED_PRODS_ROUTE) {
		skipSet = skips.skipSet1
		serverPostsNum = serverPostsNum.serverPostsNum1
	}
	// case 2
	if (location === MAIN_ROUTE || location === ARTICLES_ROUTE) {
		skipSet = skips.skipSet2
		serverPostsNum = showLoadMore ? 12 : 0 // for prods only: from Context
	}
	// case 5
	if (location.includes("/hidden/")) {
		skipSet = skips.skipSet5
		serverPostsNum = serverPostsNum.serverPostsNum5
	}
	// ? define which skipSet to use

	// server skip/limit is 12, so show loadMore btn if there are posts to load
	return (
		serverPostsNum === 12 && (status === "liked" || status === "filtered" || status === "hidden") &&
		<Button onClick={() => skipSet(prev => prev + 12)} className="mt" variant="contained">Load More</Button>
	)
}