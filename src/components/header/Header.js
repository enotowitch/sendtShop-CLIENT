import { FavoriteBorder, LayersOutlined, PersonOutline, ArticleOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import "./index.scss"
import { ARTICLES_ROUTE, CART_ROUTE, LIKED_PRODS_ROUTE, PROFILE_ROUTE, SEARCH_ROUTE, USER_ORDERS } from "../../consts"
import logoMain from "../../img/logoMain.png"
import HeaderMenu from "./HeaderMenu"
import HeaderIcon from "./HeaderIcon"
import SearchIcon from "../search/SearchIcon"

export default function Header() {
	return (
		<>
			<header className="f jcsb">

				<img onClick={() => window.location.href = "/"} src={logoMain} className="ml logoMain" />

				<div className="mla headerIcons">
					<SearchIcon />
					<HeaderIcon route={ARTICLES_ROUTE}><ArticleOutlined /></HeaderIcon>
					<HeaderIcon field="likes" route={LIKED_PRODS_ROUTE}><FavoriteBorder /></HeaderIcon>
					<HeaderIcon field="cart" route={CART_ROUTE}><ShoppingCartOutlined /></HeaderIcon>
					<HeaderIcon route={USER_ORDERS}><LayersOutlined /></HeaderIcon>
					<HeaderIcon route={PROFILE_ROUTE} className="profile"><PersonOutline /></HeaderIcon>
				</div>

				<HeaderMenu />

			</header>
			{/* header is fixed, so need this trick div (adds margin-bottom) */}
			<div className="mb4 op0">"needs content"</div>
		</>
	)
}
// 