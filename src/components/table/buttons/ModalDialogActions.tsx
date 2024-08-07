import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import React from "react";

type ModalDialogActionsPropsType = {
    cancelCallback: () => void;
    confirmCallback: () => void
}

export const ModalDialogActions = (props: ModalDialogActionsPropsType) => {
    return <DialogActions>
        <Button autoFocus onClick={props.cancelCallback}>
            Cancel
        </Button>
        <Button onClick={props.confirmCallback}>Confirm</Button>
    </DialogActions>
}