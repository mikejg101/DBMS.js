/**
 * @namespace halcyon
 */
var halcyon = (function (halcyon) {

    // /**
    //  * @description function to select a database
    //  * @param {string} databaseName
    //  * @memberOf halcyon
    //  */
    // halcyon.selectDatabase = function (databaseName) {
    //     return this.selectProperty(databaseName, databases, arguments[1]);
    // };
    // /**
    //  * @description function to run through arrays for finding data
    //  * @param name
    //  * @param arr
    //  * @returns {*}
    //  * @memberOf halcyon
    //  */
    // halcyon.selectProperty = function (name, arr) {
    //     var nameNum = -1;
    //     for (var c = 0; c < arr.length; c++) {
    //         try {
    //             if (arr[c].name === name) {
    //                 nameNum = c;
    //             }
    //         } catch (e) {
    //             console.warn('Property not found. Either does not exist or has been deleted. Error: ' + e);
    //         }
    //     }
    //     if (nameNum != -1 && arguments[2] != true) {
    //         return arr[nameNum];
    //     } else if (nameNum != -1) {
    //         return nameNum;
    //     } else {
    //
    //     }
    // };

    return halcyon;
}(halcyon || {}));
