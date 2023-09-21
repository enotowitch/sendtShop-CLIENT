import { Share } from "@mui/icons-material";
import { useContext } from "react";
import { Context } from "../../Context";
import Helmet from "../helmet/Helmet";
import parseTextEditorImg from "../textEditor/parseTextEditorImg"

export default function _Share({ obj }) {

	const { dialogSet } = useContext(Context)
	let { type, title, img, textEditorValue, _id } = obj
	img = img?.[0] || parseTextEditorImg(textEditorValue)

	function onClick() {
		dialogSet(prev => ({
			...prev,
			dialogShow: true,
			dialogContentName: "share",
			dialogContent: { type, _id },
			dialogTitle: `Share ${type}: ${title}`,
			dialogImg: img,
			dialogHasButtons: false
		}))
	}

	return (
		<>
			<Helmet img={img} />
			<Share className="mr010" onClick={onClick} />
		</>
	)
}
