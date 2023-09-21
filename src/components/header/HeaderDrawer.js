import * as React from "react";
import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import usePosts from "../../hooks/usePosts"
import "./index.scss"
import { Context } from "../../Context";
import { useNavigate } from "react-router-dom";
import { MAIN_ROUTE } from "../../consts";
import scrollToFilter from "../../utils/scrollToFilter";
import useCurrentSearchParams from "../../hooks/useCurrentSearchParams";
import useWriteSearchParams from "../../hooks/useWriteSearchParams";

export default function HeaderDrawer() {

	const { allWithField } = usePosts("product", "tags")
	const { showMenu, showMenuSet, skipProdsSet, showLoadMoreSet, theme } = React.useContext(Context)
	const navigate = useNavigate()
	const { currentSearchParams } = useCurrentSearchParams()
	const { writeSearchParams } = useWriteSearchParams()

	function onClick(text) {
		writeSearchParams({ ...currentSearchParams, tag: text })
		showMenuSet(false) // hide HeaderDrawer
		skipProdsSet(0) // null skip to filter from the start of the product list
		showLoadMoreSet(true) // new filter => show LoadMore btn
		scrollToFilter()
	}

	return (
		showMenu &&
		<Drawer
			anchor="right"
			open={showMenu}
			onClose={() => showMenuSet(false)}
			className={`${theme === "dark" ? "darkDrawer" : ""}`}
		>
			<List className="headerDrawer">
				<ListItem><div className="title2">Categories:</div></ListItem>
				{allWithField?.map((text) => (
					text &&
					<ListItem key={text} disablePadding>
						<ListItemButton onClick={() => onClick(text)}>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Drawer>
	);
}