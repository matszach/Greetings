class Animation {

    constructor() {
        this.init();
    }

    _doFrame(loop, wrapper) {
        if(!!wrapper) {
            this.doFrame(loop, wrapper);
        }
    }

    doFrame(loop, wrapper) {
        // abstract
    }

    init() {
        // abstract
    }

}

export default Animation;