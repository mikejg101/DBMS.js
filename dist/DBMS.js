/* Base properties and methods */

//library object
var DBMS = {};

//where databases are stored during session
DBMS.databases = [];

//localstorage post json function
DBMS.post = function(name, data){
	data = JSON.stringify(data);
	localStorage.setItem(name, data);
}

//retrieve localstorage json
DBMS.retrieve = function(name){
	return JSON.parse(localStorage.getItem(name));
}

//localstorage databases; executes whenever a change is made anywhere
DBMS.postAll = function(){
	this.post('databases', this.databases);
}

//reset DBMS, delete everything
DBMS.empty = function(){
	DBMS.databases = [];
	this.postAll();
	localStorage.removeItem('databases');
}

//function to run through arrays for finding data
DBMS.selectProperty = function(name, arr){
	var nameNum = -1;
	for(var c = 0; c < arr.length; c++){
		try{
			if(arr[c].name === name){
				nameNum = c;
			};
		}catch(e){
			console.warn('Property not found. Either does not exist or has been deleted. Error: '+e);
		}
	}
	if(nameNum != -1 && arguments[2] != true){
		return arr[nameNum];
	}else if(nameNum != -1){
		return nameNum;
	}else{
		
	}
}

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

/* Tables */

//function to create a table within a database
DBMS.createTable = function(database, name, cols){
	this.selectDatabase(database).tables.push({
		name: name,
		columns: cols,
		rows: []
	});
	this.postAll();
}

//function to select a table
DBMS.selectTable = function(database, table){
	return this.selectProperty(table, this.selectDatabase(database).tables);
}

/* Data */

//add a row of data to a table
DBMS.addData = function(database, table, data){
	if(data.length === this.selectTable(database, table).columns.length){
		this.selectTable(database, table).rows.push(data);
	}
	this.postAll();
}

//function to select rows from a table
DBMS.selectData = function(col, table, row){
	var nameNum = -1;
	for(var c = 0; c < table.columns.length; c++){
		if(table.columns[c] === col){
			nameNum = c;
		}
	}
	if(nameNum != -1){
		return table.rows[row][nameNum];
	}
}
