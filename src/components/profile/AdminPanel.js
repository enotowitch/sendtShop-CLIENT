import { Link } from "react-router-dom"
import AdminIcon from "./AdminIcon"
import "./index.scss"
import { useContext } from "react"
import { Context } from "../../Context"
import { ControlPoint, LayersOutlined } from "@mui/icons-material"
import { ADMIN_ORDERS_NEW, ADMIN_ORDERS_SENT } from "../../consts"
import Or from "../auth/Or"

export default function AdminPanel() {

	const { user } = useContext(Context)

	return (
		user?.isAdmin &&
		<section className="fcc g wS m0a mb adminPanel">
			<Link to="/add/product"><AdminIcon text="product"><ControlPoint /></AdminIcon></Link>
			<Link to="/add/article"><AdminIcon text="article"><ControlPoint /></AdminIcon></Link>

			<Or text="ORDERS" />
			<Link to={ADMIN_ORDERS_NEW}><AdminIcon text="new"><LayersOutlined /></AdminIcon></Link>
			<Link to={ADMIN_ORDERS_SENT}><AdminIcon text="sent"><LayersOutlined /></AdminIcon></Link>
			
			<Or text="EDIT FOOTER" />
			<div className="fc fcc g">
				<Link to="/edit/footer/about">About Us</Link>
				<Link to="/edit/footer/terms">Terms and Conditions</Link>
				<Link to="/edit/footer/privacy">Privacy Policy</Link>
				<Link to="/edit/footer/returns">Return Policy</Link>
			</div>
		</section>
	)
}
