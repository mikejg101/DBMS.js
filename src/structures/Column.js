var halcyon = (function (halcyon) {

    /**
     * @name Column
     * @param {string} name
     * @param {string} type
     * @memberOf halcyon
     * @constructor Column
     */
    halcyon.Column = function (name, type) {

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

    };

    return halcyon;
}(halcyon || {}));


