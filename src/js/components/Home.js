import React from 'react';
import AnimationManager from '../services/animation-manager';
import './../../scss/components/Home.scss';
import profile from './../../assets/img/profile.jpg';

class Home extends React.Component {
  
  render() {
    return (
        <div className="Home" id="Home">
            <div className="wrapper">
                <img className="profile-pic" src={profile} alt=''/>
            </div>
        </div>
    );
  }

  componentDidMount() {
    AnimationManager.attachWrapper("Home");
  }
  
}

export default Home;
