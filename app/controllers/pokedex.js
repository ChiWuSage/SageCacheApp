Ti.UI.backgroundColor = 'white';
var win = Ti.UI.createWindow();

var tableData = [{title: "Apples"}, {title: "Bananas"}];
var table = Ti.UI.createTableView({
	data: tableData
});

win.add(table);
win.open();
