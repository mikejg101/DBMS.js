var halcyon = (function (halcyon, databases, storage) {

    /**
     * @name Database
     * @param {string} name
     * @constructor Database
     */
    function Database(name) {
        var tables = halcyon.CreateTableCollection();

        /**
         * @name name
         * @type {string}
         * @memberOf Database
         */
        this.name = name;

        /**
         * @name getTables
         * @returns {string}
         * @memberOf Database
         */
        this.getTables = function () {
            return tables.data();
        };

        /**
         * @name addTable
         * @param {string} name
         * @param columns
         * @memberOf Database
         */
        this.addTable = function (name, columns) {
            tables.insert(halcyon.createTable(name, columns));
            storage.postAll();
        };

        /**
         * @name clearAll
         * @description empty this database of its tables
         * @memberOf Database
         */
        this.clearAll = function () {
            tables.clear();
            storage.postAll();
        };
    }

    /**
     * @name createDatabase
     * @description function to create a database
     * @param {string} name
     * @memberOf halcyon
     */
    halcyon.createDatabase = function (name) {
        databases.insert(new Database(name));
        storage.postAll();
    };

    return halcyon;
}(halcyon || {}, halcyon.GetDatabaseCollection(), halcyon.GetStorage()));
