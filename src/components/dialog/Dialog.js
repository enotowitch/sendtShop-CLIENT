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
import { CART_ROUTE } from '../../consts';
import { useNavigate } from 'react-router-dom';

export default function _Dialog() {

	const { dialogShow, dialogShowSet, dialogContentName, dialogTitle, dialogImg, dialogHasButtons, theme } = useContext(Context)
	// * gray cause of eval
	const { share, addedToCart } = useDialog()
	const navigate = useNavigate()

	return (
		<Dialog
			open={dialogShow}
			onClose={() => dialogShowSet(false)}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			className={`fcc ${theme === "dark" ? "darkDialog" : ""}`}
		>
			<DialogTitle id="alert-dialog-title" className="fcc">
				{dialogTitle}
			</DialogTitle>
			{dialogImg && <img src={dialogImg} className="w100" />}
			<DialogContent className="fcc">
				{/* eg: 						  share() */}
				{dialogContentName && eval(`${dialogContentName}()`)}
			</DialogContent>
			{dialogHasButtons &&
				<DialogActions className="mb">
					<Button variant="outlined" onClick={() => dialogShowSet(false)}>Continue shopping</Button>
					<Button variant="contained" onClick={() => (navigate(CART_ROUTE), dialogShowSet(false))} autoFocus>Go to cart</Button>
				</DialogActions>
			}
		</Dialog>
	)
}