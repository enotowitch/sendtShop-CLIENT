import { useNavigate } from "react-router-dom";

export default function CartCardImg({ obj }) {

	const { img, _id, prodFullSelectedImgInd } = obj
	const navigate = useNavigate()

	return (
		// display img that was selected in prodFull: eg: color: red OR first img
		<img src={img?.[prodFullSelectedImgInd] || img?.[0]}
			onClick={() => navigate(`/product/${_id}`)}
		/>
	)
}
