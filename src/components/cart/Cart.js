import React, { useContext } from "react"
import { Context } from "../../Context"
import usePosts from "../../hooks/usePosts"
import CartCard from "./CartCard"

export default function Cart() {

	const { user } = useContext(Context)
	const { all } = usePosts("product")

	const cartProds = all?.filter(prod => user?.cart.includes(prod._id))

	return (
		<>
			{cartProds?.map(obj => <CartCard key={obj._id} obj={obj} />)}
		</>
	)
}
