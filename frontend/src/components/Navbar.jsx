import React from "react";
import { useSelector } from "react-redux";

import Header from "../common/Header";

export default function Navbar() {
    const user = useSelector((state) => state.user);
    return (
        <div>
            <Header user={user} />
        </div>
    );
}