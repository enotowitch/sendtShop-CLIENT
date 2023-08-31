import { useContext } from "react"
import { FacebookIcon, TwitterIcon, FacebookShareButton, TwitterShareButton } from "react-share"
import { Context } from "../../Context"
import CartCard from "../cart/CartCard"

export default function useDialog() {

	const { dialogImg, dialogContent } = useContext(Context)
	// * all functions are used via eval(dialogContentName) in Dialog

	// ! share
	function share() {
		const url = window.location.href

		return <div className="f g">
			{/* ! todo can add img here to display in share fb (real img from our server )*/}
			<FacebookShareButton url={dialogImg} quote={"Buy here:"} hashtag={"#sale"}>
				<FacebookIcon />
			</FacebookShareButton>
			<TwitterShareButton url={url} title={"Buy here:"} hashtags={["sale", "best_shop"]}>
				<TwitterIcon />
			</TwitterShareButton>
		</div>
	}
	// ? share

	// ! addedToCart
	function addedToCart() {
		return <CartCard obj={dialogContent} totalPrice={dialogContent.totalPrice} />
	}
	// ? addedToCart

	return (
		{ share, addedToCart }
	)
}
