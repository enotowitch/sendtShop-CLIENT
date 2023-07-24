// npm i @mui/material @emotion/react @emotion/styled @mui/icons-material 
// npm i firebase sass axios react-router-dom

import AppRouter from "./components/appRouter/AppRouter";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Snackbar from "./components/snackbar/Snackbar";

export default function App() {
	return (
		<>
			<Header />

			{/* nail down the footer */}
			<div style={{ minHeight: "100vh" }}>
				<AppRouter />
				<Snackbar />
			</div>

			<Footer />
		</>
	)
}