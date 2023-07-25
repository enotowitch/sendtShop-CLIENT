import * as React from "react";
import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import usePosts from "../../hooks/usePosts"
import "./index.scss"
import { Context } from "../../Context";

export default function HeaderDrawer() {

	const { allWithField } = usePosts("product", "tags")
	const { showMenu, showMenuSet } = React.useContext(Context)

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
						<ListItemButton>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Drawer>
	);
}