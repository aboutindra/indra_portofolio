import NavbarIndex from "./Navbar/Index";
import Side1Index from "./Side-1/Index";
import Side2Index from "./Side-2/Index";
import Side3Index from "./Side-3/Index";
import Side4Index from "./Side-4/Index";
import Side5Index from "./Side-5/Index";
import FooterIndex from "./Footer/Index";
import React from "react";

export default function HomeIndex() {
    return(
        <div className="HomeIndex">
            <NavbarIndex/>
            <Side1Index/>
            <Side2Index/>
            <Side3Index/>
            <Side4Index/>
            <Side5Index/>
            <FooterIndex/>
        </div>
    );
}