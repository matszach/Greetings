import React from 'react';
import './../../scss/components/AskewTransition.scss';

class AskewTransition extends React.Component {

    constructor(props) {
        super();
        this.props = props;
    }
    
    render() {
        return (
            <div className={"AskewTransition " + this.props.side}></div>
        );
    }
  
}

export default AskewTransition;
