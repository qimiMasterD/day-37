import { Outlet } from "react-router";

import Header from "./components/Header";

function DefaultLayout() {
    return (
        <div>
            <Header></Header>
        </div>
    );
}

export default DefaultLayout;
