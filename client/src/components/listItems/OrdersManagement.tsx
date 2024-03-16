import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Badge, Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useState } from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

export default function OrdersManagement() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <ShoppingBasketIcon />
                </ListItemIcon>
                <ListItemText primary="Orders Management" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <FormatListBulletedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Orders List" />
                        <Badge badgeContent={1000} max={999} color="primary" sx={{ mr: 5 }}></Badge>
                    </ListItemButton>
                </List>
            </Collapse>
        </>
    );
}
