import React, { Suspense } from "react"

// render: type=product/article/comment/...; action=add/full/...
export default function VariableComponent({ type, action, obj }) {

	const VariableView = React.lazy(() => {
		return new Promise(resolve => {  // prevent rerenders 
			setTimeout(() => resolve(import(`../view/${type}_${action}`)), 300) // eg: ../view/product_add || ../view/article_full
		})
	})

	// TODO ??? rename VariableComponent to VariableView
	// TODO ??? place VariableComponent to `view` folder
	return (
		<Suspense>
			{/* load product_add/article_full/... */}
			<VariableView obj={obj} />
		</Suspense>
	)
}
