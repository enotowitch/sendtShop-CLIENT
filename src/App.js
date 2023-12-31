// npm i @mui/material @emotion/react @emotion/styled @mui/icons-material 
// npm i firebase sass axios react-router-dom 
// npm i react-simplemde-editor marked-react
// npm i better-react-carousel --save
// npm i react-simple-star-rating
// npm i react-zoom-slider --force
// npm i react-share --save
// npm i react-helmet

import AppRouter from "./components/appRouter/AppRouter";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Snackbar from "./components/snackbar/Snackbar";
import Dialog from "./components/dialog/Dialog";
import { useContext } from "react";
import { Context } from "./Context";
import CartReminder from "./components/cart/CartReminder";
import ScrollTop from "./components/other/ScrollTop";

export default function App() {

	const { theme } = useContext(Context) // dark/light

	return (
		<div className={theme}>
			<Header />

			{/* nail down the footer */}
			<div style={{ minHeight: "100vh", overflowX: "hidden" }}>
				<AppRouter />
				<CartReminder />
				<Snackbar />
				<Dialog />
				<ScrollTop />
			</div>

			<Footer />
		</div>
	)
}