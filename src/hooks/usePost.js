import parseForm from "../utils/parseForm"
import * as api from "../api"
import useAddImg from "../components/addImg/useAddImg"
import useAnimation from "./useAnimation"
import { useParams } from "react-router-dom"

export default function usePost() { // TODO move to post folder

	// ! addPost
	const { imgArr } = useAddImg()

	async function addPost(e, type) {
		// e = form event (onSubmit)
		// type=product/article/comment/review...
		e.preventDefault()

		const img = await imgArr() // get uploadedImg url (on server) to store in DB

		const { form } = parseForm(e)
		const res = await api.addPost({ ...form, type, img })

		if (type === "review") {
			window.location.reload() // TODO update list
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
		// TODO delete img from server

		const res = await api.deletePost(type, id)
		// TODO go to "/products" || "/articles" dep.on type after delete
		window.location.pathname.includes(type + "/") && (window.location.href = `/`) // if you delete product/article in product_full/article_full go to "/" skipping all below code
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

		const { form } = parseForm(e)
		const res = await api.editPost({ ...form, type, _id, img })
		res.ok && (window.location.href = `/${type}/${_id}`)
	}

	return (
		{ addPost, deletePost, editPost }
	)
}
