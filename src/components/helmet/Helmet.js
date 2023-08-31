import { Helmet } from "react-helmet"

export default function _Helmet({ img, quote }) {

	const currentUrl = window.location.href
	const title = "test title";
	const description = "test description"
	const hashtag = "#testhashtag";

	return (
		<Helmet>
			<meta charset="utf-8" />
			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<meta name="csrf_token" content="" />
			<meta property="type" content="website" />
			<meta property="url" content={currentUrl} />
			<meta name="msapplication-TileColor" content="#ffffff" />
			<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
			<meta name="theme-color" content="#ffffff" />
			<meta name="_token" content="" />
			<meta name="robots" content="noodp" />
			<meta property="title" content={title} />
			<meta property="quote" content={quote} />
			<meta name="description" content={description} />
			<meta property="image" content={img} />
			<meta property="og:locale" content="en_US" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:quote" content={quote} />
			<meta property="og:hashtag" content={hashtag} />
			<meta property="og:image" content={img} />
			<meta content="image/*" property="og:image:type" />
			<meta property="og:url" content={currentUrl} />
			<meta property="og:site_name" content="CampersTribe" />
			<meta property="og:description" content={description} />
		</Helmet>
	)
}
