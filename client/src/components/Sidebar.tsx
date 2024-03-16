import { Divider, List } from "@mui/material";
import ProductManagement from "./listItems/ProductManagement";
import OrdersManagement from "./listItems/OrdersManagement";
import FinancialManagement from "./listItems/FinancialManagement";
import Shipments from "./listItems/Shipments";
import CustomerList from "./listItems/CustomerList";
import Settings from "./listItems/Settings";
import Feedbacks from "./listItems/Feedbacks";

export default function Sidebar() {
    return (
        <List sx={{ width: "100%", bgcolor: "background.paper" }} component="nav">
            <ProductManagement />
            <Divider />
            <OrdersManagement />
            <Divider />
            <FinancialManagement />
            <Divider />
            <Shipments />
            <Divider />
            <CustomerList />
            <Divider />
            <Feedbacks />
            <Divider />
            <Settings />
        </List>
    );
}
