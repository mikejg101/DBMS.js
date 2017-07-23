/* Data selection functions */

//function to select a row based on whether a column has a value
DBMS.selectWhere = function(queries, table){
	if(Array.isArray(queries[0])){
		var results = [],
				compliant = true;
		for(var c = 0; c < table.rows.length; c++){
			compliant = true;
			for(var d = 0; d < queries.length; d++){
				if(this.selectData(queries[d][0], table, c) != queries[d][1]){
					compliant = false;
				}
			}
			if(compliant){
				results.push(table.rows[c]);
			}
		}
		return results;
	}else{
		var results = [];
		for(var c = 0; c < table.rows.length; c++){
			if(this.selectData(queries[0], table, c) === queries[1]){
				results.push(table.rows[c]);
			}
		}
		return results;
	}
};
