import { ControlPoint } from "@mui/icons-material"

export default function AddIcon({ text }) {
	return (
		<div className="fc aic">
			<ControlPoint />
			<div>{text}</div>
		</div>
	)
}
