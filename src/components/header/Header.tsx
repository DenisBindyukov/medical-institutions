import React, {useState} from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Navbar from "../navbar/Navbar";

const Header = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{mr: 2}}
                    onClick={() => setOpen(!isOpen)}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    accounting of medical institution employees
                </Typography>
            </Toolbar>
            <Navbar isOpen={isOpen} setOpen={setOpen}/>
        </AppBar>
    )
}

export default Header;