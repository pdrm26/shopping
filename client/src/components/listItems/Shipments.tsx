import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";


export default function Shipments() {
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <LocalShippingIcon />
                </ListItemIcon>
                <ListItemText primary="Shipments" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <FormatListBulletedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Shpping List" />
                    </ListItemButton>
                </List>
            </Collapse>
        </>
    );
}
