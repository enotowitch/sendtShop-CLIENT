import { Link } from "react-router-dom"
import AdminIcon from "./AdminIcon"
import "./index.scss"
import { useContext } from "react"
import { Context } from "../../Context"
import { ControlPoint, LayersOutlined } from "@mui/icons-material"

export default function AdminPanel() {

	const { user } = useContext(Context)

	return (
		user?.isAdmin &&
		<section className="fcc g wS m0a mb adminPanel">
			<Link to="/add/product"><AdminIcon text="product"><ControlPoint /></AdminIcon></Link>
			<Link to="/add/article"><AdminIcon text="article"><ControlPoint /></AdminIcon></Link>
			<Link to="/orders"><AdminIcon text="orders"><LayersOutlined /></AdminIcon></Link>
		</section>
	)
}
