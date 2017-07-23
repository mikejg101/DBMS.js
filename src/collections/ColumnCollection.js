var halcyon = (function (halcyon) {

    /**
     * @name ColumnCollection
     * @description
     * @constructor ColumnCollection
     */
    function ColumnCollection() {

        /**
         * @name columns
         * @description contains all of the column
         * @type {Column[]}
         */
        var columns = [];

        /**
         * @name insert
         * @description insert a column into the column collection
         * @param {Column} column
         * @memberOf ColumnCollection
         */
        this.insert = function (column) {
            columns.push(column);
        };

        /**
         * @name remove
         * @description removes a column from the column collection
         * @param {number} index
         * @memberOf ColumnCollection
         */
        this.remove = function (index) {
            columns.splice(index, 1);
        };

        /**
         * @name removeWithName
         * @description removes a column from the column collection by name
         * @param {string} name
         * @memberOf ColumnCollection
         */
        this.removeWithName = function (name) {
            var index = this.indexOf(function (column) {
                column.name = name;
            });
            columns.splice(index, 1);
        };

        /**
         * @name indexOf
         * @description gets the index of the column
         * @param {function} callback
         * @returns {number} index
         * @memberOf ColumnCollection
         */
        this.indexOf = function (callback) {
            for (var i = 0; i < columns.length; i++) {
                if (callback(columns[i])) {
                    return i;
                }
            }
            return -1;
        };

        /**
         * @name get
         * @description returns a table from the column collection
         * @param {number} index
         * @returns {Column} column
         * @memberOf ColumnCollection
         */
        this.get = function (index) {
            return columns[index];
        };

        /**
         * @name data
         * @description returns a string representation of the column collection
         * @returns {string} data
         * @memberOf ColumnCollection
         */
        this.data = function () {
            return JSON.stringify(columns);
        };

        /**
         * @name clear
         * @description empties the column collection
         * @memberOf ColumnCollection
         */
        this.clear = function () {
            columns = [];
        }

    }

    halcyon.CreateColumnCollection = function () {
        return new ColumnCollection();
    };

    return halcyon;
}(halcyon || {}));