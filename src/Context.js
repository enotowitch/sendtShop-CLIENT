import React, { useEffect, useState } from "react"
import * as api from "./api"

const Context = React.createContext()

function ContextProvider({ children }) {

	// ! user
	const [user, userSet] = useState(null) // null || {}

	useEffect(() => {
		async function autoAuth() {
			const token = localStorage.getItem("token")
			if (token) { // if user loged in => auto auth on every reload
				const res = await api.autoAuth(token)
				res?.user && userSet(res?.user)
			}
		}
		autoAuth()

	}, [])
	// ? user

	// ! snackbar
	const [snackbarShow, snackbarShowSet] = useState(false)
	const [snackbarText, snackbarTextSet] = useState("")
	const [snackbarLink, snackbarLinkSet] = useState("")
	const [snackbarLinkType, snackbarLinkTypeSet] = useState("") // local(inside app) || web
	// ? snackbar

	// ! uploadedImg: AddImg
	const [uploadedImg, uploadedImgSet] = useState(null) // AddImg: jobs/folios
	const [order, orderSet] = useState(null) // null || {} // order admin clicked to display like Context user

	// ! RETURN
	return (
		<Context.Provider value={{
			// user
			user, userSet,
			// snackbar
			snackbarShow, snackbarShowSet, snackbarText, snackbarTextSet, snackbarLink, snackbarLinkSet, snackbarLinkType, snackbarLinkTypeSet,
			// uploadedImg: AddImg
			uploadedImg, uploadedImgSet,
			// order
			order, orderSet
		}}>

			{children}

		</Context.Provider>
	)
}

export { ContextProvider, Context }