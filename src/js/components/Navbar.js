import React from 'react';
import PropertyReader from '../services/property-reader';
import './../../scss/components/Navbar.scss';
import LocaleChanger from './LocaleChanger';
import NavButton from './NavButton';

class Navbar extends React.Component {

    constructor() {
        super();
        this.attachScrollListener();
    }

    attachScrollListener() {
        window.onscroll = () => {
            const y = window.scrollY;
            const nav = document.getElementById('Navbar');
            if(nav) {
                if(y > 50) {
                    nav.classList.remove('isTop');
                } else {
                    nav.classList.add('isTop');
                }
            }
        }
    }

    render() {
        const nav = PropertyReader.get('nav');
        return (
            <div className='Navbar isTop' id='Navbar'>
                <NavButton name={nav.home} target={'Home'}/>
                <NavButton name={nav.about} target={'About'}/>
                <NavButton name={nav.projects} target={'Projects'}/>
                <NavButton name={nav.technologies} target={'Technologies'}/>
                <NavButton name={nav.otherSkills} target={'OtherSkills'}/>
                <NavButton name={nav.contact} target={'Contact'}/>
                <LocaleChanger/>
            </div>
        );
    }
}

export default Navbar;
