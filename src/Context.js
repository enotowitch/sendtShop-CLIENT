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

	// ! dialog
	const [dialogShow, dialogShowSet] = useState(false)
	const [dialogContentName, dialogContentNameSet] = useState("")
	const [dialogContent, dialogContentSet] = useState("")
	const [dialogTitle, dialogTitleSet] = useState("")
	const [dialogImg, dialogImgSet] = useState("")
	const [dialogHasButtons, dialogHasButtonsSet] = useState(true)
	// ? dialog

	// ! uploadedImg: AddImg
	const [uploadedImg, uploadedImgSet] = useState([])

	// ! uploadedArchive: AddArchive
	const [uploadedArchive, uploadedArchiveSet] = useState([])

	// ! menu
	const [showMenu, showMenuSet] = useState(false) // Burger menu

	// ! filter posts
	const [filterPostsQuery, filterPostsQuerySet] = useState({ tag: "", text: "", sort: "createdAt&desc" }) // eg: {tag:sale, text:someText, sort:price&asc}

	// ! skip
	const [skip, skipSet] = useState(0) // for pagination: how many posts to skip

	// ! showLoadMore
	const [showLoadMore, showLoadMoreSet] = useState(true) // for pagination: LoadMore btn

	// ! theme
	const [theme, themeSet] = useState(localStorage.getItem("theme") || "light")

	// ! RETURN
	return (
		<Context.Provider value={{
			// user
			user, userSet,
			// updateContext
			update, updateContext,
			// snackbar
			snackbarShow, snackbarShowSet, snackbarText, snackbarTextSet, snackbarLink, snackbarLinkSet, snackbarLinkText, snackbarLinkTextSet, snackbarLinkType, snackbarLinkTypeSet,
			// dialog
			dialogShow, dialogShowSet, dialogContentName, dialogContentNameSet, dialogContent, dialogContentSet, dialogTitle, dialogTitleSet, dialogImg, dialogImgSet, dialogHasButtons, dialogHasButtonsSet,
			// uploadedImg: AddImg
			uploadedImg, uploadedImgSet,
			// uploadedArchive: AddArchive
			uploadedArchive, uploadedArchiveSet,
			// menu
			showMenu, showMenuSet,
			// filter posts
			filterPostsQuery, filterPostsQuerySet,
			// pagination skip
			skip, skipSet,
			// pagination LoadMore btn
			showLoadMore, showLoadMoreSet,
			// theme
			theme, themeSet
		}}>

			{children}

		</Context.Provider>
	)
}

export { ContextProvider, Context }