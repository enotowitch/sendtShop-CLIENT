import React, { useContext, useEffect } from "react"
import { DarkModeOutlined, WbSunnyOutlined } from "@mui/icons-material/"
import "./index.scss"
import { Context } from "../../Context"

export default function ThemeSwitch() {

	const { theme, themeSet } = useContext(Context)

	function onClick() {
		themeSet(prev => prev === "light" ? "dark" : "light")
	}

	useEffect(() => {
		localStorage.setItem("theme", theme)
	}, [theme])

	return (
		<>
			{theme === "light"
				?
				<div className="themeSwitch" onClick={onClick}>
					<DarkModeOutlined />
				</div>
				:
				<div className="themeSwitch" onClick={onClick}>
					<WbSunnyOutlined />
				</div>
			}
		</>
	)
}
