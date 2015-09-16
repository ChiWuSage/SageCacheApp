/*
function doClick(e) {
    alert($.label.text);
}
*/
var pokedex;
$.index.open();

function writeData(e)
{
	var db = Ti.Database.open('testDB');
	db.execute('CREATE TABLE IF NOT EXISTS employee(id INTEGER PRIMARY KEY AUTOINCREMENT, age INTEGER);');
	
	for(i=0; i<10; i++)
	{
		var randomNum = Math.floor(Math.random()*100);
		db.execute('INSERT INTO employee (age) VALUES (?)', randomNum);
	}
	
	alert("DONE");
	db.close();
}

function getData(e)
{
	//var pokedexWindow = Alloy.createController('pokedex').getView();
	//pokedexWindow.open();
	
	var db = Ti.Database.open('testDB');
	var rows = db.execute('SELECT id FROM employee');
	
	while(rows.isValidRow())
	{
		var id = rows.fieldByName('id');
		var age = rows.fieldByName('age');
		Ti.API.info("Id: " + id + " Age: " + age);
		rows.next();
	}
	
	db.close();
	
	/*
	var win = Ti.UI.createWindow({
		title: 'List',
		backgroundColor: '#fff'
	});

	var url = "http://pokeapi.co/api/v1/pokedex/1/";
	var xhr = Ti.Network.createHTTPClient({
		onload: function() {
			pokedex = JSON.parse(this.responseText);
		},
		
	});
	xhr.open("GET", url);
	xhr.send();
	
	//var tableData = [{title: "Apples"}, {title: "Bananas"}];
	var table = Ti.UI.createTableView({
		data: pokedex,
		backgroundColor : 'black',
		scrollable : 'true'
	});

	win.add(table);
	win.open();
	*/
}
function reset(e)
{
	var db = Ti.Database.open('testDB');
	db.execute('DROP TABLE IF EXISTS employee');
	db.close();
}
