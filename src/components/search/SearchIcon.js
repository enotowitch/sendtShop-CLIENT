import React, { useState } from "react"
import { Search } from "@mui/icons-material"
import SearchField from "./SearchField"

export default function SearchIcon() {

	const [show, showSet] = useState(false)

	return (
		<>
			{show && <SearchField />}
			<Search onClick={() => showSet(prev => !prev)} />
		</>
	)
}
