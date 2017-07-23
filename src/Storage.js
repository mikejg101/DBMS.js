/* Storage */
var halcyon = (function (halcyon) {

    /**
     * @description ensures that only one Storage exists
     * @type {Storage}
     */
    var storage = null;

    /**
     * @name Storage
     * @param {string }type
     * @constructor Storage
     */
    function Storage(type) {
        var container = null;

        if (type === "localStorage") {
            container = localStorage;
        } else if (type === "sessionStorage") {
            container = sessionStorage;
        } else {
            container = {
                "data": [],
                "setItem": function (name, data) {
                    for (var i = 0; i < this.data.length; i++) {
                        if (this.data[i].name === name) {
                            this.data[i].value = data;
                            return;
                        }
                    }
                },
                "getItem": function (name) {
                    for (var i = 0; i < this.data.length; i++) {
                        if (this.data[i].name === name) {
                            return this.data[i];
                        }
                    }
                },
                "removeItem": function (name) {
                    for (var i = 0; i < this.data.length; i++) {
                        if (this.data[i].name === name) {
                            this.data.splice(i, 1);
                            return;
                        }
                    }
                }
            };
        }

        /**
         * @name post
         * @description post json function
         * @param {string} name
         * @param {object} data
         * @memberOf Storage
         */
        this.post = function (name, data) {
            container.setItem(name, data);
        };

        /**
         * @name retrieve
         * @description retrieve json function
         * @param {string} name
         * @memberOf Storage
         */
        this.retrieve = function (name) {
            return JSON.parse(container.getItem(name));
        };

        /**
         * @name postAll
         * @description executes whenever a change is made anywhere
         * @memberOf Storage
         */
        this.postAll = function () {
            this.post('databases', halcyon.getData());
        };

        /**
         * @name empty
         * @description reset DBMS, delete everything
         * @memberOf Storage
         */
        this.empty = function () {
            halcyon.clearAll();
            this.postAll();
            container.removeItem('databases');
        };

    }

    /**
     * @name GetStorage
     * @description returns the current storage object
     * @returns {Storage} storage
     * @memberOf halcyon
     */
    halcyon.GetStorage = function (type) {
        if (storage === null) {
            storage = new Storage(type);
        }
        return storage;
    };

    return halcyon;
}(halcyon || {}));