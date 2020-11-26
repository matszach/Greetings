import React from 'react';
import './../../scss/components/ContactBlock.scss';

class ContactBlock extends React.Component {

    constructor(props) {
        super();
        this.props = props;
        this.handleClick = this.handleClick.bind(this);
        this.getClass = this.getClass.bind(this);
    }

    handleClick() {
        if(this.props.url) {
            window.open(this.props.url);
        }
    }

    getClass() {
        return "ContactBlock" + (!!this.props.url ? ' clickable' : '');
    }

    render() {
        return (
            <div className={this.getClass()} onClick={this.handleClick}>
                <div className="contact-img-holder">
                    <img className="contact-img" src={this.props.img} alt=''/>
                </div>
                <label className="contact-label">{this.props.desc}</label>
            </div>
        );
    }
  
}

export default ContactBlock;
