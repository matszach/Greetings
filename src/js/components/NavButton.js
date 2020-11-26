import React from 'react';
import './../../scss/components/NavButton.scss';

class NavButton extends React.Component {

    constructor(props) {
        super();
        this.props = props;
        this.scroll = this.scroll.bind(this);
    }

    scroll() {
        const element = document.getElementsByClassName(this.props.target);
        if(!!element && !!element[0]) {
            window.scrollTo({
                top: element[0].offsetTop,
                behavior: "smooth"
            });
        }
    }

    render() {
        return (
            <div className="NavButton" onClick={this.scroll}>
                <div className="outer">
                    <div className="inner">{this.props.name}</div>
                </div>
            </div>
        );
    }
}

export default NavButton;
