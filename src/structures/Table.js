var halcyon = (function (halcyon) {

    /**
     * @name Table
     * @param {string} name
     * @param {Column[]} columns
     * @memberOf halcyon
     * @constructor Table
     */
    halcyon.Table = function (name, columns) {

        /**
         * @name name
         * @type {string}
         * @memberOf Table
         */
        this.name = name;

        /**
         * @name columns
         * @type {Column[]}
         * @memberOf Table
         */
        this.columns = columns;

        /**
         * @name rows
         * @type {Array}
         * @memberOf Table
         */
        this.rows = [];

        //TODO Needs more methods, deleteTable, deleteColumn, addColumn etc. */

    };

    return halcyon;
}(halcyon || {}));


