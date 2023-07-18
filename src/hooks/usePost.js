import parseForm from "../utils/parseForm"
import * as api from "../api"
import useAddImg from "../components/addImg/useAddImg"
import useAnimation from "./useAnimation"
import { useParams } from "react-router-dom"

export default function usePost() {

	// ! addPost
	const { addImg } = useAddImg()

	async function addPost(e, type) {
		// e = form event (onSubmit)
		// type=product/article/comment/review...
		e.preventDefault()

		const img = await addImg() // get uploadedImg url (on server) to store in DB

		const { form } = parseForm(e)
		const res = await api.addPost({ ...form, type, img })
		res.ok && (window.location.href = "/")
	}

	// ! deletePost
	const { deleteAnimation } = useAnimation()

	async function deletePost(e, type, id) {
		// e = form event (onSubmit)
		// type=product/article/comment/review...
		e.preventDefault()
		// TODO delete img from server

		const res = await api.deletePost(type, id) // TODO make all args {}
		res.ok && deleteAnimation(e, type)
	}

	// ! editPost
	const { id: _id } = useParams()

	async function editPost(e, type) {
		// e = form event (onSubmit)
		// type=product/article/comment/review...
		e.preventDefault()

		// TODO delete old imgs from server if changed
		const img = await addImg() // get uploadedImg url (on server) to store in DB

		const { form } = parseForm(e)
		const res = await api.editPost({ ...form, type, _id, img })
		res.ok && (window.location.href = "/") // TODO go to `full type` page
	}

	return (
		{ addPost, deletePost, editPost }
	)
}
