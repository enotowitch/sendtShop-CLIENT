import React from "react"
import usePosts from "../../hooks/usePosts"
import OrderCard from "./OrderCard"

export default function OrderCards() {

	const { all } = usePosts("order")

	// TODO ??? map here + key
	return (
		<OrderCard orders={all} />
	)
}
