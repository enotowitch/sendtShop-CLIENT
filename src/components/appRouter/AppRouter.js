import React from "react"
import { Route, Routes } from "react-router-dom"
import PostAdd from "../post/PostAdd"
import PostCards from "../post/PostCards"
import PostFull from "../post/PostFull"
import VerifyToken from "../auth/VerifyToken"
import Profile from "../profile/Profile"
import Cart from "../cart/Cart"

export default function AppRouter() {
	return (
		<Routes>
			<Route exact path="/profile" element={<Profile />} />
			<Route exact path="/verifyToken/:token" element={<VerifyToken />} />
			{/* product */}
			<Route exact path="/add/product" element={<PostAdd type="product" />} />
			<Route exact path="/" element={<PostCards type="product" />} />
			<Route exact path="/edit/product/:id" element={<PostAdd type="product" />} />
			<Route exact path="/product/:id" element={<PostFull type="product" />} />
			{/* article */}
			<Route exact path="/add/article" element={<PostAdd type="article" />} />
			<Route exact path="/cart" element={<Cart />} />
		</Routes>
	)
}
