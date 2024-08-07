import {Employee} from "../../assets/types/employee.types";
import React, {useEffect} from "react";
import {useDataContext} from "../../assets/context/createDataContext";
import {Controller, useForm} from "react-hook-form";
import {
    Button,
    Dialog, DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from "@mui/material";

interface EmployeeFormProps {
    open: boolean;
    onClose: () => void;
    onSave: (employee: Employee) => void;
    employee?: Employee;
}

const EmployeeForm: React.FC<EmployeeFormProps> = (props: EmployeeFormProps) => {
    const {staff} = useDataContext();
    const {open, employee, onClose, onSave,} = props;

    const {control, handleSubmit, reset, formState: {errors}} = useForm<Employee>({
        defaultValues: {
            id: (staff.length + 1),
            firstName: '',
            lastName: '',
            middleName: '',
            department: undefined,
            role: undefined,
            status: undefined
        }
    });

    useEffect(() => {
        if (employee) reset(employee);
    }, [employee]);

    const onSubmit = (data: Employee) => {
        onSave(data);
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{employee ? 'Edit Employee' : 'Add New Employee'}</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="firstName"
                        control={control}
                        rules={{required: "First Name is required"}}
                        render={({field}) => (
                            <TextField
                                {...field}
                                label="First Name"
                                margin="dense"
                                fullWidth
                                error={!!errors.firstName}
                                helperText={errors.firstName ? errors.firstName.message : ''}
                            />
                        )}
                    />

                    <Controller
                        name="lastName"
                        control={control}
                        rules={{required: "Last Name is required"}}
                        render={({field}) => (
                            <TextField
                                {...field}
                                label="Last Name"
                                margin="dense"
                                fullWidth
                                error={!!errors.lastName}
                                helperText={errors.lastName ? errors.lastName.message : ''}
                            />
                        )}
                    />

                    <Controller
                        name="middleName"
                        control={control}
                        rules={{required: "Middle Name is required"}}
                        render={({field}) => (
                            <TextField
                                {...field}
                                label="Middle Name"
                                margin="dense"
                                fullWidth
                                error={!!errors.middleName}
                                helperText={errors.middleName ? errors.middleName.message : ''}
                            />
                        )}
                    />

                    <FormControl fullWidth margin="dense" error={!!errors.department}>
                        <InputLabel>Department</InputLabel>
                        <Controller
                            name="department"
                            control={control}
                            rules={{required: "Department is required"}}
                            render={({field}) => (
                                <Select {...field}>
                                    <MenuItem value="cardiology">Cardiology</MenuItem>
                                    <MenuItem value="surgery">Surgery</MenuItem>
                                </Select>
                            )}
                        />
                        {errors.department && <FormHelperText>{errors.department.message}</FormHelperText>}
                    </FormControl>

                    <FormControl fullWidth margin="dense" error={!!errors.role}>
                        <InputLabel>Role</InputLabel>
                        <Controller
                            name="role"
                            control={control}
                            rules={{required: "Role is required"}}
                            render={({field}) => (
                                <Select {...field}>
                                    <MenuItem value="doctor">Doctor</MenuItem>
                                    <MenuItem value="nurse">Nurse</MenuItem>
                                </Select>
                            )}
                        />
                        {errors.role && <FormHelperText>{errors.role.message}</FormHelperText>}
                    </FormControl>

                    <FormControl fullWidth margin="dense" error={!!errors.status}>
                        <InputLabel>Status</InputLabel>
                        <Controller
                            name="status"
                            control={control}
                            rules={{required: "Status is required"}}
                            render={({field}) => (
                                <Select {...field}>
                                    <MenuItem value="regular">Regular</MenuItem>
                                    <MenuItem value="head">Head</MenuItem>
                                </Select>
                            )}
                        />
                        {errors.status && <FormHelperText>{errors.status.message}</FormHelperText>}
                    </FormControl>

                    <DialogActions>
                        <Button onClick={onClose} color="primary">
                            Cancel
                        </Button>
                        <Button type="submit" color="primary">
                            {employee ? 'Save Changes' : 'Add Employee'}
                        </Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    );

};

export default EmployeeForm;
