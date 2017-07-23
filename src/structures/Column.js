var halcyon = (function (halcyon) {

    /**
     * @name Column
     * @param {string} name
     * @param {string} type
     * @constructor Column
     */
    function Column(name, type) {

        /**
         * @name name
         * @type {string}
         * @memberOf Column
         */
        this.name = name;

        /**
         * @name type
         * @type {string}
         * @memberOf Column
         */
        this.type = type;

    }

    /**
     * @name createColumn
     * @description function to create a table within a database
     * @param {string} name
     * @param {string} type
     * @memberOf halcyon
     */
    halcyon.createColumn = function (name, type) {
        return new Column(name, type);
    };

    return halcyon;
}(halcyon || {}));


