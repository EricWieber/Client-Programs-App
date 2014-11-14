var args = arguments[0] || {};

//if (args != {}) {
	var file = args.file;
	$.row.events = args.events || "";
	$.row.index = args.index || "";
	$.name.text = args.title || "";
	$.row.name = args.name || "";
	$.row.add1 = args.add1 || "";
	$.row.add2 = args.add2 || "";
	$.row.add3 = args.add3 || "";
	$.row.city = args.city || "";
	$.row.state = args.state || "";
	$.row.postcode = args.postcode || "";
	$.row.phone = args.phone || "";
	$.row.mobile = args.mobile || "";
	$.row.email = args.email || "";
	$.row.guestof = args.guestof || "";
	$.row.reltoclient = args.reltoclient || "";
	$.row.oid = args.oid || "";
	$.row.sent = args.sent || "";
	$.check.visible = args.sent || false;
	var eventName = args.eventName || "";
//}

$.row.addEventListener("delete", function(){
	var string = JSON.parse(file.read().text);
	if ($.row.index == "")
		Ti.App.fireEvent("removeEvent", {events: $.row.events});
	else
		Ti.App.fireEvent("removeCard", {events: $.row.events, index: $.row.index});
	
	if (!file.write(JSON.stringify(string))){
		alert("Failed to update file");
	}
});