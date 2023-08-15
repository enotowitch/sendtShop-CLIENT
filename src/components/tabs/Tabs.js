import React, { useEffect, useState } from "react"
import "./index.scss"
import Tab from "./Tab"

export default function Tabs(props) {

	const { children, className, arr, onClick } = props
	const [on, onSet] = useState({ 0: true, 1: false, 2: false, 3: false })

	useEffect(() => {
		window.location.pathname !== "/" && // make first tab active on load: all pages NOT main
			document.querySelector(".tab").classList.add("tab_active") // active on load: first tab
	}, [])

	return (
		<div>
			<div className={`f fwn jcse aic ${className}`}>
				{arr?.map((tab, ind) => (
					<Tab key={ind} id={ind} tab={tab} onSet={onSet} onClick={onClick} />
				))}
			</div>
			{/* tabs content: if passed */}
			{on[0] && <div>{children?.[0]}</div>}
			{on[1] && <div>{children?.[1]}</div>}
			{on[2] && <div>{children?.[2]}</div>}
			{on[3] && <div>{children?.[3]}</div>}
		</div>
	)
}