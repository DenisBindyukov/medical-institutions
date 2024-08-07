import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {red} from "@mui/material/colors";
import {EditButton, Wrapper} from "./styles";
import {ActionType} from "../../../assets/utils/hooks/useEmployeeActions";

type ActionButtonsProps = {
    employeeId: number
    actionHandler: (id: number, action: ActionType) => void;
}

export const ActionButtons = (props: ActionButtonsProps) => {
    const {employeeId, actionHandler} = props;

    return (
        <Wrapper>
            <EditButton onClick={() => actionHandler(employeeId, 'edit')}>
                <EditIcon/>
            </EditButton>
            <IconButton aria-label="delete" onClick={() => actionHandler(employeeId, 'delete')}>
                <DeleteIcon style={{color: red[300]}}/>
            </IconButton>
        </Wrapper>
    )
}