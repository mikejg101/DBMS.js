/* Databases */
var halcyon = (function (halcyon) {

    //function to create a database
    halcyon.createDatabase = function (name) {
        this.databases.push({
            name: name,
            tables: []
        });
        this.postAll();
    };

    //function to select a database
    halcyon.selectDatabase = function (database) {
        return this.selectProperty(database, this.databases, arguments[1]);
    };

    //delete an entire database
    halcyon.deleteDatabase = function (database) {
        this.databases.splice(this.selectDatabase(database, true), 1);
        this.postAll();
    };

    //empty a database of it's tables
    halcyon.emptyDatabase = function (database) {
        database.tables = [];
    };

    return halcyon;
}(halcyon || {}));
