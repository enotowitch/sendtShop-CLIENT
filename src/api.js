import axios from "axios"
import { baseURL } from "./consts"

const instance = axios.create({
	baseURL: baseURL
})

instance.interceptors.request.use(config => {
	config.headers.Authorization = localStorage.getItem("token")
	return config
})

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

// ! addPost
export const addPost = async (formAndType) => {
	try {
		const { data } = await instance.post(`/addPost`, { ...formAndType })
		return data
	} catch (error) {
		console.log(error)
	}
}

// ! addImg
export const addImg = async (formData) => {
	try {
		const { data } = await instance.post("/upload", formData)
		return data
	} catch (error) {
		console.log(error)
	}
}

// ! getAllPosts
export const getAllPosts = async (type) => {
	try {
		const { data } = await instance.post("/getAllPosts", { type })
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