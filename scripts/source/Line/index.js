/**
 * A single line in a Gua.
 * @export  
 * @params {Boolean} yin, changing
 * @class Line
 */
export const Line = class Line {
    constructor(yin = false, changing = false) {
        this.changing = changing;
        this.yin = yin;
    }
}