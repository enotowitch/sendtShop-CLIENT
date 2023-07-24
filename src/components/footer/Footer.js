import React from "react"
import { Link } from "react-router-dom"
import "./index.scss"

export default function Footer() {
	return (
		<footer>
			<div className="f jcsa wL w100 m0a">
				{/* left */}
				<div className="fc tac wS w100">
					<div className="fw700">MENU</div>
					<Link>News</Link>
					<Link>About Us</Link>
					<Link>Subscribe</Link>
					<Link>Contact</Link>
				</div>
				{/* center */}
				<div className="fc tac wS w100">
					<div className="fw700">HELP</div>
					<Link>Terms and Conditions</Link>
					<Link>Privacy Policy</Link>
					<Link>Return Policy</Link>
					<Link>FAQ</Link>
				</div>
				{/* right */}
				<div className="fc tac wS w100">
					<div className="fw700">VISIT US</div>
					<Link>Etsy</Link>
					<Link>Shopify</Link>
					<Link>Instagram</Link>
					<Link>Facebook</Link>
				</div>
			</div>
		</footer>
	)
}
