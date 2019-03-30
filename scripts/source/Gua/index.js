import { Line } from "../Line";

/**
 * @export
 * @params {Array} Lines, defaults to six solid lines, not changing.
 * @class Gua
 */
export const Gua = class Gua {
    constructor(lines = new Array(6).fill(new Line())) {
        this.lines = lines;
    }

    /**
     * Swap a line.
     *
     * @param {number} [position=0]
     * @param {*} [newLine=new Line()]
     * @param {*} [lines=this.lines]
     * @returns
     */
    changeLine(position = 0, newLine = new Line(), lines = this.lines, ) {
        lines[position] = newLine;
        return lines;
    }
}
