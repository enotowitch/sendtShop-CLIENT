import axios from "axios"
import { baseURL } from "./consts"

const instance = axios.create({
	baseURL: baseURL
})

instance.interceptors.request.use(config => {
	config.headers.Authorization = localStorage.getItem("token")
	return config
})

// !! AUTH
// ! loginGoogle
export const loginGoogle = async (email) => {
	try {
		const { data } = await instance.post(`/loginGoogle`, { email })
		return data
	} catch (error) {
		console.log(error)
	}
}

// ! autoAuth
export const autoAuth = async (token) => {
	try {
		const { data } = await instance.post(`/autoAuth`, { token })
		return data
	} catch (error) {
		console.log(error)
	}
}

// ! loginSendEmail
export const loginSendEmail = async (form) => {
	try {
		const { data } = await instance.post(`/loginSendEmail`, { ...form })
		return data
	} catch (error) {
		console.log(error)
	}
}
// ?? AUTH

// !! POST
// ! addPost
export const addPost = async (formAndOtherStuff) => {
	try {
		const { data } = await instance.post(`/addPost`, { ...formAndOtherStuff })
		return data
	} catch (error) {
		console.log(error)
	}
}

// ! test
export const test = async () => { // TODO delete
	try {
		const { data } = await instance.post(`/test`)
		console.log(data)
		return data
	} catch (error) {
		console.log(error)
	}
}

// ! addFile
export const addFile = async (formData) => {
	try {
		const { data } = await instance.post("/upload", formData)
		return data
	} catch (error) {
		console.log(error)
	}
}

// ! deleteImg
export const deleteImg = async (imgName) => {
	try {
		const { data } = await instance.post("/deleteImg", { imgName })
		return data
	} catch (error) {
		console.log(error)
	}
}

// ! getAllPosts
export const getAllPosts = async (type, field) => {
	try {
		const { data } = await instance.post("/getAllPosts", { type, field })
		return data
	} catch (error) {
		console.log(error)
	}
}

// ! filterPosts
export const filterPosts = async (type, filterPostsQuery, skip) => {
	try {
		const { data } = await instance.post("/filterPosts", { type, filterPostsQuery, skip })
		return data
	} catch (error) {
		console.log(error)
	}
}

// ! deletePost
export const deletePost = async (type, _id) => {
	try {
		const { data } = await instance.post("/deletePost", { type, _id })
		return data
	} catch (error) {
		console.log(error)
	}
}

// ! fullPost
export const fullPost = async (type, _id) => {
	try {
		const { data } = await instance.post("/fullPost", { type, _id })
		return data
	} catch (error) {
		console.log(error)
	}
}

// ! editPost
export const editPost = async (formAndType) => {
	try {
		const { data } = await instance.post(`/editPost`, { ...formAndType })
		return data
	} catch (error) {
		console.log(error)
	}
}

// ! pullPush
export const pullPush = async ({ col, colId, field, item, action, dups, pullMode }) => {
	try {
		const { data } = await instance.post(`/pullPush`, { col, colId, field, item, action, dups, pullMode })
		return data
	} catch (error) {
		console.log(error)
	}
}

// ! deleteCartProduct
export const deleteCartProduct = async ({ product }) => {
	try {
		const { data } = await instance.post(`/deleteCartProduct`, { product })
		return data
	} catch (error) {
		console.log(error)
	}
}

// ! randomPosts
export const randomPosts = async (type) => {
	try {
		const { data } = await instance.post(`/randomPosts`, { type })
		return data
	} catch (error) {
		console.log(error)
	}
}
// ?? POST

// !! ORDER
// ! addOrder
export const addOrder = async (token) => {
	try {
		const { data } = await instance.post(`/addOrder`, { token })
		return data
	} catch (error) {
		console.log(error)
	}
}

// ! addOrder
export const orderSendEmailTrack = async (form) => {
	try {
		const { data } = await instance.post(`/orderSendEmailTrack`, { ...form })
		return data
	} catch (error) {
		console.log(error)
	}
}
// ?? ORDER

// !! OTHER
// ! contactUs
export const contactUs = async (form) => {
	try {
		const { data } = await instance.post(`/contactUs`, { ...form })
		return data
	} catch (error) {
		console.log(error)
	}
}

// ! subscribe
export const subscribe = async (form) => {
	try {
		const { data } = await instance.post(`/subscribe`, { ...form })
		return data
	} catch (error) {
		console.log(error)
	}
}

// ! editFooter
export const editFooter = async (type, textEditorValue) => {
	try {
		const { data } = await instance.post(`/editFooter`, { type, textEditorValue })
		return data
	} catch (error) {
		console.log(error)
	}
}
// ?? OTHER