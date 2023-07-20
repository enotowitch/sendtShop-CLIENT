import React, { useContext } from "react"
import { Route, Routes } from "react-router-dom"
import PostAdd from "../post/PostAdd"
import PostCards from "../post/PostCards"
import PostFull from "../post/PostFull"
import VerifyLoginToken from "../auth/VerifyLoginToken"
import Profile from "../profile/Profile"
import Cart from "../cart/Cart"
import VerifyOrderToken from "../cart/VerifyOrderToken"
import OrderCards from "../order/OrderCards"
import { Context } from "../../Context"
import ClickProfile from "./ClickProfile"
import Shipping from "../cart/Shipping"
import OrderSendEmailTrack from "../order/OrderSendEmailTrack"

export default function AppRouter() {

	const { user } = useContext(Context)

	return (
		<Routes>
			<Route exact path="/profile" element={<Profile />} />
			<Route exact path="/verifyLoginToken/:token" element={<VerifyLoginToken />} />
			{/* product */}
			<Route exact path="/add/product" element={<PostAdd type="product" />} />
			<Route exact path="/" element={<PostCards type="product" />} />
			<Route exact path="/edit/product/:id" element={<PostAdd type="product" />} />
			<Route exact path="/product/:id" element={<PostFull type="product" />} />
			{/* article */}
			<Route exact path="/add/article" element={<PostAdd type="article" />} />
			<Route exact path="/articles" element={<PostCards type="article" />} />
			{/* USER ROUTES */}
			{user &&
				<>
					{/* cart */}
					<Route exact path="/cart" element={<Cart />} />
					<Route exact path="/cart/shipping" element={<Shipping />} />
					{/* order */}
					<Route exact path="/verifyOrderToken/:token" element={<VerifyOrderToken />} />
					<Route exact path="/orders" element={<OrderCards />} />
					<Route exact path="/order" element={<Cart />} />
					<Route exact path="/order/shipping" element={<Shipping />} />
					<Route exact path="/order/sent" element={<OrderSendEmailTrack />} />
				</>
			}
			{/* NO ROUTES FOUND */}
			{/* click Profile(Login) if no user */}
			<Route path="*" element={<ClickProfile />} />
		</Routes>
	)
}
