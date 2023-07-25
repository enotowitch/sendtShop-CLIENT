import React, { Suspense } from "react"

// render: type=product/article/comment/...; action=add/full/card/...
export default function VariableView({ type, action, obj }) {

	const VariableView = React.lazy(() => {
		return new Promise(resolve => {  // prevent rerenders 
			//                        eg: ./product_add || ./article_full
			setTimeout(() => resolve(import(`./${type}_${action}`)), 300)
		})
	})

	return (
		<Suspense>
			{/* load product_add/article_full/... */}
			<VariableView obj={obj} />
		</Suspense>
	)
}
