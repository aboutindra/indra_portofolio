import React from "react";
import foto from '../../../Assets/img/foto.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function Side2Index() {
    return(
        <div className="Side2Index">
            <div className="col-12 border">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E5F5F4" fill-opacity="1" d="M0,224L0,192L102.9,192L102.9,160L205.7,160L205.7,64L308.6,64L308.6,96L411.4,96L411.4,288L514.3,288L514.3,320L617.1,320L617.1,192L720,192L720,128L822.9,128L822.9,96L925.7,96L925.7,96L1028.6,96L1028.6,96L1131.4,96L1131.4,288L1234.3,288L1234.3,64L1337.1,64L1337.1,160L1440,160L1440,0L1337.1,0L1337.1,0L1234.3,0L1234.3,0L1131.4,0L1131.4,0L1028.6,0L1028.6,0L925.7,0L925.7,0L822.9,0L822.9,0L720,0L720,0L617.1,0L617.1,0L514.3,0L514.3,0L411.4,0L411.4,0L308.6,0L308.6,0L205.7,0L205.7,0L102.9,0L102.9,0L0,0L0,0Z"></path></svg>
            </div>
            <div className="Bg-1Side-2">
                <div className="col-12">
                    <div className="row">
                        <div className="col-6">
                            <h1 className="Side2Title">About Me</h1>
                            <span className="Side2Desc"></span>
                        </div>
                        <div className="col-6 fotoTitle">
                            <img className="foto" src={foto}/>
                            <h2 className="Side2TitleNama"> <i className="whiteOrange">Muhammad</i> <i className="whiteOrange">Indrawan</i> </h2>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-1">
                                        <FontAwesomeIcon icon={faGraduationCap}/>
                                    </div>
                                    <div className="col-11">SMK Negeri 5 Kota Bekasi</div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-1">
                                        <FontAwesomeIcon icon={faMapMarkerAlt}/>
                                    </div>
                                    <div className="col-11">Kota Bekasi, Bekasi Utara</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}