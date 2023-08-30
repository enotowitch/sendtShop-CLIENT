import React from "react"
import { Link } from "react-router-dom"
import "./index.scss"
import { ABOUT_US_ROUTE, ARTICLES_ROUTE, CONTACT_US_ROUTE, FAQ_ROUTE, PRIVACY_ROUTE, RETURNS_ROUTE, SUBSCRIBE_ROUTE, TERMS_ROUTE } from "../../consts"

export default function Footer() {
	return (
		<footer>
			<div className="f jcsa wL w100 m0a">
				{/* left */}
				<div className="fc tac wS w100">
					<div className="fw700">MENU</div>
					<Link to={ARTICLES_ROUTE}>News</Link>
					<Link to={FAQ_ROUTE}>FAQ</Link>
					<Link to={SUBSCRIBE_ROUTE}>Subscribe</Link>
					<Link to={CONTACT_US_ROUTE}>Contact Us</Link>
				</div>
				{/* center */}
				<div className="fc tac wS w100">
					<div className="fw700">HELP</div>
					<Link to={ABOUT_US_ROUTE}>About Us</Link>
					<Link to={TERMS_ROUTE}>Terms and Conditions</Link>
					<Link to={PRIVACY_ROUTE}>Privacy Policy</Link>
					<Link to={RETURNS_ROUTE}>Return Policy</Link>
				</div>
				{/* right */}
				<div className="fc tac wS w100">
					<div className="fw700">VISIT US</div>
					<Link to="https://www.etsy.com/" target="_blank">Etsy</Link>
					<Link to="https://www.shopify.com/" target="_blank">Shopify</Link>
					<Link to="https://www.instagram.com/" target="_blank">Instagram</Link>
					<Link to="https://www.facebook.com/" target="_blank">Facebook</Link>
				</div>
			</div>
		</footer>
	)
}
