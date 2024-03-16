import { AddCircleOutlined, ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import { useState } from "react";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import RedeemIcon from "@mui/icons-material/Redeem";

export default function ProductManagement() {
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
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <AddCircleOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Add Product" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <FormatListBulletedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Products List" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <WorkspacesIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sections" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <RedeemIcon />
                        </ListItemIcon>
                        <ListItemText primary="Offers" />
                    </ListItemButton>
                </List>
            </Collapse>
        </>
    );
}
