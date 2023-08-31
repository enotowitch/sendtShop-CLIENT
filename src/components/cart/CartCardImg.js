import { useNavigate } from "react-router-dom";

export default function CartCardImg({ img, productId }) {

	const navigate = useNavigate()

	return (
		<img src={img?.[0]} onClick={() => navigate(`/product/${productId}`)} />
	)
}
