# DBMS.js
A Javascript DBMS (DataBase Management System) using localStorage for client side browser based applications.
## What's it for?
The idea is that for people like myself of whom do not have a web server or aren't a back end programmer, this is a library to help create client side webapps, to be downloaded as an HTML file and used for data management applications and the like.

It doesn't just have to be a database substitute, it can be used as a storage method for a local game leaderboard. The approach used with DBMS.js is easy to learn and get used to, and it's a great way of managing small to large scale applications.

## Why should I use it?

It's extremely lightweight as a library and saves you the bother of trying to save complex data in localStorage.

## How do I use it?

First of all, everything is stored in the DBMS object. From the actual databases to data selection methods, it's all in there.

### Create a database

DBMS.createDatabase(databaseName);

databaseName - String

Creates a database to hold tables containing rows of data. The database will reside at DBMS.databases, however, you can more easily select a database with DBMS.selectDatabase.

### Create a table

DBMS.createTable(database, tableName, columns);

database - String (must be already created through DBMS.createDatabase)

tableName - String

columns - Array (containing the column names as either String or Number)

Creates a table to hold rows of data aligned to specified columns.

### Delete a database

DBMS.deleteDatabase(database);

database - String

Completely removes all traces of database; removes it from the DBMS.databases array and from localStorage.

### Delete a table

DBMS.deleteTable();

I actually haven't created this function yet, so umm...

It'll be a fairly easy patch up job though.

### Empty a database

DBMS.emptyDatabase(database);

database - String

Empties a database of all it's tables and the data contained within.

### Empty a table

DBMS.emptyTable();

Haven't made this either, surprisingly!

### Add data to a table

DBMS.addData(database, table, data);

database - String

table - String

data - Array (containing values for each column)

Adds a new row of data to the end of a table.

### Select data where values match

DBMS.selectWhere(queries, table);

queries - Array of arrays (example: [[columnName, value], [columnName, value]] )

You can have as many queries as you want.

table - String

Returns all rows in the specified table where every query matches. (so if ['id', 567] matches to a row, it means the 'id' column has the value 567)

This method returns an array containing all of the matching rows (also arrays)
