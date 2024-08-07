import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {useDataContext} from "../../context/createDataContext";
import {Employee} from "../../types/employee.types";
import {ModalDialogActions} from "../../../components/table/buttons/ModalDialogActions";
import {useLocation} from "react-router-dom";
import EmployeeForm from "../../../components/EmployeeForm/EmployeeForm";
import { DialogContent, DialogContentText } from '@mui/material';

export type ActionType = 'add' | 'edit' | 'delete';

interface CurrentEmployeeDataType {
    name: string;
    employeeId: number;
}

interface OpenModalType {
    action: ActionType | null;
    open: boolean;
}

interface UseModalReturnType {
    openModal: OpenModalType;
    filteredStaff: Employee[];
    setCurrentEmployeeData: (data: CurrentEmployeeDataType) => void
    setOpenModal: Dispatch<SetStateAction<OpenModalType>>;
    actionHandler: (id: number, action: ActionType) => void;
    addEmployeeAction: () => void;
    getModalContent: (action: ActionType) => JSX.Element;
}

export const useManageEmployeeModal = (): UseModalReturnType => {
    const location = useLocation();
    const {staff, setStaff} = useDataContext();
    const [currentPath, setCurrentPath] = useState('');
    const [currentEmployeeData, setCurrentEmployeeData] = useState<CurrentEmployeeDataType | null>(null);
    const [openModal, setOpenModal] = useState<OpenModalType>({action: null, open: false})

    useEffect(() => {
        const path = location.pathname.split('/')[1];
        setCurrentPath(path.slice(0, -1));
    }, [location.pathname]);

    const filteredStaff: Employee[] = staff.filter(s => s.role === currentPath);

    const removeEmployeeById = () => {
        setStaff(state => state.filter(employee => employee.id !== currentEmployeeData?.employeeId));
        onCloseHandler()
    };

    const editEmployeeById = (data: Employee) => {
        setStaff(state => state.map(employee => employee.id === data.id ? data : employee));
        onCloseHandler()
    };

    const addEmployee = (data: Employee) => {
        setStaff(state => [data, ...state]);
        onCloseHandler();
    };

    const onCloseHandler = () => {
        setOpenModal((state) => ({...state, open: false}));
    };

    const actionHandler = (id: number, action: ActionType) => {
        const foundEmployee: Employee | undefined = staff.find(s => s.id === id);
        if (foundEmployee) {
            const fullName = `${foundEmployee.lastName} ${foundEmployee.firstName} ${foundEmployee.middleName}`;
            setCurrentEmployeeData({name: fullName, employeeId: id});
            setOpenModal({action: action, open: true});
        }
    }

    const handleSaveEmployee = (data: Employee) => {
        if (openModal.action === 'edit') {
            editEmployeeById(data);
        } else {
            addEmployee(data);
        }
    };

    const addAction = () => {
        setOpenModal({action: 'add', open: true});
    }

    const getModalContent = (content: keyof typeof contentModal) => {
        return contentModal[content];
    }

    const contentModal = {
        delete: (
            <React.Fragment>
                <DialogContent>
                    <DialogContentText>
                        <span>Do you really want to delete an employee <b>{`${currentEmployeeData?.name}`}</b> ?</span>
                    </DialogContentText>
                </DialogContent>
                <ModalDialogActions cancelCallback={() => setOpenModal((state) => ({...state, open: false}))}
                                    confirmCallback={removeEmployeeById}/>
            </React.Fragment>
        ),
        add: (
            <React.Fragment>
                <DialogContent>
                    <EmployeeForm open={openModal.open} onClose={onCloseHandler} onSave={handleSaveEmployee}/>
                </DialogContent>
            </React.Fragment>
        ),
        edit: (
            <React.Fragment>
                <DialogContent>
                    <EmployeeForm open={openModal.open}
                                  employee={staff.find(e => e.id === currentEmployeeData?.employeeId)}
                                  onClose={onCloseHandler}
                                  onSave={handleSaveEmployee}/>
                </DialogContent>

            </React.Fragment>
        )
    }

    return {
        openModal,
        filteredStaff,
        setCurrentEmployeeData,
        setOpenModal,
        actionHandler,
        addEmployeeAction: addAction,
        getModalContent,
    }
}


