import Gmt from '../lib/gmt';
import HomeAnimation from './../animations/home-animation';

const AnimationManager = {

    _wrappers: {},
    _loop: {},

    attachWrapper(key, homeId) {
        homeId = homeId || key;
        this._wrappers[key] = new Gmt.CanvasWrapper(homeId);
    },

    detachWrapper(key) {
        this._wrappers[key] = null;
    },

    _checkIfMobile() {
        const regex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
        return regex.test(navigator.userAgent);
    },

    init() {
        const isMobile = this._checkIfMobile();
        const wrappers = this._wrappers;
        const homeAnimation = new HomeAnimation();
        this._loop = new Gmt.Loop(30, loop => {
            homeAnimation._doFrame(loop, isMobile, wrappers['Home']);
        }).start();
        
        return this;
    },

}.init();

export default AnimationManager;