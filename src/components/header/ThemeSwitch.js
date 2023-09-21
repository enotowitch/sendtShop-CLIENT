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

	function ThemeSwitch({ children }) {
		return (
			<div className="themeSwitch" onClick={onClick}>
				{children}
			</div>
		)
	}

	return (
		<>
			{theme === "light"
				?
				<ThemeSwitch>
					<WbSunnyOutlined />
				</ThemeSwitch>
				:
				<ThemeSwitch>
					<DarkModeOutlined />
				</ThemeSwitch>
			}
		</>
	)
}
