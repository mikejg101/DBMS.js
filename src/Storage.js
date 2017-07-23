/* Storage */
var halcyon = (function (halcyon, storage) {

    //localstorage post json function
    halcyon.post = function (name, data) {
        storage.setItem(name, data);
    };

    //retrieve localstorage json
    halcyon.retrieve = function (name) {
        return JSON.parse(storage.getItem(name));
    };

    //localstorage databases; executes whenever a change is made anywhere
    halcyon.postAll = function () {
        this.post('databases', halcyon.getData());
    };

    //reset DBMS, delete everything
    halcyon.empty = function () {
        halcyon.clearAll();
        this.postAll();
        storage.removeItem('databases');
    };

    return halcyon;
}(halcyon || {}, localStorage));