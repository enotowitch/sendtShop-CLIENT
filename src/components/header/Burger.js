import React, { useContext } from "react"
import { Context } from "../../Context"
import "./index.scss"

export default function Burger() {

	const { showMenu, showMenuSet } = useContext(Context)

	return (
		<div className="burger">

			<input
				id="burger__toggle"
				type="checkbox"
				onClick={() => showMenuSet(prev => !prev)}
				checked={showMenu}
			/>

			<label className="burger__btn" htmlFor="burger__toggle">
				<span></span>
			</label>

		</div>
	)
}