import { HashRouter as Router, Routes, Route } from "react-router";

import DefaultLayout from "../../layouts/DefaultLayout";
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import ModalDemo from "../../pages/ModalDemo";
import ScrollDemo from "../../pages/ScrollDemo";
import FocusDemo from "../../pages/FocusDemo";
import PerformanceDemo from "../../pages/PerformanceDemo";
import HOCDemo from "../../pages/HOCDemo";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route path="/" element={<Home />}></Route>
                </Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/modal-demo" element={<ModalDemo />}></Route>
                <Route path="/scroll-demo" element={<ScrollDemo />}></Route>
                <Route path="/focus-demo" element={<FocusDemo />}></Route>
                <Route path="/hoc-demo" element={<HOCDemo />}></Route>
                <Route
                    path="/performance-demo"
                    element={<PerformanceDemo />}
                ></Route>
            </Routes>
        </Router>
    );
}

export default AppRoutes;
