import Select from "../form/Select"
import sortProductOptions from "../../utils/sortProductOptions"

export default function PostSort() {
	return (
		(window.location.pathname === "/") &&
		<div className="f">
			<Select options={sortProductOptions} className="sort" />
		</div>
	)
}
