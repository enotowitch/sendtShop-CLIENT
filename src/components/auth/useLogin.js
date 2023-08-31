import * as api from "../../api"
import { useContext } from "react";
import { Context } from "../../Context"
import parseForm from "../../utils/parseForm"
import useSnackbar from "../../hooks/useSnackbar";
import { PROFILE_ROUTE } from "../../consts";
// firebase
import { auth, googleProvider } from "./firebase-config"
import { signInWithPopup, signOut } from "firebase/auth"

export default function useLogin() {

	const { userSet } = useContext(Context)
	const { showSnackbar } = useSnackbar()

	const signInWithGoogle = async (e) => {
		e.preventDefault()
		// get google verified email 
		const res = await signInWithPopup(auth, googleProvider);
		const email = res.user.email
		// add user to DB
		const { token, user } = await api.loginGoogle(email)
		// add token to localStorage
		token && localStorage.setItem("token", token)
		// save user to context
		user && userSet(user)
		// go to profile page
		window.location.href = PROFILE_ROUTE
	};

	const logout = async (e) => {
		e.preventDefault()
		await signOut(auth) // logout from google
		localStorage.removeItem("token") // delete token from localStorage
		window.location.reload()
	}

	async function loginSendEmail(e) {
		e.preventDefault()
		const { form } = parseForm(e) // get email
		e.target.querySelector("input").value = "" // clear input email
		const res = await api.loginSendEmail(form)
		res.ok && showSnackbar({ text: "Please confirm login at: ", link: form.email, linkType: "web", linkText: form.email })
	}

	return (
		{ signInWithGoogle, logout, loginSendEmail }
	)
}
