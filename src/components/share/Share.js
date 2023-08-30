import { Share } from "@mui/icons-material";
import { useContext } from "react";
import { Context } from "../../Context";
import Helmet from "../helmet/Helmet";

export default function _Share({ obj }) {

	const { dialogShowSet, dialogContentNameSet, dialogTitleSet, dialogImgSet, dialogHasButtonsSet } = useContext(Context)
	const { type, title, img } = obj

	function onClick() {
		dialogShowSet(true)
		dialogContentNameSet("share")
		dialogTitleSet(`Share ${type}: ${title}`)
		dialogImgSet(img)
		dialogHasButtonsSet(false)
	}

	return (
		<>
			<Helmet img={img} />
			<Share className="mr010" onClick={onClick} />
		</>
	)
}
