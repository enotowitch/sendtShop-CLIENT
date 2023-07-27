import { AddShoppingCart, FavoriteBorder, LayersOutlined, PersonOutline, Search, ArticleOutlined } from "@mui/icons-material"
import "./index.scss"
import { ARTICLES_ROUTE, CART_ROUTE, LIKED_PRODS_ROUTE, PROFILE_ROUTE, SEARCH_ROUTE, USER_ORDERS } from "../../consts"
import logoMain from "../../img/logoMain.svg"
import HeaderMenu from "./HeaderMenu"
import HeaderIcon from "./HeaderIcon"

export default function Header() {
	return (
		<>
			<header className="f jcsb">

				<img onClick={() => window.location.href = "/"} src={logoMain} className="ml" />

				<div className="mla headerIcons">
					<HeaderIcon route={SEARCH_ROUTE}><Search /></HeaderIcon>
					<HeaderIcon route={ARTICLES_ROUTE}><ArticleOutlined /></HeaderIcon>
					<HeaderIcon route={LIKED_PRODS_ROUTE}><FavoriteBorder /></HeaderIcon>
					<HeaderIcon route={CART_ROUTE}><AddShoppingCart /></HeaderIcon>
					<HeaderIcon route={USER_ORDERS}><LayersOutlined /></HeaderIcon>
					<HeaderIcon route={PROFILE_ROUTE}><PersonOutline /></HeaderIcon>
				</div>

				<HeaderMenu />

			</header>
			{/* header is fixed, so need this trick div (adds margin-bottom) */}
			<div className="mb4 op0">"needs content"</div>
		</>
	)
}
// 