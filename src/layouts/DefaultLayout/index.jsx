import { Outlet } from "react-router";

import Header from "./components/Header";

function DefaultLayout() {
    return (
        <>
            <Header></Header>
            <Outlet />
        </>
    );
}

export default DefaultLayout;
