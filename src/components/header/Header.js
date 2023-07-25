import { AddShoppingCart, FavoriteBorder, PersonOutline, Search } from "@mui/icons-material"
import "./index.scss"
import { Link, useLocation } from "react-router-dom"
import { BRAND_COLOR, CART_ROUTE, LIKED_PRODS_ROUTE, PROFILE_ROUTE, SEARCH_ROUTE } from "../../consts"
import logoMain from "../../img/logoMain.svg"
import HeaderMenu from "./HeaderMenu"

export default function Header() {

	const { pathname } = useLocation()

	return (
		<>
			<header className="f jcsb">

				<img onClick={() => window.location.href = "/"} src={logoMain} className="ml" />

				<div className="mla">
					{pathname === SEARCH_ROUTE ? <Link to={SEARCH_ROUTE}><Search sx={{ fill: BRAND_COLOR }} /></Link> : <Link to={SEARCH_ROUTE}><Search /></Link>}
					{pathname === LIKED_PRODS_ROUTE ? <Link to={LIKED_PRODS_ROUTE}><FavoriteBorder sx={{ fill: BRAND_COLOR }} /></Link> : <Link to={LIKED_PRODS_ROUTE}><FavoriteBorder /></Link>}
					{pathname === CART_ROUTE ? <Link to={CART_ROUTE}><AddShoppingCart sx={{ fill: BRAND_COLOR }} /></Link> : <Link to={CART_ROUTE}><AddShoppingCart /></Link>}
					{pathname === PROFILE_ROUTE ? <Link to={PROFILE_ROUTE} className="profile"><PersonOutline sx={{ fill: BRAND_COLOR }} /></Link> : <Link to={PROFILE_ROUTE} className="profile"><PersonOutline /></Link>}
				</div>

				<HeaderMenu />

			</header>
			{/* header is fixed, so need this trick div (adds margin-bottom) */}
			<div className="mb4 op0">"needs content"</div>
		</>
	)
}
