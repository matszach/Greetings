import React from 'react';
import './../../scss/components/Contact.scss';
import imgLinkedin from './../../assets/img/link.png';
import imgGithub from './../../assets/img/github.png';
import imgLichess from './../../assets/img/lichess.png';
import imgMail from './../../assets/img/mail.png';
import ContactBlock from './ContactBlock';


class Contact extends React.Component {
  render() {
    return (
      <div className="Contact">
        <ContactBlock img={imgLinkedin} desc="Linkedin" url="https://www.linkedin.com/in/%C5%82ukasz-kaszubowski-5b1788174/"/>
        <ContactBlock img={imgGithub} desc="Github" url="https://github.com/matszach"/>
        <ContactBlock img={imgLichess} desc="Lichess" url="https://lichess.org/@/Malefis"/>
        <ContactBlock img={imgMail} desc="lkaszubowski@gmail.com" copy="lkaszubowski@gmail.com"/>
      </div>
    );
  }
  
}

export default Contact;
