/* Base properties and methods */

//Library namespace
var halcyon = (function (halcyon) {

    //where databases are stored during session
    halcyon.databases = [];

    //localstorage post json function
    halcyon.post = function (name, data) {
        data = JSON.stringify(data);
        localStorage.setItem(name, data);
    };

    //retrieve localstorage json
    halcyon.retrieve = function (name) {
        return JSON.parse(localStorage.getItem(name));
    };

    //localstorage databases; executes whenever a change is made anywhere
    halcyon.postAll = function () {
        this.post('databases', this.databases);
    };

    //reset DBMS, delete everything
    halcyon.empty = function () {
        halcyon.databases = [];
        this.postAll();
        localStorage.removeItem('databases');
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
