var halcyon = (function (halcyon, databases, storage) {

    /**
     * @name Database
     * @param {string} name
     * @constructor Database
     */
    function Database(name) {
        this.name = name;
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
