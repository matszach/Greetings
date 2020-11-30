import React from 'react';
import './../../scss/components/Projects.scss';
import AskewTransition from './AskewTransition';

class Projects extends React.Component {
  
  render() {
    return (
      <div className="Projects">
        <AskewTransition side="right"/>
        Projects
      </div>
    );
  }
  
}

export default Projects;
