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
import Shipping from "../cart/Shipping"
import OrderSendEmailTrack from "../order/OrderSendEmailTrack"
import { ADMIN_ORDER_NEW, ADMIN_ORDERS_NEW, ADMIN_ORDERS_SENT, ADMIN_ORDER_NEW_SHIPPING, USER_ORDER, USER_ORDERS, ADMIN_ORDER_SENT, ADMIN_ORDER_SENT_SHIPPING, ADMIN_ORDER_NEW_TRACK, ADMIN_ORDER_SENT_TRACK, CART_ROUTE, USER_ORDER_SHIPPING, USER_ORDER_TRACK, ARTICLES_ROUTE, LIKED_PRODS_ROUTE, FAQ_ROUTE, CONTACT_US_ROUTE, SUBSCRIBE_ROUTE, ABOUT_US_ROUTE, TERMS_ROUTE, PRIVACY_ROUTE, RETURNS_ROUTE, HIDDEN_ARTICLES, HIDDEN_PRODUCTS, MAIN_ROUTE, CART_SHIPPING, USER_ORDERS_NEW, USER_ORDERS_SENT, USER_ORDER_NEW, USER_ORDER_SENT, PROFILE_ROUTE } from "../../consts"
import FAQPage from "../FAQ/FAQPage"
import MainPage from "../main/MainPage"
import Test from "./Test"
import ContactUs from "../contactUs/ContactUs"
import Subscribe from "../subscribe/Subscribe"
import EditFooter from "../footer/EditFooter"
import FooterBlock from "../footer/FooterBlock"
import LikedProducts from "../product/LikedProducts"
import TestArticles from "./TestArticles"
import UserOrders from "../order/UserOrders"
import useNoUser from "../../hooks/useNoUser"

export default function AppRouter() {

	const { user, dialogSet } = useContext(Context)
	const location = useLocation().pathname
	const { noUserRedirect } = useNoUser()

	useEffect(() => {
		window.scrollTo(0, 0)
		location !== USER_ORDER_NEW && dialogSet({ dialogShow: false }) // hide dialog everewhere but USER_ORDER_NEW (dialog: "order is in queue..." must be seen)
		// visitor Allowed Locations
		const visitorAllowedLocations = [MAIN_ROUTE, ARTICLES_ROUTE, PROFILE_ROUTE, CART_ROUTE, FAQ_ROUTE, ABOUT_US_ROUTE, TERMS_ROUTE, PRIVACY_ROUTE, RETURNS_ROUTE]
		if (!visitorAllowedLocations.includes(location)) {
			if (location.includes("/product/")) return // let visitor see products
			if (location.includes("/article/")) return // let visitor see articles
			noUserRedirect()
		}
	}, [location])

	return (
		<Routes>
			{/* // ! VISITOR ROUTES */}
			{/* ORDER: user can load after some time, so route must be available for all */}
			<Route exact path="/verifyOrderToken/:token" element={<VerifyOrderToken />} />
			{/* cart */}
			<Route exact path={CART_ROUTE} element={<Cart />} />
			{/* auth */}
			<Route exact path="/profile" element={<Profile />} />
			<Route exact path="/verifyLoginToken/:token" element={<VerifyLoginToken />} />
			{/* other */}
			<Route exact path={FAQ_ROUTE} element={<FAQPage />} />
			<Route exact path={ABOUT_US_ROUTE} element={<FooterBlock type="about" />} />
			<Route exact path={TERMS_ROUTE} element={<FooterBlock type="terms" />} />
			<Route exact path={PRIVACY_ROUTE} element={<FooterBlock type="privacy" />} />
			<Route exact path={RETURNS_ROUTE} element={<FooterBlock type="returns" />} />
			{/* product */}
			<Route exact path={MAIN_ROUTE} element={<MainPage />} />
			<Route exact path="/product/:id" element={<PostFull type="product" />} />
			{/* article */}
			<Route exact path={ARTICLES_ROUTE} element={<PostCards type="article" />} />
			<Route exact path="/article/:id" element={<PostFull type="article" />} />
			{/* // ! USER ROUTES */}
			{user &&
				<>
					{/* product */}
					<Route exact path={LIKED_PRODS_ROUTE} element={<LikedProducts />} />
					{/* cart */}
					<Route exact path={CART_SHIPPING} element={<Shipping />} />
					{/* user order */}
					<Route exact path={USER_ORDERS} element={<UserOrders />} />
					<Route exact path={USER_ORDERS_NEW} element={<OrderCards title="New Orders" />} />
					<Route exact path={USER_ORDERS_SENT} element={<OrderCards title="Sent Orders" />} />
					<Route exact path={USER_ORDER} element={<Cart />} />
					<Route exact path={USER_ORDER_NEW} element={<Cart />} />
					<Route exact path={USER_ORDER_SENT} element={<Cart />} />
					<Route exact path={USER_ORDER_SHIPPING} element={<Shipping />} />
					<Route exact path={USER_ORDER_TRACK} element={<OrderSendEmailTrack />} />
					{/* other */}
					<Route exact path={CONTACT_US_ROUTE} element={<ContactUs />} />
					<Route exact path={SUBSCRIBE_ROUTE} element={<Subscribe />} />
				</>
			}
			{/* // ! ADMIN ROUTES */}
			{user?.isAdmin &&
				<>
					{/* other */}
					<Route exact path="/edit/footer/:type" element={<EditFooter />} />
					{/* product */}
					<Route exact path="/add/product" element={<PostAdd type="product" />} />
					<Route exact path="/edit/product/:id" element={<PostAdd type="product" />} />
					{/* article */}
					<Route exact path="/add/article" element={<PostAdd type="article" />} />
					<Route exact path="/edit/article/:id" element={<PostAdd type="article" />} />
					{/* hidden posts */}
					<Route exact path={HIDDEN_PRODUCTS} element={<PostCards type="product" status="hidden" title="Hidden Products" />} />
					<Route exact path={HIDDEN_ARTICLES} element={<PostCards type="article" status="hidden" title="Hidden Articles" />} />
					{/* admin order */}
					<Route exact path={ADMIN_ORDERS_NEW} element={<OrderCards title="Orders to deliver" />} />
					<Route exact path={ADMIN_ORDERS_SENT} element={<OrderCards title="Delivered orders" />} />
					<Route exact path={ADMIN_ORDER_NEW} element={<Cart />} />
					<Route exact path={ADMIN_ORDER_SENT} element={<Cart />} />
					<Route exact path={ADMIN_ORDER_NEW_SHIPPING} element={<Shipping />} />
					<Route exact path={ADMIN_ORDER_SENT_SHIPPING} element={<Shipping />} />
					<Route exact path={ADMIN_ORDER_NEW_TRACK} element={<OrderSendEmailTrack />} />
					<Route exact path={ADMIN_ORDER_SENT_TRACK} element={<OrderSendEmailTrack />} />
					{/* test // TODO delete */}
					<Route exact path="/test" element={<Test />} />
					<Route exact path="/testArticles" element={<TestArticles />} />
				</>
			}
		</Routes>
	)
}
