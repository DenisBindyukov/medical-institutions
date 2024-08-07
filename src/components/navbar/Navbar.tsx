import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import MasksIcon from '@mui/icons-material/Masks';
import { Link as RouterLink } from 'react-router-dom';

type NavbarProps = {
    isOpen: boolean
    setOpen: (isOpen: boolean) => void
}

const Navbar = (props: NavbarProps) => {
    const {isOpen, setOpen} = props;
    const icons = [<MasksIcon/>, <VaccinesIcon/>];

    const DrawerList = (
        <Box sx={{width: 250}} role="presentation" onClick={() => setOpen(false)}>
            <List>
                {['Doctors', 'Nurses'].map((department, index) => (
                        <ListItem key={department} disablePadding>
                            <ListItemButton component={RouterLink} to={department.toLowerCase()}>
                                <ListItemIcon>
                                    {icons[index]}
                                </ListItemIcon>
                                <ListItemText primary={department}/>
                            </ListItemButton>
                        </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Drawer open={isOpen} onClose={() => setOpen(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}


export default Navbar;