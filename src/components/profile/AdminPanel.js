import { Link } from "react-router-dom"
import AdminIcon from "./AdminIcon"
import "./index.scss"
import { useContext } from "react"
import { Context } from "../../Context"
import { ArticleOutlined, ControlPoint, LayersOutlined } from "@mui/icons-material"
import { HIDDEN_ARTICLES, HIDDEN_PRODUCTS } from "../../consts"
import Or from "../auth/Or"
import Orders from "../order/Orders"

export default function AdminPanel() {

	const { user } = useContext(Context)

	return (
		user?.isAdmin &&
		<section className="fcc g wS m0a mb adminPanel">
			<Link to="/add/product"><AdminIcon text="product"><ControlPoint /></AdminIcon></Link>
			<Link to="/add/article"><AdminIcon text="article"><ControlPoint /></AdminIcon></Link>

			<Orders role="admin" />

			<Or text="EDIT FOOTER" />
			<div className="fc fcc g">
				<Link to="/edit/footer/about">About Us</Link>
				<Link to="/edit/footer/terms">Terms and Conditions</Link>
				<Link to="/edit/footer/privacy">Privacy Policy</Link>
				<Link to="/edit/footer/returns">Return Policy</Link>
			</div>

			<Or text="HIDDEN POSTS" />
			<Link to={HIDDEN_ARTICLES}><AdminIcon text="articles"><ArticleOutlined /></AdminIcon></Link>
			<Link to={HIDDEN_PRODUCTS}><AdminIcon text="products"><LayersOutlined /></AdminIcon></Link>
		</section>
	)
}
