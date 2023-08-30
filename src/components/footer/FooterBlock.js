import React from "react"
import usePostFull from "../../hooks/usePostFull"
import Markdown from "../textEditor/Markdown"

// type=about/terms/privacy/returns/...
export default function FooterBlock({ type }) {

	const { fullPost } = usePostFull(type, "myCustomOneId")

	return (
		<section className="wM m0a tac mb">
			<Markdown>{fullPost?.textEditorValue}</Markdown>
		</section>
	)
}
