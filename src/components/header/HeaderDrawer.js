import * as React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import usePosts from "../../hooks/usePosts"
import "./index.scss"

export default function HeaderDrawer({ showMenu, showMenuSet }) {

	const { allWithField } = usePosts("product", "tags")

	return (
		<Drawer
			anchor='right'
			open={showMenu}
			onClose={() => showMenuSet(false)}
		>
			<List className='headerDrawer'>
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