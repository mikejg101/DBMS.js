/* Databases */

//function to create a database
DBMS.createDatabase = function(name){
	this.databases.push({
		name: name,
		tables: []
	});
	this.postAll();
}

//function to select a database
DBMS.selectDatabase = function(database){
	return this.selectProperty(database, this.databases, arguments[1]);
}

//delete an entire database
DBMS.deleteDatabase = function(database){
	this.databases.splice(this.selectDatabase(database, true), 1);
	this.postAll();
}

//empty a database of it's tables
DBMS.emptyDatabase = function(database){
	database.tables = [];
}
