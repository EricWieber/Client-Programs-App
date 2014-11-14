var args = arguments[0] || {};

//if (args != {}) {
	var file = args.file;
	$.name.text = args.name;
	$.row.name = args.name;
	$.row.rowNum = args.rowNum;
	$.check.visible = args.sent;
	var eventName = args.eventName;
//}

$.row.addEventListener("delete", function(){
	var string = JSON.parse(file.read().text);
	
	if (eventName == null){
		delete string[$.name.text];
		var ind = string["Events"].indexOf($.name.text);
		if (ind > -1) {
			string["Events"].splice(ind, 1);
		}
	} else {
		string[eventName].splice($.row.rowNum, 1);
	}
	
	//Ti.App.Properties.setString('Data', JSON.stringify(string));
	if (!file.write(JSON.stringify(string))){
		alert("Failed to update file");
	}
	
	//Ti.App.fireEvent("update");
});