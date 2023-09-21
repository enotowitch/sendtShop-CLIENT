import React, { useEffect, useState } from "react"
import * as api from "./api"
import useWriteSearchParams from "./hooks/useWriteSearchParams"

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
				// if user has localStorage cart
				if (res?.user && localStorage.getItem("user")) { // if user loggen in and has localStorage cart => write to DB cart & delete local cart
					const userLocalCart = JSON.parse(localStorage.getItem("user")).cart
					const res = await api.pullPush({ col: "user", field: "cart", item: userLocalCart, action: "push" })
					res.ok && localStorage.removeItem("user")
				}
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
	const [dialog, dialogSet] = useState({
		dialogShow: false,
		dialogContentName: "",
		dialogContent: "",
		dialogTitle: "",
		dialogImg: "",
		dialogHasButtons: true,
		dialogRightBtnFn: null,
		dialogRightBtnFnParams: {},
		dialogRightBtnText: "",
		dialogLeftBtnText: ""
	})
	// ? dialog

	// ! uploadedImg: AddImg
	const [uploadedImg, uploadedImgSet] = useState([])

	// ! uploadedArchive: AddArchive
	const [uploadedArchive, uploadedArchiveSet] = useState([])

	// ! menu
	const [showMenu, showMenuSet] = useState(false) // Burger menu

	// !! filter posts
	const memoFilters = JSON.parse(localStorage.getItem("filters"))

	// ! SEARCH INPUT: searchFieldValue (searchParams.text)
	const [searchFieldValue, searchFieldValueSet] = useState(memoFilters?.text)

	// ! SORT SELECT: postSortValue (searchParams.sort)
	const [postSortValue, postSortValueSet] = useState(memoFilters?.sort)
	// ?? filter posts


	// ! skip
	const [skipProds, skipProdsSet] = useState(0) // for pagination: how many prods to skip

	// ! showLoadMore
	const [showLoadMore, showLoadMoreSet] = useState(true) // for pagination: LoadMore btn

	// ! theme
	const [theme, themeSet] = useState(localStorage.getItem("theme") || "light")

	// ! prodFullSelectedImgInd
	const [prodFullSelectedImgInd, prodFullSelectedImgIndSet] = useState(0)

	// ! products
	const [products, productsSet] = useState([])
	useEffect(() => {
		async function getAllPosts() {
			const res = await api.getAllPosts("product")
			productsSet(res)
		}

		getAllPosts()
	}, [update])
	// ? products

	// ! productsWithDeleted
	const [productsWithDeleted, productsWithDeletedSet] = useState([])
	useEffect(() => {
		async function getAllPosts() {
			const res = await api.getAllPosts("product", null, true)
			productsWithDeletedSet(res)
		}

		getAllPosts()
	}, [update])
	// ? productsWithDeleted

	// ! orders
	const [orders, ordersSet] = useState([])
	useEffect(() => {
		async function getAllPosts() {
			const res = await api.getAllPosts("order")
			ordersSet(res)
		}

		getAllPosts()
	}, [update])
	// ? orders

	// ! reviews
	const [reviews, reviewsSet] = useState([])
	useEffect(() => {
		async function getAllPosts() {
			const res = await api.getAllPosts("review")
			reviewsSet(res)
		}

		getAllPosts()
	}, [update])
	// ? reviews

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
			dialog, dialogSet,
			// uploadedImg: AddImg
			uploadedImg, uploadedImgSet,
			// uploadedArchive: AddArchive
			uploadedArchive, uploadedArchiveSet,
			// menu
			showMenu, showMenuSet,
			// searchFieldValue
			searchFieldValue, searchFieldValueSet,
			// postSortValue
			postSortValue, postSortValueSet,
			// skipProds
			skipProds, skipProdsSet,
			// pagination LoadMore btn
			showLoadMore, showLoadMoreSet,
			// theme
			theme, themeSet,
			// prodFullSelectedImgInd
			prodFullSelectedImgInd, prodFullSelectedImgIndSet,
			// products, productsWithDeleted
			products, productsSet, productsWithDeleted, productsWithDeletedSet,
			// orders
			orders, ordersSet,
			// review
			reviews, reviewsSet
		}}>

			{children}

		</Context.Provider>
	)
}

export { ContextProvider, Context }