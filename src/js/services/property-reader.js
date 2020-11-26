import propsEn from  './../../assets/properties/properties.en.json';
import propsPl from  './../../assets/properties/properties.pl.json';

const PropertyReader = {

    _locale: 'en',

    locale(key) {
        if(this._locale !== key) {
            this._locale = key;
            this.onLocaleChange(key);
            return this;
        }
    },

    onLocaleChange: (() => {}),

    _getRoot() {
        switch(this._locale) {
            case "en": return propsEn;
            case "pl": return propsPl;
            default: return propsEn;
        }
    },
    
    get(...keys) {
        let root = this._getRoot();
        for(let i = 0; i < keys.length; i++) {
            const nextRoot = root[keys[i]];
            if(!!nextRoot) {
                root = nextRoot;
            } else {
                return null;
            }
        }
        return root;
    }   

};


export default PropertyReader;