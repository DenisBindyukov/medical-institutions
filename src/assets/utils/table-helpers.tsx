import {ColumnData, Data} from "../types/table.types";
import {TableComponents} from "react-virtuoso";
import * as React from "react";
import TableContainer from "@mui/material/TableContainer";
import {ReactNode} from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";

export const columns: ColumnData[] = [
    {
        width: 90,
        label: 'Full name',
        dataKey: 'name',
    },
    {
        width: 70,
        label: 'Department',
        dataKey: 'department',
        numeric: true,
    },
    {
        width: 70,
        label: 'Role',
        dataKey: 'role',
        numeric: true,
    },
    {
        width: 70,
        label: 'Status',
        dataKey: 'status',
        numeric: true,
    },
    {
        width: 10,
        dataKey: 'buttons',
        numeric: true,
    },

];


export const VirtuosoTableComponents: TableComponents<Data> = {
    Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
        <TableContainer component={Paper} {...props} ref={ref}/>
    )),
    Table: (props) => (
        <Table {...props} sx={{borderCollapse: 'separate', tableLayout: 'fixed'}}/>
    ),
    TableHead: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
        <TableHead {...props} ref={ref}/>
    )),
    TableRow,
    TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
        <TableBody {...props} ref={ref}/>
    )),
};

export function fixedHeaderContent() {
    return (
        <TableRow>
            {columns.map((column) => (
                <TableCell
                    key={column.dataKey}
                    variant="head"
                    align={column.numeric || false ? 'right' : 'left'}
                    style={{width: column.width}}
                    sx={{
                        backgroundColor: 'background.paper',
                    }}
                >
                    {column?.label}
                </TableCell>
            ))}
        </TableRow>
    );
}

export function rowContent(_index: number, row: Data) {
    return (
        <React.Fragment>
            {columns.map((column) => (
                <TableCell
                    key={column.dataKey}
                    align={column.numeric || false ? 'right' : 'left'}
                >
                    {row[column.dataKey]}
                </TableCell>
            ))}
        </React.Fragment>
    );
}

export function createData(
    id: number,
    name: string,
    department: string,
    role: string,
    status: string,
    buttons: ReactNode
): Data {
    return {id, name, department, role, status, buttons};
}