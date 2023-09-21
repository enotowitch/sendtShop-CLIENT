import { FavoriteBorder, LayersOutlined, PersonOutline, ArticleOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import "./index.scss"
import { ARTICLES_ROUTE, CART_ROUTE, LIKED_PRODS_ROUTE, MAIN_ROUTE, PROFILE_ROUTE, SEARCH_ROUTE, USER_ORDERS } from "../../consts"
import logoMain from "../../img/logoMain.png"
import HeaderMenu from "./HeaderMenu"
import HeaderIcon from "./HeaderIcon"
import SearchIcon from "../search/SearchIcon"
import ThemeSwitch from "./ThemeSwitch"
import useIsNotOnTop from "../../hooks/useIsNotOnTop"

export default function Header() {

	const { isNotOnTop } = useIsNotOnTop()

	return (
		<>
			<header className={`f jcsb ${isNotOnTop ? "op05" : ""}`}>

				<HeaderIcon route={MAIN_ROUTE}>
					<div className="fcc fz45">
						<img src={logoMain} className="ml logoMain" />
						<span className="white ffFuggles">sendt-3d</span>
					</div>
				</HeaderIcon>

				<div className="mla headerIcons">
					<HeaderIcon text="search" className="aife"><SearchIcon /></HeaderIcon>
					<HeaderIcon text="theme"><ThemeSwitch /></HeaderIcon>
					<HeaderIcon text="articles" route={ARTICLES_ROUTE}><ArticleOutlined /></HeaderIcon>
					<HeaderIcon text="likes" field="likes" route={LIKED_PRODS_ROUTE}><FavoriteBorder /></HeaderIcon>
					<HeaderIcon text="cart" field="cart" route={CART_ROUTE}><ShoppingCartOutlined /></HeaderIcon>
					<HeaderIcon text="orders" route={USER_ORDERS}><LayersOutlined /></HeaderIcon>
					<HeaderIcon text="profile" route={PROFILE_ROUTE} className="profile"><PersonOutline /></HeaderIcon>
				</div>

				<HeaderMenu />

			</header>
			{/* header is fixed, so need this trick div (adds margin-bottom) */}
			<div className="mb4 op0">"needs content"</div>
		</>
	)
}