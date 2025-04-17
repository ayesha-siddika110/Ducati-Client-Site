import { Route, Routes } from "react-router";
import MainLayouts from "../Layouts/MainLayout/MainLayouts";
import Home from "../Pages/Home/Home";
import ProductDetailsPage from "../Pages/ProductDetailsPage/ProductDetailsPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/Register/RegisterPage";
import DashboardLayout from "../Layouts/MainLayout/DashboardLayout/DashboardLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Products from "../Pages/Products/Products";
import Clients from "../Pages/Clients/Clients";
import Gellery from "../Pages/Gallery/Gellery"
import Blogs from "../Pages/Blogs/Blogs";
import ContactPage from "../Pages/ContactPage/ContactPage";
import BlogDetailsPage from "../Pages/BlogDetailsPage/BlogDetailsPage";
import AddProduct from "../Pages/Dashboard/SuperAdminDashboard/AddProduct/AddProduct";

const Router = () => {
    return <Routes>
        <Route path="/" element={<MainLayouts />} >
            <Route index element={<Home />} />
            <Route path="productDetails" element={<ProductDetailsPage />} />
            <Route path="aboutUs" element={<AboutUs />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="allProducts" element={<Products />} />
            <Route path="gellary" element={<Gellery />} />
            <Route path="Clients" element={<Clients />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="blogDetailsPage" element={<BlogDetailsPage />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />} >
            <Route path="/dashboard/addProducts" element={<AddProduct />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
    </Routes>
};

export default Router;