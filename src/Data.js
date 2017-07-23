/* Data */

//add a row of data to a table
DBMS.addData = function(database, table, data){
	if(data.length === this.selectTable(database, table).columns.length){
		this.selectTable(database, table).rows.push(data);
	}
	this.postAll();
};

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
};

/* Needs functions to do actions similar to that of SQL */
