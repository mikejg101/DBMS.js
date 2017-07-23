/* Tables */
var halcyon = (function (halcyon) {

    //function to create a table within a database
    halcyon.createTable = function (database, name, cols) {
        this.selectDatabase(database).tables.push({
            name: name,
            columns: cols,
            rows: []
        });
        this.postAll();
    };

    //function to select a table
    halcyon.selectTable = function (database, table) {
        return this.selectProperty(table, this.selectDatabase(database).tables);
    };

    /* Needs more methods, deleteTable, deleteColumn, addColumn etc. */

    return halcyon;
}(halcyon || {}));



