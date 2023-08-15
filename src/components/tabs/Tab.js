import { useContext } from "react"
import { Context } from "../../Context"

export default function Tab(props) {

	const { id, tab, onSet } = props
	const { filterPostsQuery } = useContext(Context)

	function onClick(e) {
		// 1. set state
		onSet({ 0: false, 1: false, 2: false, 3: false, [e.currentTarget.id]: true })
		// 2. active tab style
		document.querySelectorAll(".tab").forEach(each => each.classList.remove("tab_active"))
		e.currentTarget.classList.add("tab_active")
		// 3. run props.onClick: if passed
		props.onClick && props.onClick(e.currentTarget.innerText.toLowerCase()) // pass tagClicked
	}

	return (
		<div
			id={id}
			// active on click: filtered tab
			className={`tab ${filterPostsQuery?.tag === tab.toLowerCase() ? "tab_active" : ""}`}
			onClick={onClick}
		>
			{tab}
		</div>
	)
}
