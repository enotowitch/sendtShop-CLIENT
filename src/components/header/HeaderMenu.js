import React, { useState } from "react"
import { Menu } from "@mui/icons-material"
import HeaderDrawer from "./HeaderDrawer"


export default function HeaderMenu() {

	const [showMenu, showMenuSet] = useState(false)

	return (
		<>
			<Menu className="mx" onClick={() => showMenuSet(prev => !prev)} />
			{showMenu && <HeaderDrawer showMenu={showMenu} showMenuSet={showMenuSet} />}
		</>
	)
}
