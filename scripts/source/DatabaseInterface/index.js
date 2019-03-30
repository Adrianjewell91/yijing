/**
 * Interface for Interacting with the Databse
 * Decouple the Databse from the Gua and Line, and decouple methods for interacting with
 * the database from the classes themselves.
 * 
 * @class DatabaseInterface
 */
export const DatabaseInterface = class DatabaseInterface {
    /**
     * Build code for database lookup.
     *
     * @param {*} [lines=[]]
     * @returns
     * @memberof Database
     */
    static buildCode(lines = []) {
        return lines.map(line => this.getCode(line));
    }

    /**
     * Returns 0 or 1 to indicate the Yin or Yang Line.
     *
     * @param {*} [line=new Line()]
     * @returns
     * @memberof Database
     */
    static getCode(line = new Line()) {
        return line.yin ? 0 : 1;
    }
}