/* Tables */

//function to create a table within a database
DBMS.createTable = function(database, name, cols){
	this.selectDatabase(database).tables.push({
		name: name,
		columns: cols,
		rows: []
	});
	this.postAll();
};

//function to select a table
DBMS.selectTable = function(database, table){
	return this.selectProperty(table, this.selectDatabase(database).tables);
};

/* Needs more methods, deleteTable, deleteColumn, addColumn etc. */
