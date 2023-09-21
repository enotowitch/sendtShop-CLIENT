import React from 'react'
import Or from '../auth/Or'
import { Link } from 'react-router-dom'
import AdminIcon from '../profile/AdminIcon'
import { PendingOutlined, CheckCircleOutlined } from '@mui/icons-material'
import { ADMIN_ORDERS_NEW, ADMIN_ORDERS_SENT, PROFILE_ROUTE, USER_ORDERS, USER_ORDERS_NEW, USER_ORDERS_SENT } from '../../consts'

export default function Orders({ role }) {

	// define links
	let linkToNew, linkToSent
	if (role === "user") { // for user orders
		linkToNew = USER_ORDERS_NEW
		linkToSent = USER_ORDERS_SENT
	}
	if (role === "admin") { // for admin orders
		linkToNew = ADMIN_ORDERS_NEW
		linkToSent = ADMIN_ORDERS_SENT
	}

	return (
		<section className="fcc g w100 px0">
			<Or text={`${role.toUpperCase()} ORDERS`} />
			<Link to={linkToNew}><AdminIcon text="pending"><PendingOutlined /></AdminIcon></Link>
			<Link to={linkToSent}><AdminIcon text="sent"><CheckCircleOutlined /></AdminIcon></Link>
		</section>
	)
}
