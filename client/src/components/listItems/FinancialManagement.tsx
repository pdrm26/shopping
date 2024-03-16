import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";

export default function FinancialManagement() {
    const [open, setOpen] = useState(true);

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
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <AccountBalanceWalletIcon />
                        </ListItemIcon>
                        <ListItemText primary="Payments" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <MoneyOffIcon />
                        </ListItemIcon>
                        <ListItemText primary="Discount Codes" />
                    </ListItemButton>
                </List>
            </Collapse>
        </>
    );
}
