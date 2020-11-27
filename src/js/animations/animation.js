class Animation {

    constructor() {
        this.init();
    }

    _doFrame(loop, isMobile, wrapper) {
        if(!!wrapper) {
            this.doFrame(loop, isMobile, wrapper);
        }
    }

    doFrame(loop, isMobile, wrapper) {
        // abstract
    }

    init() {
        // abstract
    }

}

export default Animation;