import { useContext } from "react"
import { FacebookIcon, TwitterIcon, FacebookShareButton, TwitterShareButton } from "react-share"
import { Context } from "../../Context"
import CartCard from "../cart/CartCard"
import { CART_ROUTE } from '../../consts';
import { useNavigate } from 'react-router-dom';
import usePost from "../../hooks/usePost"
import useSnackbar from "../../hooks/useSnackbar"; // TODO move to snackbar folder
import InputButton from "../form/InputButton";
import useCopyToClipBoard from "../../hooks/useCopyToClipBoard";

export default function useDialog() {

	const { dialog, dialogSet, updateContext, prodFullSelectedImgInd } = useContext(Context)
	// * all functions are used via eval(dialogContentName) in Dialog

	// ! share
	const { copyToClipBoard } = useCopyToClipBoard()

	function share() {
		const { type, _id } = dialog.dialogContent
		const url = `${window.location.origin}/${type}/${_id}`

		return (
			<div className="fcc g">
				<FacebookShareButton url={dialog?.dialogImg} quote={"Buy here:"} hashtag={"#sale"}>
					<FacebookIcon />
				</FacebookShareButton>
				<TwitterShareButton url={url} title={"Buy here:"} hashtags={["sale", "best_shop"]}>
					<TwitterIcon />
				</TwitterShareButton>

				<InputButton
					editValue={url}
					onClick={() => copyToClipBoard(null, document.querySelector(".inputButton input").value)}
				/>
			</div>
		)
	}
	// ? share

	// ! addedToCart
	function addedToCart() {
		// ! get img selected: to show in dialog
		// (eg: color: green) and rewrite img in dialog (eg: img[0] to img[2])
		let { img } = dialog?.dialogContent
		img = [img[prodFullSelectedImgInd]]
		// ? get img selected
		return <CartCard obj={{ ...dialog?.dialogContent, img }} totalPrice={dialog?.dialogContent.totalPrice} />
	}

	// ! ordered
	function ordered() {
		return (
			<div>You will receive an email when it is sent</div>
		)
	}

	// ! goToCart
	const navigate = useNavigate()
	function goToCart() {
		navigate(CART_ROUTE)
		dialogSet({ dialogShow: false })
	}

	// ! deletePost
	const { deletePost: _deletePost } = usePost()
	const { showSnackbar } = useSnackbar()

	function deletePost() {
		const { e, type, _id } = dialog?.dialogRightBtnFnParams
		_deletePost(e, type, _id)
		dialogSet({ dialogShow: false })
		updateContext()
		// eg:               product/article
		showSnackbar({ text: `${type} deleted` })
	}
	// ? deletePost

	// ! hidePost
	const { hidePost: _hidePost } = usePost()

	function hidePost() {
		const { e, type, _id } = dialog?.dialogRightBtnFnParams
		_hidePost(e, type, _id)
		dialogSet({ dialogShow: false })
		updateContext()
		// eg:               product				  /hidden/products
		showSnackbar({ text: `${type} `, link: `/hidden/${type + "s"}`, linkText: "hidden" })
	}
	// ? hidePost

	// ! unHidePost
	const { unHidePost: _unHidePost } = usePost()
	function unHidePost() {
		const { e, type, _id } = dialog?.dialogRightBtnFnParams
		_unHidePost(e, type, _id)
		dialogSet({ dialogShow: false })
		updateContext()
		// eg:               product				  /products
		showSnackbar({ text: `${type} `, link: `/${type + "s"}`, linkText: "unhidden" })
	}
	// ? unHidePost

	return (
		{ share, addedToCart, ordered, goToCart, deletePost, hidePost, unHidePost }
	)
}
