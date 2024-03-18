import { BrowserRouter, Route, Routes } from "react-router-dom";
import Panel from "./pages/Panel";
import CustomerList from "./components/panels/customers/CustomersList";
import ProductsList from "./components/panels/product/ProductsList";
import ProductAdd from "./components/panels/product/ProductAdd";
import ProductsSection from "./components/panels/product/ProductsSection";
import ProductsOffers from "./components/panels/product/ProductsOffers";
import OrdersList from "./components/panels/orders/OrdersList";
import FinancialPayments from "./components/panels/financial/FinancialPayments";
import FinancialDiscountCodes from "./components/panels/financial/FinancialDiscountCodes";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Panel />}>
                    {/* Product */}
                    <Route path="products/list" element={<ProductsList />} />
                    <Route path="products/add" element={<ProductAdd />} />
                    <Route path="products/sections" element={<ProductsSection />} />
                    <Route path="products/offers" element={<ProductsOffers />} />
                    {/* Orders */}
                    <Route path="orders/list" element={<OrdersList />} />
                    {/* Financial */}
                    <Route path="financial/payments" element={<FinancialPayments />} />
                    <Route path="financial/discount-codes" element={<FinancialDiscountCodes />} />
                    {/* Customers */}
                    <Route path="customers/list" element={<CustomerList />} />
                </Route>
                <Route path="/news" element={<h1>news</h1>} />
                <Route path="/about" element={<h1>about</h1>} />
                <Route path="*" element={<h1>NOT_FOUND</h1>} />
            </Routes>
        </BrowserRouter>
    );
}
