import { KeyboardArrowUp } from "@mui/icons-material";
import "./index.scss"
import useIsNotOnTop from "../../hooks/useIsNotOnTop";

export default function ScrollTop() {

	const { isNotOnTop } = useIsNotOnTop()

	return (
		<KeyboardArrowUp className={`scrollTop ${isNotOnTop ? "db" : "dn"}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
	)
}
