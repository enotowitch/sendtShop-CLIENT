import { Link } from "react-router-dom"
import AddIcon from "./AddIcon"
import "./index.scss"
import { useContext } from "react"
import { Context } from "../../Context"

export default function AdminPanel() {

	const { user } = useContext(Context)

	return (
		user?.isAdmin &&
		<section className="fcc g mb adminPanel">
			<Link to="/add/product"><AddIcon text="product" /></Link>
			<Link to="/add/article"><AddIcon text="article" /></Link>
		</section>
	)
}
