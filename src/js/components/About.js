import React from 'react';
import './../../scss/components/About.scss';
import AskewTransition from './AskewTransition';

class About extends React.Component {
  
  render() {
    return (
      <div className="About">
        <AskewTransition side='left'/>
        About
      </div>
    );
  }
  
}

export default About;
