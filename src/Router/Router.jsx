import { Route, Routes } from "react-router";
import MainLayouts from "../Layouts/MainLayout/MainLayouts";
import Home from "../Pages/Home/Home";

const Router = () => {
    return <Routes>
        <Route path="/" element={<MainLayouts />}  >
            <Route path="/" element={<Home></Home>} />
        </Route>

    </Routes>
};

export default Router;