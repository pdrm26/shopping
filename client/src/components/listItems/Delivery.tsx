import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { NavLink } from "react-router-dom";

export default function Delivery() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <LocalShippingIcon />
                </ListItemIcon>
                <ListItemText primary="Delivery" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <NavLink to="delivery/list">
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <FormatListBulletedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Delivery List" />
                        </ListItemButton>
                    </NavLink>
                </List>
            </Collapse>
        </>
    );
}
