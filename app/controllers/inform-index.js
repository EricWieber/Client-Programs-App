var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "eventClients.txt");
if (!file.exists()){
	var string = { 'Events': [] };
	file.write(JSON.stringify(string));
} else {
	var string = JSON.parse(file.read().text);
}

/*var str = { 'Events': ['Big Event', 'Small Event'],
	'Big Event' : [
	{ 'name': 'Mr. Bill', 'numbers':'14089664020, 1234567890, 1098765432', 'message':'Mr. Bill is here for the event. THis is a long message that could puch the buttons off of the screen. I would like to see how this is handled and if you are able to scroll down to tap on the buttons. Nope, it was not quite long enough. I do not think that anyone will be sending a message this long, but it should be tested, right?', 'informed':'false'},
	{ 'name': 'Jeff', 'numbers':'14089664020', 'message':'Jeff is here for the event', 'informed':'false'},
	{ 'name': 'Billy', 'numbers':'14089664020', 'message':'Billy is here for the event', 'informed':'false'}
	], 'Small Event' : [
	{ 'name': 'Mary', 'numbers':'1234567890', 'message':'Mary is here for the event', 'informed':'false'},
	{ 'name': 'Jill', 'numbers':'1234567890', 'message':'Jill is here for the event', 'informed':'false'}
	]};
//Ti.App.Properties.setString('Data', JSON.stringify(str) );
//str = JSON.parse(JSON.stringify(str));
str["Big Event"][3] = { 'name': 'Added', 'numbers':'1234567890', 'message':'Added is here for the event', 'informed':'false'};
//delete str["Big Event"];*/


//Ti.App.Properties.setString('Data', JSON.stringify(string) );
$.win2.statusBarStyle = Ti.UI.iPhone.StatusBar.LIGHT_CONTENT;

drawTable();

var ind=Titanium.UI.createProgressBar({
	width:200,
	height:50,
	min:0,
	max:1,
	value:0,
	style:Titanium.UI.iPhone.ProgressBarStyle.PLAIN,
	top:10,
	message:'Downloading...',
	font:{fontSize:12, fontWeight:'bold'},
	color:'#fff',
	backgroundColor: '#163318',
	borderColor: '#fff',
	borderRadius: '10'
});
$.win2.add(ind);

// var startupAnimation = Titanium.UI.createAnimation({
    // opacity: 1,
    // duration: 1000,
    // delay: 500
// });

//$.table.animate(startupAnimation);

function closeWindow() {
	$.win2.close({transition:Ti.UI.iPhone.AnimationStyle.CURL_DOWN});
}

function drawTable(e) {
	//string = JSON.parse(Ti.App.Properties.getString('Data'));
	string = JSON.parse(file.read().text);
	var arr = [];
	for (var i = 0; i < string.Events.length; i++) {
		arr.push(Alloy.createController('inform-row', {
			file: file,
			name: string.Events[i],
			rowNum: i
		}).getView());
	}
	$.table.setData(arr);
}

function rowClick(e) {
	var win3 = Alloy.createController('inform-event', {
		file: file,
    	events: e.rowData.name
    }).getView();
    win3.open({transition:Ti.UI.iPhone.AnimationStyle.CURL_UP});
}

function addNewEvent() {
    var addwin = Alloy.createController('inform-addevent', { file: file }).getView();
    addwin.open();
}

Ti.App.addEventListener('update', function(event) {
 	drawTable();
});

/////////////////////


function loadEvents() {
	ind.show();
	var xhr = Titanium.Network.createHTTPClient({
		onload: function() {
			Ti.App.fireEvent('downloaded', {text:xhr.file.read().text});
		},
		ondatastream: function(e) {
			ind.value = e.progress;
		},
		timeout: 20000
	});
	xhr.open('GET','http://textfiles.com/uploads/2ktips.txt');
	xhr.file = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'2ktips.txt');
	xhr.send();
}

Ti.App.addEventListener('downloaded', function(event) {
	ind.hide();
	alert(event.text.substr(1,1000));
});
