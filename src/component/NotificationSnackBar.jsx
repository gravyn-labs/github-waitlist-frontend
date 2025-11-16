import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button'; // <-- ADD THIS IMPORT


// We'll make this component more generic
export default function NotificationSnackBar({ open = true, handleClose, message, undoAction }) {

    const action = (
        <React.Fragment>
            {/* Optionally show an undo button if a function is provided */}
            {undoAction && (
                <Button color="secondary" size="small" onClick={() => {
                    undoAction();
                    handleClose();
                }}>
                    UNDO
                </Button>
            )}
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message={message} // The message is now a prop
            action={action}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} // Position it nicely
        />
    );
}
