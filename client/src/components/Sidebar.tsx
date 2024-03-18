import { Divider, List } from "@mui/material";
import Delivery from "./listItems/Delivery";
import CustomerList from "./listItems/CustomersList";
import Settings from "./listItems/Settings";
import Feedbacks from "./listItems/Feedbacks";
import Product from "./listItems/Product";
import Orders from "./listItems/Orders";
import Financial from "./listItems/Financial";

export default function Sidebar() {
    return (
        <List sx={{ width: "100%", bgcolor: "background.paper" }} component="nav">
            <Product />
            <Divider />
            <Orders />
            <Divider />
            <Financial />
            <Divider />
            <Delivery />
            <Divider />
            <CustomerList />
            <Divider />
            <Feedbacks />
            <Divider />
            <Settings />
        </List>
    );
}
