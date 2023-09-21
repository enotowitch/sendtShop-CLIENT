import parseForm from "../utils/parseForm"
import * as api from "../api"
import useAddImg from "../components/addImg/useAddImg"
import useAddArchive from "../components/addArchive/useAddArchive"
import useAnimation from "./useAnimation"
import { useParams } from "react-router-dom"
import { MAIN_ROUTE } from "../consts"
import { useContext } from "react"
import { Context } from "../Context"

export default function usePost() { // TODO move to post folder

	const { imgArr } = useAddImg()
	const { archiveArr } = useAddArchive()
	const { updateContext } = useContext(Context)

	// ! addPost
	async function addPost(e, type) {
		// e = form event (onSubmit)
		// type=product/article/comment/review...
		e.preventDefault()

		const img = await imgArr() // get uploadedImg url (on server) to store in DB
		const archive = await archiveArr() // get uploadedArhive url (on server) to store in DB

		const { form } = parseForm(e)
		const res = await api.addPost({ ...form, type, img, archive })

		if (type === "review") {
			updateContext()
			return // skip going to location
		}
		res.ok && (window.location.href = `/${type}/${res._id}`)
	}

	// ! deletePost
	const { deleteAnimation } = useAnimation()

	async function deletePost(e, type, id) {
		// e = form event (onSubmit)
		// type=product/article/comment/review...
		e.preventDefault()

		const res = await api.deletePost(type, id)
		// TODO go to "/products" || "/articles" dep.on type after delete
		window.location.pathname.includes(type + "/") && (window.location.href = `/${type + "s"}`) // if you delete product/article in product_full/article_full go to "/type..." skipping all below code
		res.ok && deleteAnimation(e, type)
	}

	// ! hidePost
	async function hidePost(e, type, id) {
		// e = form event (onSubmit)
		// type=product/article/comment/review...
		e.preventDefault()

		const res = await api.hidePost(type, id)
		// TODO go to "/products" || "/articles" dep.on type after delete
		window.location.pathname.includes(type + "/") && (window.location.href = `/hidden/${type + "s"}`) // if you delete product/article in product_full/article_full go to "/hidden/type..." skipping all below code
		res.ok && deleteAnimation(e, type)
	}

	// ! unHide
	async function unHidePost(e, type, id) {
		// e = form event (onSubmit)
		// type=product/article/comment/review...
		e.preventDefault()

		const res = await api.unHidePost(type, id)
		// TODO go to "/products" || "/articles" dep.on type after delete
		window.location.pathname.includes(type + "/") && (window.location.href = MAIN_ROUTE) // if you delete product/article in product_full/article_full go to "/" skipping all below code
		res.ok && deleteAnimation(e, type)
	}

	// ! editPost
	const { id: _id } = useParams()

	async function editPost(e, type) {
		// e = form event (onSubmit)
		// type=product/article/comment/review...
		e.preventDefault()

		// TODO delete old imgs from server if changed
		const img = await imgArr() // get uploadedImg url (on server) to store in DB
		const archive = await archiveArr() // get uploadedArhive url (on server) to store in DB

		const { form } = parseForm(e)
		const res = await api.editPost({ ...form, type, _id, img, archive })
		res.ok && (window.location.href = `/${type}/${_id}`)
	}

	return (
		{ addPost, deletePost, hidePost, unHidePost, editPost }
	)
}
