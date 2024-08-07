export interface Department {
    cardiology: 'cardiology';
    surgery: 'surgery';
}

export interface Role {
    doctor: 'doctor';
    nurse: 'nurse';
}

export interface Status {
    head: 'head';
    regular: 'regular';
}

export interface Employee {
    id: number;
    lastName: string;
    firstName: string;
    middleName: string;
    department: keyof Department;
    role: keyof Role;
    status: keyof Status;
}