import React, { useEffect, useState } from "react"
import * as api from "./api"

const Context = React.createContext()

function ContextProvider({ children }) {

	// ! updateContext
	const [update, updateSet] = useState(0) // to trigger Context update when its state changed (fixes: "1-time-old-state")
	function updateContext() {
		updateSet(prev => prev + 1)
	}
	// ? updateContext

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

	}, [update])
	// ? user

	// ! snackbar
	const [snackbarShow, snackbarShowSet] = useState(false)
	const [snackbarText, snackbarTextSet] = useState("")
	const [snackbarLink, snackbarLinkSet] = useState("")
	const [snackbarLinkText, snackbarLinkTextSet] = useState("")
	const [snackbarLinkType, snackbarLinkTypeSet] = useState("") // local(inside app) || web
	// ? snackbar

	// ! uploadedImg: AddImg
	const [uploadedImg, uploadedImgSet] = useState([])

	// ! menu
	const [showMenu, showMenuSet] = useState(false) // Burger menu

	// ! filter posts
	const [filterPostsQuery, filterPostsQuerySet] = useState({ tag: "", text: "", sort: "createdAt&desc" }) // eg: {tag:sale, text:someText, sort:price&asc}

	// ! skip
	const [skip, skipSet] = useState(0) // for pagination

	// ! RETURN
	return (
		<Context.Provider value={{
			// user
			user, userSet,
			// updateContext
			update, updateContext,
			// snackbar
			snackbarShow, snackbarShowSet, snackbarText, snackbarTextSet, snackbarLink, snackbarLinkSet, snackbarLinkText, snackbarLinkTextSet, snackbarLinkType, snackbarLinkTypeSet,
			// uploadedImg: AddImg
			uploadedImg, uploadedImgSet,
			// menu
			showMenu, showMenuSet,
			// filter posts
			filterPostsQuery, filterPostsQuerySet,
			// pagination skip
			skip, skipSet
		}}>

			{children}

		</Context.Provider>
	)
}

export { ContextProvider, Context }