import { Button } from "@mui/material"
import React from "react"
import { useContext } from "react"
import { Context } from "../../Context"

// eg:			SKIP LIMIT
// round 1		 0    10
// round 2		10		10
// round 3		20    10
// round 4		30    10
// ...
export default function LoadMore() {

	const { skipSet } = useContext(Context)

	return (
		<Button onClick={() => skipSet(prev => prev + 1)}>Load More</Button>
	)
}