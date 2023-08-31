import * as React from "react";
import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import usePosts from "../../hooks/usePosts"
import "./index.scss"
import { Context } from "../../Context";
import { useNavigate } from "react-router-dom";
import { MAIN_ROUTE } from "../../consts";
import scrollToFilter from "../../utils/scrollToFilter";

export default function HeaderDrawer() {

	const { allWithField } = usePosts("product", "tags")
	const { showMenu, showMenuSet, filterPostsQuerySet, skipSet, showLoadMoreSet, theme } = React.useContext(Context)
	const navigate = useNavigate()

	function onClick(text) {
		filterPostsQuerySet(prev => ({ ...prev, tag: text })) // define tag to filter 
		showMenuSet(false) // hide HeaderDrawer
		skipSet(0) // null skip to filter from the start of the product list
		showLoadMoreSet(true) // new filter => show LoadMore btn
		navigate(MAIN_ROUTE) // where filtering results are displayed
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