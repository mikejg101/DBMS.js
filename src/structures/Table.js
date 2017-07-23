var halcyon = (function (halcyon) {

    /**
     * @name Table
     * @param {string} name
     * @param {Column[]} columns
     * @constructor Table
     */
    function Table(name, columns) {

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

    }

    /**
     * @name createTable
     * @description function to create a table within a database
     * @param {string} name
     * @param {Column[]} cols
     * @memberOf halcyon
     */
    halcyon.createTable = function (name, cols) {
        return new Table(name, cols);
    };

    return halcyon;
}(halcyon || {}));


