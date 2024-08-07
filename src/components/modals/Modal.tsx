import React, {ReactNode} from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Paper, {PaperProps} from '@mui/material/Paper';
import Draggable from 'react-draggable';


type DeleteConfirmationDialogPropsType = {
    title: string;
    openModal: boolean;
    children: ReactNode;
}

function PaperComponent(props: PaperProps) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}

const Modal = (props: DeleteConfirmationDialogPropsType) => {
    const {title, openModal = false, children} = props;

    return (
        <React.Fragment>
            <Dialog
                open={openModal}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{cursor: 'move'}} id="draggable-dialog-title">
                    {title}
                </DialogTitle>
                {children}
            </Dialog>
        </React.Fragment>
    );
}

export default Modal;