import React, { Suspense } from "react"
import { useParams } from "react-router-dom"

// render: type=product/article/comment/...; action=add/...
export default function VariableComponent({ type, action, obj }) {

	const VariableView = React.lazy(() => {
		return new Promise(resolve => {  // prevent rerenders 
			setTimeout(() => resolve(import(`../view/${type}_${action}`)), 300) // eg: ../view/product_add || ../view/article_full
		})
	})

	return (
		<Suspense>
			{/* load product_add/article_add/comment_add/... */}
			<VariableView obj={obj} />
		</Suspense>
	)
}
