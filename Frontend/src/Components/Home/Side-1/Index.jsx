import React from "react";
import IndraImg from "../../../Assets/img/indra.png";

export default function Side1Index() {
    return(
        <div className="Side1Index">
            <div className="col-12">
                <div className="Bg-1Side-1"></div>
                <div className="Bg-3Side-1"></div>
                <div className="Bg-4Side-1"></div>
                <div className="row">
                    <div className="col-6">
                        <h1 className="Side1Title"> There's no <s>perfect project</s>, but <mark >well structured project.</mark> <i className="em em-facepunch" aria-role="presentation" aria-label="FISTED HAND SIGN"></i> <i class="em em-sunglasses" aria-role="presentation" aria-label="SMILING FACE WITH SUNGLASSES"></i> </h1>
                        <button className="btn-side1 btn btn-orange"> Check it out! </button>
                    </div>
                    <div className="col-6">
                        <div className="Bg-2Side-1"><img draggable="false" src={IndraImg} /> </div>
                    </div>
                </div>
            </div>
        </div>
    );
}