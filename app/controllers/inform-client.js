var args = arguments[0] || {};

var file = args.file;
var x = args.x;
var y = args.y;

//var string = JSON.parse(Ti.App.Properties.getString('Data'));
var string = JSON.parse(file.read().text);
var edit = "false";

$.name.value = string[x][y].name;
$.numbers.value = string[x][y].numbers;
$.message.value = string[x][y].message;
refresh();

$.win4.statusBarStyle = Ti.UI.iPhone.StatusBar.LIGHT_CONTENT;


function refresh() {
	setStyle();
	//string = JSON.parse(Ti.App.Properties.getString('Data'));
	string = JSON.parse(file.read().text);
	if (string[x][y].informed == "true") {
		$.informed.text = "Message Sent";
		$.informed.color = "#cfc";
	} else {
		$.informed.text = "Message Not Sent";
		$.informed.color = "#fcc";
	}
}

function closeWindow() {
	$.win4.close({transition:Ti.UI.iPhone.AnimationStyle.CURL_DOWN});
}

function setStyle() {
	edit = "false";
	$.edit.title = "     Edit     ";
	$.topTitle.text = "Client";
	$.name.editable = "false";
	$.name.borderColor = '#163318';
	$.name.backgroundColor = "#163318";
	$.numbers.editable = "false";
	$.numbers.borderColor = '#163318';
	$.numbers.backgroundColor = "#163318";
	$.message.editable = "false";
	$.message.borderColor = '#163318';
	$.message.backgroundColor = "#163318";
	$.informBtn.title = "Send Text(s)";
}

function editMe() {
	if (edit == "false") {
		edit = "true";
		$.scrollView.backgroundColor = "#0B1A0C";
		$.edit.title = "  Cancel  ";
		$.topTitle.text = "Edit";
		$.name.editable = "true";
		$.name.borderColor = '#ddd';
		$.numbers.editable = "true";
		$.numbers.borderColor = '#ddd';
		$.message.editable = "true";
		$.message.borderColor = '#ddd';
		$.informBtn.title = "Save";
	} else {
		edit = "false";
		$.scrollView.backgroundColor = "#163318";
		$.edit.title = "     Edit     ";
		$.topTitle.text = "Client";
		$.name.editable = "false";
		$.name.borderColor = '#163318';
		$.numbers.editable = "false";
		$.numbers.borderColor = '#163318';
		$.message.editable = "false";
		$.message.borderColor = '#163318';
		$.informBtn.title = "Send Text(s)";
		
		$.name.value = string[x][y].name;
		$.numbers.value = string[x][y].numbers;
		$.message.value = string[x][y].message;
	}
}

function focusNum() {
	$.numbers.focus();
}

function focusMes() {
	$.message.focus();
}

function sendText(client) {
	if (edit == "true") {
		//string = JSON.parse(Ti.App.Properties.getString('Data'));
		string = JSON.parse(file.read().text);

		string[x][y].name = $.name.value;
		string[x][y].numbers = $.numbers.value;
		string[x][y].message = $.message.value;
		string[x][y].informed = 'false';

		//Ti.App.Properties.setString('Data', JSON.stringify(string));
		if (!file.write(JSON.stringify(string))) {
			alert("Failed to update file");
		}

		editMe();

		return;
	}
	//instantiate the module
	var module = require('com.omorandi');

	//create the smsDialog object
	var smsDialog = module.createSMSDialog();

	//check if the feature is available on the device at hand
	if (!smsDialog.isSupported()) {
		//falls here when executed on iOS versions < 4.0 and in the emulator
		var a = Ti.UI.createAlertDialog({
			title : 'warning',
			message : 'the texting feature is not currently available on your device'
		});
		a.show();
	} else {
		//pre-populate the dialog with the info provided in the following properties
		var str = $.numbers.value.replace(" ", "").split(',');
		smsDialog.recipients = str;
		smsDialog.messageBody = $.message.value;

		//set the color of the title-bar
		smsDialog.barColor = 'red';

		//add an event listener for the 'complete' event, in order to be notified about the result of the operation
		smsDialog.addEventListener('complete', function(e) {
			// Ti.API.info("Result: " + e.resultMessage);
			// var a = Ti.UI.createAlertDialog({
				// title : 'Send Message',
				// message : e.resultMessage
			// });
			// a.show();
			if (e.result == smsDialog.SENT) {
				// update the model and save
				string = JSON.parse(file.read().text);
				string[x][y].informed = "true";
				
				if (!file.write(JSON.stringify(string))) {
					alert("Failed to update file");
				}

			} else if (e.result == smsDialog.FAILED) {
				var a = Ti.UI.createAlertDialog({
					title : 'Send Message',
					message : e.resultMessage
				});
				a.show();
			} else if (e.result == smsDialog.CANCELLED) {
				//don't bother
			}
		});

		//open the SMS dialog window with slide-up animation
		smsDialog.open({
			animated : true
		});
	}
}