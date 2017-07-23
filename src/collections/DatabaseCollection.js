var halcyon = (function (halcyon) {

    /**
     * @description ensures that only one DatabaseCollection exists
     * @type {DatabaseCollection}
     */
    var databaseCollection = null;

    /**
     * @name DatabaseCollection
     * @description where databases are stored during session
     * @constructor DatabaseCollection
     */
    function DatabaseCollection() {

        /**
         * @name databases
         * @description contains all of the databases
         * @type {Database[]}
         */
        var databases = [];

        /**
         * @name insert
         * @description insert a database into the database collection
         * @param {Database} database
         * @memberOf DatabaseCollection
         */
        this.insert = function (database) {
            databases.push(database);
        };

        /**
         * @name remove
         * @description removes a database from the database collection
         * @param {number} index
         * @memberOf DatabaseCollection
         */
        this.remove = function (index) {
            databases.splice(index, 1);
        };

        /**
         * @name removeWithName
         * @description removes a database from the database collection by name
         * @param {string} name
         * @memberOf DatabaseCollection
         */
        this.removeWithName = function (name) {
            var index = this.indexOf(function (database) {
                database.name = name;
            });
            databases.splice(index, 1);
        };

        /**
         * @name indexOf
         * @description gets the index of the database
         * @param {function} callback
         * @returns {number} index
         * @memberOf DatabaseCollection
         */
        this.indexOf = function (callback) {
            for (var i = 0; i < databases.length; i++) {
                if (callback(databases[i])) {
                    return i;
                }
            }
            return -1;
        };

        /**
         * @name get
         * @description returns a database from the database collection
         * @param {number} index
         * @returns {Database} database
         * @memberOf DatabaseCollection
         */
        this.get = function (index) {
            return databases[index];
        };

        /**
         * @name data
         * @description returns a string representation of the database collection
         * @returns {string} data
         * @memberOf DatabaseCollection
         */
        this.data = function () {
            return JSON.stringify(databases);
        };

        /**
         * @name clear
         * @description empties the database collection
         * @memberOf DatabaseCollection
         */
        this.clear = function () {
            databases = [];
        }

    }

    /**
     * @name getData
     * @description
     * @returns {string}
     * @memberOf halcyon
     */
    halcyon.getData = function () {
        return halcyon.GetDatabaseCollection().data();
    };


    /**
     * @name deleteDatabase
     * @description delete an entire database
     * @param {string} name
     * @memberOf halcyon
     */
    halcyon.deleteDatabase = function (name) {
        halcyon.GetDatabaseCollection().removeWithName(name);
        halcyon.GetStorage().postAll();
    };

    /**
     * @name clearAll
     * @description
     * @memberOf halcyon
     */
    halcyon.clearAll = function () {
        halcyon.GetDatabaseCollection().clear();
        halcyon.GetStorage().postAll();
    };

    /**
     * @name GetDatabaseCollection
     * @description returns the current database collection
     * @returns {DatabaseCollection} databaseCollection
     * @memberOf halcyon
     */
    halcyon.GetDatabaseCollection = function () {
        if (databaseCollection === null) {
            databaseCollection = new DatabaseCollection();
        }
        return databaseCollection;
    };

    return halcyon;
}(halcyon || {}));