import React, { useContext, useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import PostAdd from "../post/PostAdd"
import PostCards from "../post/PostCards"
import PostFull from "../post/PostFull"
import VerifyLoginToken from "../auth/VerifyLoginToken"
import Profile from "../profile/Profile"
import Cart from "../cart/Cart"
import VerifyOrderToken from "../cart/VerifyOrderToken"
import OrderCards from "../order/OrderCards"
import { Context } from "../../Context"
import GoToProfile from "./GoToProfile"
import Shipping from "../cart/Shipping"
import OrderSendEmailTrack from "../order/OrderSendEmailTrack"
import { ADMIN_ORDER_NEW, ADMIN_ORDERS_NEW, ADMIN_ORDERS_SENT, ADMIN_ORDER_NEW_SHIPPING, USER_ORDER, USER_ORDERS, ADMIN_ORDER_SENT, ADMIN_ORDER_SENT_SHIPPING, ADMIN_ORDER_NEW_TRACK, ADMIN_ORDER_SENT_TRACK, CART_ROUTE, USER_ORDER_SHIPPING, USER_ORDER_TRACK, ARTICLES_ROUTE, LIKED_PRODS_ROUTE, FAQ_ROUTE } from "../../consts"
import FAQPage from "../FAQ/FAQPage"
import MainPage from "../main/MainPage"

export default function AppRouter() {

	const { user } = useContext(Context)
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [useLocation().pathname])

	return (
		<Routes>
			{/* auth */}
			<Route exact path="/profile" element={<Profile />} />
			<Route exact path="/verifyLoginToken/:token" element={<VerifyLoginToken />} />
			{/* other */}
			<Route exact path={FAQ_ROUTE} element={<FAQPage />} />
			{/* product */}
			<Route exact path="/add/product" element={<PostAdd type="product" />} />
			<Route exact path="/" element={<MainPage />} />
			<Route exact path="/edit/product/:id" element={<PostAdd type="product" />} />
			<Route exact path="/product/:id" element={<PostFull type="product" />} />
			<Route exact path={LIKED_PRODS_ROUTE} element={<PostCards type="product" status="liked" title="Liked Products" />} />
			{/* article */}
			<Route exact path="/add/article" element={<PostAdd type="article" />} />
			<Route exact path={ARTICLES_ROUTE} element={<PostCards type="article" />} />
			<Route exact path="/edit/article/:id" element={<PostAdd type="article" />} />
			<Route exact path="/article/:id" element={<PostFull type="article" />} />
			{/* USER ROUTES */}
			{user &&
				<>
					{/* cart */}
					<Route exact path={CART_ROUTE} element={<Cart />} />
					<Route exact path="/cart/shipping" element={<Shipping />} />
					{/* ORDER */}
					<Route exact path="/verifyOrderToken/:token" element={<VerifyOrderToken />} />
					{/* admin order */}
					<Route exact path={ADMIN_ORDERS_NEW} element={<OrderCards title="Orders to deliver" />} />
					<Route exact path={ADMIN_ORDERS_SENT} element={<OrderCards title="Delivered orders" />} />
					<Route exact path={ADMIN_ORDER_NEW} element={<Cart />} />
					<Route exact path={ADMIN_ORDER_SENT} element={<Cart />} />
					<Route exact path={ADMIN_ORDER_NEW_SHIPPING} element={<Shipping />} />
					<Route exact path={ADMIN_ORDER_SENT_SHIPPING} element={<Shipping />} />
					<Route exact path={ADMIN_ORDER_NEW_TRACK} element={<OrderSendEmailTrack />} />
					<Route exact path={ADMIN_ORDER_SENT_TRACK} element={<OrderSendEmailTrack />} />
					{/* user order */}
					<Route exact path={USER_ORDERS} element={<OrderCards title="Previous Orders" />} />
					<Route exact path={USER_ORDER} element={<Cart />} />
					<Route exact path={USER_ORDER_SHIPPING} element={<Shipping />} />
					<Route exact path={USER_ORDER_TRACK} element={<OrderSendEmailTrack />} />
				</>
			}
			{/* NO ROUTES FOUND */}
			{/* click Profile(Login) if no user */}
			<Route path="*" element={<GoToProfile />} />
		</Routes>
	)
}
// test commit
