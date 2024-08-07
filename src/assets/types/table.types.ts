import {ReactNode} from "react";

export interface ColumnData {
    dataKey: keyof Data;
    label?: string | ReactNode;
    numeric?: boolean;
    width: number;
}

export interface Data {
    id: number;
    name: string;
    department: string;
    role: string;
    status: string;
    buttons: ReactNode
}

export type Sample = [number, string, string, string, string, ReactNode];

