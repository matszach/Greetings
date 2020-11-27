import Animation from './animation';
import Gmt from './../lib/gmt';

class HomeAnimation extends Animation {

    doFrame(loop, isMobile, cw) {
        cw.clear();
        const f = loop.getFrame();
        const bRect = cw.getBoundingRect();
        const center = bRect.getCenter(); 
        if(!isMobile) {
            center.move(5, 0);
        }
        const nofPentagons = Math.max(bRect.width, bRect.height)/70 + 10;
        Gmt.iter1D(nofPentagons, i => {
            const circle = center.toCircle(100 + 35 * i);
            const dir = ((i / 120) * (isMobile ? 2 : 1) + (f / 4000)) * 2 * Math.PI; 
            const pentagon = circle.toPolygon(5, dir);
            let cs = (((f / 5) % 20 + i) % 10) * 15;
            cs = cs < 75 ? cs : 150 - cs;
            const color = cw.rgb(20 + cs, 20 + cs, 100 + cs);
            cw.strokePolygon(pentagon, color, 2);
        }); 
    }

}

export default HomeAnimation;