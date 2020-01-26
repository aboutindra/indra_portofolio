import React from "react";

export default function NavbarIndex() {
    return(
        <div className="NavbarIndex">
            <div className="col-12">
                <div className="row">
                    <div className="col-4">
                        <img className="nav-logo"/>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col-2">
                                <p>About me</p>
                            </div>
                            <div className="col-2">
                                <p>Main tech</p>
                            </div>
                            <div className="col-2">
                                <p>Portofolio</p>
                            </div>
                            <div className="col-2">
                                <p>Contact</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}