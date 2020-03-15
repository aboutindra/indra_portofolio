import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default function NavbarMobile() {
    return(
        <div className="NavbarMobile">
            <div className="col-12">
                <div className="row">
                    <div className="col-3 btn-nav-mobile">
                        <FontAwesomeIcon icon={faCoffee} />
                        <h1>About me</h1>
                    </div>
                    <div className="col-3 btn-nav-mobile">
                        <FontAwesomeIcon icon={faCoffee} />
                        <h1>My Stack</h1>
                    </div>
                    <div className="col-3 btn-nav-mobile">
                        <FontAwesomeIcon icon={faCoffee} />
                        <h1>Portfolio</h1>
                    </div>
                    <div className="col-3 btn-nav-mobile">
                        <FontAwesomeIcon icon={faCoffee} />
                        <h1>Chat with me</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}