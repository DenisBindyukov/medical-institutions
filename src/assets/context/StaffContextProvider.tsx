import {FC, ReactNode, useState} from "react";
import {DataContext} from "./createDataContext";
import rawData from '../../data/staff.json'
import {Department, Employee, Role, Status} from "../types/employee.types";

interface DataProviderProps {
    children: ReactNode;
}


const transformData = (data: any[]): Employee[] => {
    return data.map(item => ({
        ...item,
        department: item.department as keyof Department,
        role: item.role as keyof Role,
        status: item.status as keyof Status,
    }));
};

const data: Employee[] = transformData(rawData);


export const DataProvider: FC<DataProviderProps>  = ({ children }) => {

    const [staff, setStaff] = useState<Employee[]>(data);

    return (
        <DataContext.Provider value={{ staff, setStaff }}>
            {children}
        </DataContext.Provider>
    );
};