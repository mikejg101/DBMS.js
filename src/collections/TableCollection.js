var halcyon = (function (halcyon) {

    /**
     * @name TableCollection
     * @description
     * @constructor TableCollection
     */
    function TableCollection() {

        /**
         * @name tables
         * @description contains all of the tables
         * @type {Table[]}
         */
        var tables = [];

        /**
         * @name insert
         * @description insert a table into the table collection
         * @param {Table} table
         * @memberOf TableCollection
         */
        this.insert = function (table) {
            tables.push(table);
        };

        /**
         * @name remove
         * @description removes a table from the table collection
         * @param {number} index
         * @memberOf TableCollection
         */
        this.remove = function (index) {
            tables.splice(index, 1);
        };

        /**
         * @name removeWithName
         * @description removes a table from the table collection by name
         * @param {string} name
         * @memberOf TableCollection
         */
        this.removeWithName = function (name) {
            var index = this.indexOf(function (table) {
                table.name = name;
            });
            tables.splice(index, 1);
        };

        /**
         * @name indexOf
         * @description gets the index of the table
         * @param {function} callback
         * @returns {number} index
         * @memberOf TableCollection
         */
        this.indexOf = function (callback) {
            for (var i = 0; i < tables.length; i++) {
                if (callback(tables[i])) {
                    return i;
                }
            }
            return -1;
        };

        /**
         * @name get
         * @description returns a table from the table collection
         * @param {number} index
         * @returns {Table} table
         * @memberOf TableCollection
         */
        this.get = function (index) {
            return tables[index];
        };

        /**
         * @name data
         * @description returns a string representation of the table collection
         * @returns {string} data
         * @memberOf TableCollection
         */
        this.data = function () {
            return JSON.stringify(tables);
        };

        /**
         * @name clear
         * @description empties the table collection
         * @memberOf TableCollection
         */
        this.clear = function () {
            tables = [];
        }

    }

    halcyon.CreateTableCollection = function () {
        return new TableCollection();
    };

    return halcyon;
}(halcyon || {}));