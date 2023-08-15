import * as React from "react";
import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import usePosts from "../../hooks/usePosts"
import "./index.scss"
import { Context } from "../../Context";

export default function HeaderDrawer() {

	const { allWithField } = usePosts("product", "tags")
	const { showMenu, showMenuSet, filterPostsQuerySet, skipSet } = React.useContext(Context)

	function onClick(text) {
		filterPostsQuerySet(prev => ({ ...prev, tag: text })) // define tag to filter 
		showMenuSet(false) // hide HeaderDrawer
		skipSet(0) // null skip to filter from the start of the product list
	}

	return (
		showMenu &&
		<Drawer
			anchor="right"
			open={showMenu}
			onClose={() => showMenuSet(false)}
		>
			<List className="headerDrawer">
				{allWithField?.map((text) => (
					<ListItem key={text} disablePadding>
						{/* // TODO sep. comp. */}
						<ListItemButton onClick={() => onClick(text)}>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Drawer>
	);
}