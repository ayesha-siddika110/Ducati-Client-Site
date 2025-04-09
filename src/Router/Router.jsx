import { Route, Routes } from "react-router";
import MainLayouts from "../Layouts/MainLayout/MainLayouts";
import Home from "../Pages/Home/Home";
import ProductDetailsPage from "../Pages/ProductDetailsPage/ProductDetailsPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/Register/RegisterPage";

const Router = () => {
    return <Routes>
        <Route path="/" element={<MainLayouts />}  >
            <Route path="/" element={<Home></Home>} />
            <Route path="/productDetails" element={<ProductDetailsPage></ProductDetailsPage>} />
            <Route path="/login" element={<LoginPage></LoginPage>} />
            <Route path="/register" element={<RegisterPage></RegisterPage>} />
        </Route>

    </Routes>
};

export default Router;