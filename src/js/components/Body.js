import React from 'react';
import './../../scss/components/Body.scss';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import OtherSkills from './OtherSkills';
import Projects from './Projects';
import Technologies from './Technologies';

class Body extends React.Component {
  
  render() {
    return (
      <div className="Body">
        <Home/>
        <About/>
        <Projects/>
        <Technologies/>
        <OtherSkills/>
        <Contact/>
      </div>
    );
  }
  
}

export default Body;
