import React from 'react';
import PropertyReader from '../services/property-reader';
import './../../scss/components/LocaleChanger.scss';

import imgPL from './../../assets/img/pl.png';
import imgGB from './../../assets/img/gb.png';
// import imgSWE from './../../assets/img/swe.png';

class LocaleChanger extends React.Component {

    constructor() {
        super();
        this.change = this.change.bind(this);
        this.flagClass = this.flagClass.bind(this);
    }

    change(key) {
        PropertyReader.locale(key);
    }

    flagClass(key) {
        return 'flag' + (PropertyReader._locale === key ? ' selected' : '');
    }

    render() {
        return (
            <div className="LocaleChanger">
                <div className={this.flagClass('pl')} onClick={() => this.change('pl')}>
                    <img className='flagIcon' src={imgPL} alt='pl'/>
                </div> 
                <div className={this.flagClass('en')} onClick={() => this.change('en')}>
                    <img className='flagIcon' src={imgGB} alt='en'/>
                </div>
                {/* <div className={this.flagClass('swe')} onClick={() => this.change('swe')}>
                    <img className='flagIcon' src={imgSWE} alt='swe'/>
                </div> */}
            </div>
        );
    }
}

export default LocaleChanger;
