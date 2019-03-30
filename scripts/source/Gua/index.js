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

    /**
     * Build code for database lookup.
     *
     * @param {*} [lines=[]]
     * @returns
     * @memberof Database
     */
    _buildCode(lines = this.lines) { 
        return lines.map(line => this._getCodeFromLine(line));
    }

    /**
     * Helper for _buildCode
     *
     * @param {*} [line=new Line()]
     * @returns
     * @memberof Database
     */
    _getCodeFromLine(line = new Line()) {
        return line.yin ? 0 : 1; 
    }
}