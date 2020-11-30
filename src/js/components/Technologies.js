import React from 'react';
import './../../scss/components/Technologies.scss';
import AskewTransition from './AskewTransition';

class Technologies
 extends React.Component {
  
  render() {
    return (
      <div className="Technologies">
        <AskewTransition side="left"/>
        Technologies
      </div>
    );
  }
  
}

export default Technologies;
