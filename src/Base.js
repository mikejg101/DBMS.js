/**
 * @namespace halcyon
 */
var halcyon = (function (halcyon) {

    //where databases are stored during session
    var databases = [];

    /**
     * @description function to create a database
     * @param {string} name
     */
    halcyon.createDatabase = function (name) {
        databases.push({
            name: name,
            tables: []
        });
        this.postAll();
    };

    /**
     * @description function to select a database
     * @param {object} database
     */
    halcyon.selectDatabase = function (database) {
        return this.selectProperty(database, databases, arguments[1]);
    };

    /**
     * @description delete an entire database
     * @param {object} database
     */
    halcyon.deleteDatabase = function (database) {
        databases.splice(this.selectDatabase(database, true), 1);
        this.postAll();
    };

    halcyon.clearAll = function () {
        databases = [];
    };

    halcyon.getData = function () {
        return JSON.stringify(databases);
    };

    /**
     * @description empty a database of it's tables
     * @param {object} database
     */
    halcyon.emptyDatabase = function (database) {
        database.tables = [];
    };

    //function to run through arrays for finding data
    halcyon.selectProperty = function (name, arr) {
        var nameNum = -1;
        for (var c = 0; c < arr.length; c++) {
            try {
                if (arr[c].name === name) {
                    nameNum = c;
                }
            } catch (e) {
                console.warn('Property not found. Either does not exist or has been deleted. Error: ' + e);
            }
        }
        if (nameNum != -1 && arguments[2] != true) {
            return arr[nameNum];
        } else if (nameNum != -1) {
            return nameNum;
        } else {

        }
    };

    return halcyon;
}(halcyon || {}));
