import React from "react"
import CartProducts from "./CartProducts"
import CartSteps from "./CartSteps"
import PostsOther from "../other/PostsOther"

export default function Cart() {
	return (
		<>
			<>
				<CartSteps step={1} />
				<CartProducts />
			</>
			<PostsOther type="product" className="mt4" />
		</>
	)
}
