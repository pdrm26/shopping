import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

export default function CustomerList() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <PeopleAltIcon />
                </ListItemIcon>
                <ListItemText primary="Customers" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <FormatListBulletedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Customers List" />
                    </ListItemButton>
                </List>
            </Collapse>
        </>
    );
}
