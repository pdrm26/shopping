import { BrowserRouter, Route, Routes } from "react-router-dom";
import Panel from "./pages/Panel";
import CustomerList from "./components/panels/CustomerList";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Panel />}>
                    <Route path="customersList" element={<CustomerList />} />
                </Route>
                <Route path="/news" element={<h1>news</h1>} />
                <Route path="/about" element={<h1>about</h1>} />
                <Route path="*" element={<h1>NOT_FOUND</h1>} />
            </Routes>
        </BrowserRouter>
    );
}
