import { BrowserRouter, Route, Routes } from "react-router-dom";
import Panel from "./pages/Panel";
import CustomerList from "./components/panels/customers/CustomersList";
import ProductsList from "./components/panels/product/ProductsList";
import ProductAdd from "./components/panels/product/ProductAdd";
import ProductCategories from "./components/panels/product/ProductCategories";
import ProductsOffers from "./components/panels/product/ProductsOffers";
import OrdersList from "./components/panels/orders/OrdersList";
import FinancialPayments from "./components/panels/financial/FinancialPayments";
import FinancialDiscountCodes from "./components/panels/financial/FinancialDiscountCodes";
import DeliveryList from "./components/panels/delivery/DeliveryList";
import FeedbacksList from "./components/panels/feedbacks/FeedbacksList";
import SettingsSecurity from "./components/panels/settings/SettingsSecurity";
import ProductCategoryAdd from "./components/panels/product/ProductCategoryAdd";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Panel />}>
                    {/* Product */}
                    <Route path="products/list" element={<ProductsList />} />
                    <Route path="products/add" element={<ProductAdd />} />
                    <Route path="products/categories/add" element={<ProductCategoryAdd />} />
                    <Route path="products/categories" element={<ProductCategories />} />
                    <Route path="products/offers" element={<ProductsOffers />} />
                    {/* Orders */}
                    <Route path="orders/list" element={<OrdersList />} />
                    {/* Financial */}
                    <Route path="financial/payments" element={<FinancialPayments />} />
                    <Route path="financial/discount-codes" element={<FinancialDiscountCodes />} />
                    {/* Delivery */}
                    <Route path="delivery/list" element={<DeliveryList />} />
                    {/* Customers */}
                    <Route path="customers/list" element={<CustomerList />} />
                    {/* Feedbacks */}
                    <Route path="feedbacks/list" element={<FeedbacksList />} />
                    {/* Settings */}
                    <Route path="settings/security" element={<SettingsSecurity />} />
                </Route>
                <Route path="/news" element={<h1>news</h1>} />
                <Route path="/about" element={<h1>about</h1>} />
                <Route path="*" element={<h1>NOT_FOUND</h1>} />
            </Routes>
        </BrowserRouter>
    );
}
