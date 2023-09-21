import React, { useContext } from "react"
import { Context } from "../../Context"
import Logout from "./Logout"
import cleanTimestamp from "../../utils/cleanTimestamp"
import UserOrders from "../order/UserOrders"

export default function ProfileInfo() {

	const { user, productsWithDeleted } = useContext(Context)

	return (
		<section className="wS m0a">
			<div className="title">Email: </div>
			<div className="mb">{user?.email}</div>
			<div className="title">Account Created: </div>
			<div className="mb">{cleanTimestamp(user?.createdAt)}</div>
			<div className="title">Products Viewed: </div>
			<div>{user?.productViewed?.length || 0} / {productsWithDeleted?.length}</div>
			<UserOrders />

			<Logout />
		</section>
	)
}
