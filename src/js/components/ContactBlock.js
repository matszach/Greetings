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
        } else {
            const node = document.getElementById('cl-' + this.props.desc);
            if (document.body.createTextRange) {
                const range = document.body.createTextRange();
                range.moveToElementText(node);
                range.select();
            } else if (window.getSelection) {
                const selection = window.getSelection();
                const range = document.createRange();
                range.selectNodeContents(node);
                selection.removeAllRanges();
                selection.addRange(range);
            }
            document.execCommand('copy');
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
                <label className="contact-label" id={'cl-' + this.props.desc}>{this.props.desc}</label>
            </div>
        );
    }
  
}

export default ContactBlock;
