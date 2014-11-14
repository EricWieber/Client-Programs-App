function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function closeWindow() {
        $.win2.close({
            transition: Ti.UI.iPhone.AnimationStyle.CURL_DOWN
        });
    }
    function drawTable() {
        string = JSON.parse(file.read().text);
        var arr = [];
        for (var i = 0; i < string.Events.length; i++) arr.push(Alloy.createController("inform-row", {
            file: file,
            name: string.Events[i],
            rowNum: i
        }).getView());
        $.table.setData(arr);
    }
    function rowClick(e) {
        var win3 = Alloy.createController("inform-event", {
            file: file,
            events: e.rowData.name
        }).getView();
        win3.open({
            transition: Ti.UI.iPhone.AnimationStyle.CURL_UP
        });
    }
    function addNewEvent() {
        var addwin = Alloy.createController("inform-addevent", {
            file: file
        }).getView();
        addwin.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "inform-index";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win2 = Ti.UI.createWindow({
        backgroundColor: "#163318",
        id: "win2",
        title: "Events",
        backgroundImage: "/FisherBackground.png"
    });
    $.__views.win2 && $.addTopLevelView($.__views.win2);
    drawTable ? $.__views.win2.addEventListener("focus", drawTable) : __defers["$.__views.win2!focus!drawTable"] = true;
    $.__views.topbar = Ti.UI.createView({
        top: "-10dp",
        height: "70dp",
        width: "103%",
        borderColor: "#fff",
        borderRadius: "30dp",
        borderWidth: "2dp",
        backgroundColor: "#215525",
        id: "topbar"
    });
    $.__views.win2.add($.__views.topbar);
    $.__views.topTitle = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#fff",
        bottom: "10dp",
        font: {
            fontSize: 20
        },
        text: "Events",
        id: "topTitle"
    });
    $.__views.topbar.add($.__views.topTitle);
    $.__views.add = Ti.UI.createButton({
        height: Ti.UI.SIZE,
        color: "#fff",
        bottom: "10dp",
        right: "50dp",
        borderColor: "#fff",
        borderRadius: "10dp",
        backgroundColor: "#274429",
        font: {
            fontSize: 14
        },
        id: "add",
        title: "   Add Event   "
    });
    $.__views.topbar.add($.__views.add);
    addNewEvent ? $.__views.add.addEventListener("click", addNewEvent) : __defers["$.__views.add!click!addNewEvent"] = true;
    $.__views.back = Ti.UI.createButton({
        height: Ti.UI.SIZE,
        color: "#fff",
        bottom: "10dp",
        left: "50dp",
        borderColor: "#fff",
        borderRadius: "10dp",
        backgroundColor: "#274429",
        font: {
            fontSize: 14
        },
        id: "back",
        title: "  Home  "
    });
    $.__views.topbar.add($.__views.back);
    closeWindow ? $.__views.back.addEventListener("click", closeWindow) : __defers["$.__views.back!click!closeWindow"] = true;
    $.__views.refresh = Ti.UI.createButton({
        id: "refresh",
        title: "Load Events",
        top: "-50dp"
    });
    $.__views.topbar.add($.__views.refresh);
    var __alloyId20 = [];
    $.__views.__alloyId21 = Ti.UI.createTableViewRow(function() {
        var o = {};
        Alloy.isHandheld && _.extend(o, {
            backgroundColor: "transparent",
            height: "60dp"
        });
        Alloy.isTablet && _.extend(o, {
            backgroundColor: "transparent",
            height: "80dp"
        });
        _.extend(o, {
            id: "__alloyId21"
        });
        return o;
    }());
    __alloyId20.push($.__views.__alloyId21);
    $.__views.table = Ti.UI.createTableView({
        backgroundColor: "transparent",
        top: "60dp",
        data: __alloyId20,
        id: "table",
        backgroundImage: "/Fisher-3.png",
        editable: "true",
        rowHeight: "80"
    });
    $.__views.win2.add($.__views.table);
    rowClick ? $.__views.table.addEventListener("click", rowClick) : __defers["$.__views.table!click!rowClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "eventClients.txt");
    if (file.exists()) var string = JSON.parse(file.read().text); else {
        var string = {
            Events: []
        };
        file.write(JSON.stringify(string));
    }
    $.win2.statusBarStyle = Ti.UI.iPhone.StatusBar.LIGHT_CONTENT;
    drawTable();
    var ind = Titanium.UI.createProgressBar({
        width: 200,
        height: 50,
        min: 0,
        max: 1,
        value: 0,
        style: Titanium.UI.iPhone.ProgressBarStyle.PLAIN,
        top: 10,
        message: "Downloading...",
        font: {
            fontSize: 12,
            fontWeight: "bold"
        },
        color: "#fff",
        backgroundColor: "#163318",
        borderColor: "#fff",
        borderRadius: "10"
    });
    $.win2.add(ind);
    Ti.App.addEventListener("update", function() {
        drawTable();
    });
    Ti.App.addEventListener("downloaded", function(event) {
        ind.hide();
        alert(event.text.substr(1, 1e3));
    });
    __defers["$.__views.win2!focus!drawTable"] && $.__views.win2.addEventListener("focus", drawTable);
    __defers["$.__views.add!click!addNewEvent"] && $.__views.add.addEventListener("click", addNewEvent);
    __defers["$.__views.back!click!closeWindow"] && $.__views.back.addEventListener("click", closeWindow);
    __defers["$.__views.table!click!rowClick"] && $.__views.table.addEventListener("click", rowClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;