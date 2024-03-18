import { AddCircleOutlined, ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import { useState } from "react";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import RedeemIcon from "@mui/icons-material/Redeem";
import { NavLink } from "react-router-dom";

export default function Product() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <ProductionQuantityLimitsIcon />
                </ListItemIcon>
                <ListItemText primary="Product Management" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <NavLink to="products/add">
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <AddCircleOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Add Product" />
                        </ListItemButton>
                    </NavLink>
                    <NavLink to="products/list">
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <FormatListBulletedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Products List" />
                        </ListItemButton>
                    </NavLink>
                    <NavLink to="products/sections">
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <WorkspacesIcon />
                            </ListItemIcon>
                            <ListItemText primary="Sections" />
                        </ListItemButton>
                    </NavLink>
                    <NavLink to="products/offers">
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <RedeemIcon />
                            </ListItemIcon>
                            <ListItemText primary="Offers" />
                        </ListItemButton>
                    </NavLink>
                </List>
            </Collapse>
        </>
    );
}
