import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useContext } from 'react';
import { Context } from '../../Context';
import useDialog from './useDialog';
import './index.scss'

export default function _Dialog() {

	const { dialog, dialogSet, theme } = useContext(Context)
	// * gray cause of eval
	const { share, addedToCart, ordered, goToCart, deletePost, hidePost, unHidePost } = useDialog()

	return (
		<Dialog
			open={dialog?.dialogShow}
			onClose={() => dialogSet({ dialogShow: false })}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			className={`fcc ${theme === "dark" ? "darkDialog" : ""}`}
		>
			<DialogTitle id="alert-dialog-title" className="fcc">
				{dialog?.dialogTitle}
			</DialogTitle>
			{dialog?.dialogImg && <img src={dialog?.dialogImg} className="w100" />}
			<DialogContent className="fcc">
				{/* eg: 						  share() */}
				{dialog?.dialogContentName && eval(`${dialog?.dialogContentName}()`)}
			</DialogContent>
			{dialog?.dialogHasButtons &&
				<DialogActions className="mb">
					<Button variant="outlined" onClick={() => dialogSet({ dialogShow: false })}>{dialog?.dialogLeftBtnText}</Button>
					<Button variant="contained" onClick={eval(dialog?.dialogRightBtnFn)} autoFocus>{dialog?.dialogRightBtnText}</Button>
				</DialogActions>
			}
		</Dialog>
	)
}