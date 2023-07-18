import { Box, TextField, Button } from "@mui/material"
import useLogin from "./useLogin"
import "./index.scss"
import Or from "./Or"

export default function Login() {

	const { signInWithGoogle, loginSendEmail } = useLogin()

	return (
		<section className="wS m0a">
			<Box className="title tac mb">Sign In</Box>
			<form className="fc aic" onSubmit={loginSendEmail}>
				<TextField
					required
					name="email"
					type="email"
					label="email"
					helperText="You will get email notification. Please confirm it."
				/>
				<Button type="submit" variant="contained" className="mt2">Sign in</Button>

				<Or />

				<Button onClick={signInWithGoogle} variant="contained" className="mt2 googleBg">Sign in with Google</Button>
			</form>
		</section>
	)
}
