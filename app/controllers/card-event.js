var args = arguments[0] || {};

var file = args.file;
var events = args.row.events;
var string = JSON.parse(file.read().text);

//Ti.App.Properties.setString('Data', JSON.stringify(string) );
$.win2.statusBarStyle = Ti.UI.iPhone.StatusBar.LIGHT_CONTENT;

drawTable();

function closeWindow() {
	$.win2.close({transition:Ti.UI.iPhone.AnimationStyle.CURL_DOWN});
	Ti.App.Properties.setString('currentWindow', "index");
}

function drawTable(e) {
	string = JSON.parse(file.read().text);
	
	var arr = [];
	for (y in string[events]){
		arr.push(Alloy.createController('card-row', {
			file: file,
			title: string[events][y].name,
			events: events,
			index: y,
			name: string[events][y].name,
			add1: string[events][y].add1,
			add2: string[events][y].add2,
			add3: string[events][y].add3,
			city: string[events][y].city,
			state: string[events][y].state,
			postcode: string[events][y].postcode,
			phone: string[events][y].phone,
			mobile: string[events][y].mobile,
			email: string[events][y].email,
			guestof: string[events][y].guestof,
			reltoclient: string[events][y].reltoclient,
			oid: string[events][y].oid,
			sent: string[events][y].sent
		}).getView());
	}
	$.table.setData(arr);
}

function rowClick(e) {
	var win3 = Alloy.createController('card-card', {
		file: file,
    	row: e.rowData
    }).getView();
    win3.open({transition:Ti.UI.iPhone.AnimationStyle.CURL_UP});
}

function addNewCard() {
    var addwin = Alloy.createController('card-addcard', { file: file, events: events }).getView();
    addwin.open();
}

Ti.App.addEventListener('removeCard', function(e) {
	Ti.App.Properties.setString('currentWindow', "card-index");
 	string = JSON.parse(file.read().text);
	
	 string[e.events].splice(e.index, 1);
	
	if (!file.write(JSON.stringify(string))){
		calert("Error", "Failed to update database file");
	}
	
	drawTable();
});

function calert(t, m){
	var dialog = Ti.UI.createAlertDialog({
	    message: m,
	    ok: 'Ok',
	    title: t
	});
	dialog.show();
}

Ti.App.addEventListener('goHome', function(event) {
 	closeWindow();
	Ti.App.Properties.setString('currentWindow', "index");
});

function sendAllEmail() {
	string = JSON.parse(file.read().text);
	
	var emailDialog = Ti.UI.createEmailDialog();
	if (!emailDialog.isSupported()){
		calert("Warning", "Device cannot currently send emails");
		return;
	}
	
	var str = "<?xml version=\"1.0\"?><Workbook xmlns=\"urn:schemas-microsoft-com:office:spreadsheet\" xmlns:o=\"urn:schemas-microsoft-com:office:office\" xmlns:x=\"urn:schemas-microsoft-com:office:excel\" xmlns:ss=\"urn:schemas-microsoft-com:office:spreadsheet\" xmlns:html=\"http://www.w3.org/TR/REC-html40\"><DocumentProperties xmlns=\"urn:schemas-microsoft-com:office:office\"><Author>Kelsey Higgins</Author><LastAuthor>Kelsey Higgins</LastAuthor><Created>2014-10-02T14:57:39Z</Created><LastSaved>2014-10-22T14:42:11Z</LastSaved><Company>Fisher Investments</Company><Version>14.0</Version></DocumentProperties><OfficeDocumentSettings xmlns=\"urn:schemas-microsoft-com:office:office\"><AllowPNG/></OfficeDocumentSettings><ExcelWorkbook xmlns=\"urn:schemas-microsoft-com:office:excel\"><WindowHeight>6440</WindowHeight><WindowWidth>27140</WindowWidth><WindowTopX>120</WindowTopX><WindowTopY>80</WindowTopY><TabRatio>600</TabRatio><ProtectStructure>False</ProtectStructure><ProtectWindows>False</ProtectWindows></ExcelWorkbook><Styles><Style ss:ID=\"Default\" ss:Name=\"Normal\"><Alignment ss:Vertical=\"Bottom\"/><Borders/><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"11\" ss:Color=\"#000000\"/><Interior/><NumberFormat/><Protection/></Style><Style ss:ID=\"s61\" ss:Name=\"Hyperlink\"><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"11\" ss:Color=\"#0000D4\"    ss:Underline=\"Single\"/></Style><Style ss:ID=\"s56\" ss:Name=\"Normal 4\"><Alignment ss:Vertical=\"Bottom\"/><Borders/><Font/><Interior/><NumberFormat/><Protection/></Style><Style ss:ID=\"s59\" ss:Name=\"Normal_Sheet1\"><Alignment ss:Vertical=\"Bottom\"/><Borders/><Font x:Family=\"Swiss\" ss:Color=\"#000000\"/><Interior/><NumberFormat/><Protection/></Style><Style ss:ID=\"s63\" ss:Parent=\"s59\"><Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Bottom\"/><Borders><Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/><Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/><Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/></Borders><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\" ss:Color=\"#000000\"/><Interior ss:Color=\"#C0C0C0\" ss:Pattern=\"Solid\"/></Style><Style ss:ID=\"s64\" ss:Parent=\"s59\"><Alignment ss:Horizontal=\"Right\" ss:Vertical=\"Bottom\"/><Borders><Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/></Borders><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\" ss:Color=\"#000000\"/><Interior/></Style><Style ss:ID=\"s65\" ss:Parent=\"s59\"><Alignment ss:Vertical=\"Bottom\"/><Borders><Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/></Borders><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\" ss:Color=\"#000000\"/><Interior/></Style><Style ss:ID=\"s66\" ss:Parent=\"s59\"><Alignment ss:Vertical=\"Bottom\"/><Borders><Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/></Borders><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\" ss:Color=\"#0000D4\"/><Interior/></Style><Style ss:ID=\"s67\" ss:Parent=\"s59\"><Alignment ss:Vertical=\"Bottom\"/><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\" ss:Color=\"#0000D4\"/></Style><Style ss:ID=\"s68\" ss:Parent=\"s59\"><Alignment ss:Horizontal=\"Right\" ss:Vertical=\"Bottom\"/><Borders><Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/></Borders><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\" ss:Color=\"#000000\"/><Interior/><NumberFormat ss:Format=\"dd\-mmm\-yy\"/></Style><Style ss:ID=\"s69\" ss:Parent=\"s59\"><Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Bottom\"/><Borders><Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/><Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/><Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/></Borders><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\" ss:Color=\"#000000\"/><Interior ss:Color=\"#FCF305\" ss:Pattern=\"Solid\"/></Style><Style ss:ID=\"s70\" ss:Parent=\"s59\"><Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Bottom\"/><Borders><Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/><Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/><Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/></Borders><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\" ss:Color=\"#000000\"/><Interior ss:Color=\"#DD0806\" ss:Pattern=\"Solid\"/></Style><Style ss:ID=\"s71\" ss:Parent=\"s56\"><Alignment ss:Vertical=\"Bottom\"/><Borders><Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/><Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/><Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/></Borders><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\"/><Interior ss:Color=\"#FCF305\" ss:Pattern=\"Solid\"/></Style><Style ss:ID=\"s72\" ss:Parent=\"s56\"><Alignment ss:Vertical=\"Bottom\"/><Borders><Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/><Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/><Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/></Borders><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\"/></Style><Style ss:ID=\"s73\" ss:Parent=\"s56\"><Alignment ss:Vertical=\"Bottom\"/><Borders><Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/><Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/><Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/></Borders><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\"/><Interior ss:Color=\"#DD0806\" ss:Pattern=\"Solid\"/></Style><Style ss:ID=\"s74\" ss:Parent=\"s56\"><Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Bottom\"/><Borders><Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/><Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/><Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/></Borders><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\" ss:Bold=\"1\"/></Style><Style ss:ID=\"s75\" ss:Parent=\"s59\"><Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Bottom\"/><Borders><Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/></Borders><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\" ss:Color=\"#000000\"/><Interior/></Style><Style ss:ID=\"s79\" ss:Parent=\"s59\"><Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Bottom\"/><Borders><Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/><Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/></Borders><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\" ss:Color=\"#000000\"/><Interior ss:Color=\"#C0C0C0\" ss:Pattern=\"Solid\"/></Style><Style ss:ID=\"s80\" ss:Parent=\"s59\"><Alignment ss:Vertical=\"Bottom\"/><Borders><Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/></Borders><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\" ss:Color=\"#000000\"/><Interior/></Style><Style ss:ID=\"s81\" ss:Parent=\"s56\"><Borders><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/></Borders></Style><Style ss:ID=\"s82\" ss:Parent=\"s59\"><Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Bottom\"/><Borders><Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/><Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/><Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/></Borders><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\" ss:Color=\"#000000\"/><Interior ss:Color=\"#DD0806\" ss:Pattern=\"Solid\"/></Style><Style ss:ID=\"s83\" ss:Parent=\"s59\"><Alignment ss:Vertical=\"Bottom\"/><Borders><Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/><Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/></Borders><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\" ss:Color=\"#0000D4\"/><Interior/></Style><Style ss:ID=\"s84\"><Borders><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/></Borders></Style><Style ss:ID=\"s85\" ss:Parent=\"s56\"><Alignment ss:Vertical=\"Bottom\"/><Borders/><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\"/></Style><Style ss:ID=\"s86\" ss:Parent=\"s61\"><Alignment ss:Vertical=\"Bottom\"/><Borders><Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/><Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#C0C0C0\"/></Borders><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#0000D4\"    ss:Underline=\"Single\"/><Interior/></Style><Style ss:ID=\"s87\" ss:Parent=\"s59\"><Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Bottom\"/><Borders><Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/><Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/><Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/><Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\" ss:Color=\"#000000\"/></Borders><Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"9\"/><Interior ss:Color=\"#6711FF\" ss:Pattern=\"Solid\"/></Style></Styles><Worksheet ss:Name=\"Sheet1\"><Table x:FullRows=\"1\" ss:DefaultColumnWidth=\"53\" ss:DefaultRowHeight=\"14\"><Column ss:Width=\"75\"/><Column ss:Width=\"72\"/><Column ss:Width=\"136\"/><Column ss:AutoFitWidth=\"0\" ss:Width=\"41\"/><Column ss:AutoFitWidth=\"0\" ss:Width=\"69\"/><Column ss:Width=\"86\"/><Column ss:Width=\"131\"/><Column ss:Index=\"12\" ss:Width=\"57\"/><Column ss:AutoFitWidth=\"0\" ss:Width=\"24\"/><Column ss:AutoFitWidth=\"0\" ss:Width=\"22\"/><Column ss:AutoFitWidth=\"0\" ss:Width=\"31\"/><Column ss:AutoFitWidth=\"0\" ss:Width=\"27\"/><Column ss:Index=\"18\" ss:AutoFitWidth=\"0\" ss:Width=\"135\"/><Column ss:AutoFitWidth=\"0\" ss:Width=\"96\"/><Column ss:Index=\"21\" ss:Width=\"90\"/><Column ss:AutoFitWidth=\"0\" ss:Width=\"105\"/><Column ss:Index=\"24\" ss:Width=\"75\"/><Column ss:Index=\"26\" ss:Width=\"70\"/><Column ss:StyleID=\"s84\" ss:Width=\"520\"/><Column ss:Width=\"137\"/><Column ss:Width=\"63\"/><Column ss:Width=\"67\"/><Column ss:Width=\"61\"/><Row><Cell ss:StyleID=\"s74\"><Data ss:Type=\"String\">Legend</Data></Cell><Cell ss:StyleID=\"s71\"/><Cell ss:StyleID=\"s72\"><Data ss:Type=\"String\">Required Fields if provided</Data></Cell><Cell ss:StyleID=\"s85\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s81\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/></Row><Row><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s73\"/><Cell ss:StyleID=\"s72\"><Data ss:Type=\"String\">SST to complete</Data></Cell><Cell ss:StyleID=\"s85\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s81\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/><Cell ss:StyleID=\"s56\"/></Row><Row ss:Index=\"5\"><Cell ss:StyleID=\"s70\"><Data ss:Type=\"String\">Status</Data></Cell><Cell ss:StyleID=\"s70\"><Data ss:Type=\"String\">Notes Entered</Data></Cell><Cell ss:StyleID=\"s69\"><Data ss:Type=\"String\">Seminar Name</Data></Cell><Cell ss:StyleID=\"s69\"><Data ss:Type=\"String\">Guest OID</Data></Cell><Cell ss:StyleID=\"s69\"><Data ss:Type=\"String\">Guest Name</Data></Cell><Cell ss:StyleID=\"s69\"><Data ss:Type=\"String\">Guest Last Name</Data></Cell><Cell ss:StyleID=\"s69\"><Data ss:Type=\"String\">Address1</Data></Cell><Cell ss:StyleID=\"s69\"><Data ss:Type=\"String\">City</Data></Cell><Cell ss:StyleID=\"s69\"><Data ss:Type=\"String\">State</Data></Cell><Cell ss:StyleID=\"s69\"><Data ss:Type=\"String\">Zip</Data></Cell><Cell ss:StyleID=\"s69\"><Data ss:Type=\"String\">Country</Data></Cell><Cell ss:StyleID=\"s69\"><Data ss:Type=\"String\">HomePhone</Data></Cell><Cell ss:StyleID=\"s63\"><Data ss:Type=\"String\">WorkPhone</Data></Cell><Cell ss:StyleID=\"s63\"><Data ss:Type=\"String\">Cellular</Data></Cell><Cell ss:StyleID=\"s63\"><Data ss:Type=\"String\">Pager</Data></Cell><Cell ss:StyleID=\"s63\"><Data ss:Type=\"String\">Fax</Data></Cell><Cell ss:StyleID=\"s69\"><Data ss:Type=\"String\">Email</Data></Cell><Cell ss:StyleID=\"s70\"><Data ss:Type=\"String\">CommunicationMethod</Data></Cell><Cell ss:StyleID=\"s70\"><Data ss:Type=\"String\">ResponseSource</Data></Cell><Cell ss:StyleID=\"s70\"><Data ss:Type=\"String\">PersonAssetValue</Data></Cell><Cell ss:StyleID=\"s70\"><Data ss:Type=\"String\">Wishes</Data></Cell><Cell ss:StyleID=\"s87\"><Data ss:Type=\"String\">SalesPerson</Data></Cell><Cell ss:StyleID=\"s70\"><Data ss:Type=\"String\">ResponseBox</Data></Cell><Cell ss:StyleID=\"s63\"><Data ss:Type=\"String\">ResponseDate</Data></Cell><Cell ss:StyleID=\"s69\"><Data ss:Type=\"String\">Client OID</Data></Cell><Cell ss:StyleID=\"s70\"><Data ss:Type=\"String\">FulfillmentKit</Data></Cell><Cell ss:StyleID=\"s82\"><Data ss:Type=\"String\">Notes</Data></Cell><Cell ss:StyleID=\"s79\"><Data ss:Type=\"String\">Additional Notes From Card</Data></Cell><Cell ss:StyleID=\"s69\"><Data ss:Type=\"String\">Client Name</Data></Cell><Cell ss:StyleID=\"s69\"><Data ss:Type=\"String\">Relationship</Data></Cell><Cell ss:StyleID=\"s63\"><Data ss:Type=\"String\">Date Entered</Data></Cell><Cell ss:StyleID=\"s70\"/><Cell ss:StyleID=\"s70\"/><Cell ss:StyleID=\"s70\"/><Cell ss:StyleID=\"s70\"/></Row>";
	for (x in string[events] ){
		var firstName = string[events][x].name.split(" ", 1);
		var lastName = string[events][x].name.replace(firstName+" ", "");
		str += "<Row><Cell ss:StyleID=\"s75\"><Data ss:Type=\"String\"></Data></Cell>"+
		    "<Cell ss:StyleID=\"s65\"><Data ss:Type=\"String\"></Data></Cell>"+
		    "<Cell ss:StyleID=\"s65\"><Data ss:Type=\"String\">"+events+"</Data></Cell>"+
		    "<Cell ss:StyleID=\"s65\"><Data ss:Type=\"String\">"+string[events][x].oid+"</Data></Cell>"+
		    "<Cell ss:StyleID=\"s66\"><Data ss:Type=\"String\">"+firstName+"</Data></Cell>"+
		    "<Cell ss:StyleID=\"s66\"><Data ss:Type=\"String\">"+lastName+"</Data></Cell>"+
		    "<Cell ss:StyleID=\"s66\"><Data ss:Type=\"String\">"+string[events][x].add1+",\n"+string[events][x].add2+",\n"+string[events][x].add3+"</Data></Cell>"+
		    "<Cell ss:StyleID=\"s66\"><Data ss:Type=\"String\">"+string[events][x].city+"</Data></Cell>"+
		    "<Cell ss:StyleID=\"s66\"><Data ss:Type=\"String\">"+string[events][x].state+"</Data></Cell>"+
		    "<Cell ss:StyleID=\"s66\"><Data ss:Type=\"String\">"+string[events][x].postcode+"</Data></Cell>"+
		    "<Cell ss:StyleID=\"s66\"><Data ss:Type=\"String\"></Data></Cell>"+
		    "<Cell ss:StyleID=\"s66\"><Data ss:Type=\"String\">"+string[events][x].phone+"</Data></Cell>"+
		    "<Cell ss:StyleID=\"s66\"/>"+
		    "<Cell ss:StyleID=\"s66\"><Data ss:Type=\"String\">"+string[events][x].mobile+"</Data></Cell>"+
		    "<Cell ss:StyleID=\"s66\"><Data ss:Type=\"String\"></Data></Cell>"+
		    "<Cell ss:StyleID=\"s66\"><Data ss:Type=\"String\"></Data></Cell>"+
		    "<Cell ss:StyleID=\"s86\" ss:HRef=\""+string[events][x].email+"\"><Data ss:Type=\"String\">"+string[events][x].email+"</Data></Cell>"+
		    "<Cell ss:StyleID=\"s66\"/>"+
		    "<Cell ss:StyleID=\"s66\"><Data ss:Type=\"String\"></Data></Cell>"+
		    "<Cell ss:StyleID=\"s66\"><Data ss:Type=\"String\"></Data></Cell>"+
		    "<Cell ss:StyleID=\"s66\"/>"+
		    "<Cell ss:StyleID=\"s66\"><Data ss:Type=\"String\"></Data></Cell>"+
		    "<Cell ss:StyleID=\"s66\"><Data ss:Type=\"String\"></Data></Cell>"+
		    "<Cell ss:StyleID=\"s67\"/>"+
		    "<Cell ss:StyleID=\"s67\"><Data ss:Type=\"String\"></Data></Cell>"+
		    "<Cell ss:StyleID=\"s66\"/>"+
		    "<Cell ss:StyleID=\"s83\"><Data ss:Type=\"String\"></Data></Cell>"+
		    "<Cell ss:StyleID=\"s80\"><Data ss:Type=\"String\"></Data></Cell>"+
		    "<Cell ss:StyleID=\"s65\"><Data ss:Type=\"String\">"+string[events][x].guestof+"</Data></Cell>"+
		    "<Cell ss:StyleID=\"s65\"><Data ss:Type=\"String\">"+string[events][x].reltoclient+"</Data></Cell>"+
		    "<Cell ss:StyleID=\"s64\"/>"+
		    "<Cell ss:StyleID=\"s68\"/>"+
		    "<Cell ss:StyleID=\"s64\"/>"+
		    "<Cell ss:StyleID=\"s65\"><Data ss:Type=\"String\"></Data></Cell>"+
		    "<Cell ss:StyleID=\"s65\"><Data ss:Type=\"String\"></Data></Cell>"+
		    "</Row>";
	}
	str += "</Table><WorksheetOptions xmlns=\"urn:schemas-microsoft-com:office:excel\"><PageSetup><Header x:Margin=\"0.3\"/><Footer x:Margin=\"0.3\"/><PageMargins x:Bottom=\"0.75\" x:Left=\"0.7\" x:Right=\"0.7\" x:Top=\"0.75\"/></PageSetup><Print><ValidPrinterInfo/><HorizontalResolution>600</HorizontalResolution><VerticalResolution>600</VerticalResolution></Print><PageLayoutZoom>0</PageLayoutZoom><Selected/><TopRowVisible>1</TopRowVisible><Panes><Pane><Number>3</Number><ActiveRow>3</ActiveRow><ActiveCol>1</ActiveCol></Pane></Panes><ProtectObjects>False</ProtectObjects><ProtectScenarios>False</ProtectScenarios></WorksheetOptions></Worksheet></Workbook>";
	
	var fileOut = Ti.Filesystem.getFile(Ti.Filesystem.tempDirectory, "Cards-"+events+".xml");
	
	if (!fileOut.write(str)){
		calert("Error", "Failed to export xml file");
	}
	
	/*var dfile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "data.xml");
	var data = [];
	if (!dfile.exists()){
		data[1] = "fisher123";
		dfile.write(data[0]+"|"+data[1]);
	} else {
		data = pass.read().text.split("|");
	}*/
			
	emailDialog.subject = "Info Cards from "+events;
	emailDialog.toRecipients = ['CSJuniorAssociates@fi.com']; //[data[0]];
	emailDialog.messageBody = "Attached are the info cards from the '"+events+"' event";
	emailDialog.addAttachment(fileOut);
	emailDialog.open({
			animated : true
		});
	
	emailDialog.addEventListener('complete',function(e){
        if (e.result == emailDialog.SENT){  
        	for (x in string[events]) {      	
        		string[events][x].sent = "true";
        	}
        	//$.sent.sent = "true";
        	
        	if (!file.write(JSON.stringify(string))){
				calert("Error", "Failed to update database file");
			}
			
			var cprompt = Alloy.createController('card-prompt', {events: events, all: true}).getView();
			cprompt.open();
			
			fileOut.deleteFile();
        } else {
        	calert("Error", "Email not sent");
        }
    });
}

Ti.App.addEventListener('removeEvent', function(event) {
 	closeWindow();
});
