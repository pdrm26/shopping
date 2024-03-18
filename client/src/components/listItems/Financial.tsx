import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import { NavLink } from "react-router-dom";

export default function Financial() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <LocalAtmIcon />
                </ListItemIcon>
                <ListItemText primary="Financial Management" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <NavLink to="financial/payments">
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <AccountBalanceWalletIcon />
                            </ListItemIcon>
                            <ListItemText primary="Payments" />
                        </ListItemButton>
                    </NavLink>
                    <NavLink to="financial/discount-codes">
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <MoneyOffIcon />
                            </ListItemIcon>
                            <ListItemText primary="Discount Codes" />
                        </ListItemButton>
                    </NavLink>
                </List>
            </Collapse>
        </>
    );
}
