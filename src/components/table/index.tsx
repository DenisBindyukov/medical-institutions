import React from "react";
import Paper from '@mui/material/Paper';
import {TableVirtuoso} from 'react-virtuoso';
import {Wrap, Wrapper} from "./styles";
import {Data, Sample} from "../../assets/types/table.types";
import {createData, fixedHeaderContent, rowContent, VirtuosoTableComponents} from "../../assets/utils/table-helpers";
import {ActionButtons} from "./buttons/ActionButtons";
import {useManageEmployeeModal} from "../../assets/utils/hooks/useEmployeeActions";
import Modal from "../modals/Modal";
import {Button} from "@mui/material";

const modalTitle = {
    add: 'Add New Employee',
    delete: 'Delete Employee',
    edit: 'Edit Employee'
}

const EmployeeDashboard = () => {
    const {
        openModal,
        filteredStaff,
        actionHandler,
        addEmployeeAction,
        getModalContent
    } = useManageEmployeeModal();

    const rows: Data[] = filteredStaff.map((s) => {
        const fullName = `${s.lastName} ${s.firstName} ${s.middleName}`;
        const preparedStaff: Sample = [
            s.id,
            fullName,
            s.department,
            s.role,
            s.status,
            <ActionButtons employeeId={s.id} actionHandler={actionHandler}/>
        ];
        return createData(...preparedStaff);
    })

    return (
        <Wrapper>
            <div className={'button-block'}>
                <Button variant="contained" onClick={addEmployeeAction}>Add employee</Button>
            </div>
            <Wrap>
                <Paper style={{height: 600, width: '100%'}}>
                    <TableVirtuoso
                        data={rows}
                        components={VirtuosoTableComponents}
                        fixedHeaderContent={fixedHeaderContent}
                        itemContent={rowContent}
                    />
                </Paper>
            </Wrap>
            <Modal title={modalTitle[openModal.action!]}
                   openModal={openModal.open}>
                {getModalContent(openModal.action!)}
            </Modal>
        </Wrapper>

    );
}

export default EmployeeDashboard;




