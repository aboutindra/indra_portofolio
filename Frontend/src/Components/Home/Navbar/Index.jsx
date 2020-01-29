import React, {Component} from "react";

export default class NavbarIndex extends Component {

    state = {
        isHide : false
    }

    hideNavBar = () => {

        const { isHide } = this.state;

        window.scrollY > this.prev ? !isHide && this.setState({ isHide: true })
            :
        isHide && this.setState( { isHide: false } );
        this.prev = window.scrollY;
    };

    componentDidMount() {
        window.addEventListener('scroll', this.hideNavBar);
    }

    componentWillMount() {
        window.removeEventListener('scroll', this.hideNavBar);
    }

    render(){
        const classHide = this.state.isHide ? 'hide' : '';
        console.log(classHide);
        return(
            <div className={`NavbarIndex ${classHide}`}>
                <div className="col-12">
                    <div className="row">
                        <div className="col-4">
                            <img className="nav-logo"/>
                        </div>
                        <div className="col-8 right">
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

}