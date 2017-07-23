var halcyon = (function (halcyon) {

    /**
     * @name Table
     * @param {string} name
     * @param {{name:string, type:string}[]} columns
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
         * @type {{name: string, type: string}[]}
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
     * @param {{name:string, type:string}[]} cols
     * @memberOf halcyon
     */
    halcyon.createTable = function (name, cols) {
        return new Table(name, cols);
    };

    return halcyon;
}(halcyon || {}));


