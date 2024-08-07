import {createContext, Dispatch, SetStateAction, useContext} from "react";
import {Employee} from "../types/employee.types";

interface DataContextType {
    staff: Employee[];
    setStaff: Dispatch<SetStateAction<Employee[]>>;
}

export const DataContext = createContext<DataContextType | null>(null);

export const useDataContext = (): DataContextType => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useDataContext must be used within a DataProvider');
    }
    return context;
};