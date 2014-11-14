function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function drawTable() {
        string = JSON.parse(file.read().text);
        var arr = [];
        for (var i = 0; i < string[$.topTitle.text].length; i++) arr.push(Alloy.createController("inform-row", {
            file: file,
            name: string[$.topTitle.text][i].name,
            rowNum: i,
            sent: string[$.topTitle.text][i].informed,
            eventName: $.topTitle.text
        }).getView());
        $.table.setData(arr);
    }
    function rowClick(e) {
        var win4 = Alloy.createController("inform-client", {
            file: file,
            x: $.topTitle.text,
            y: e.rowData.rowNum
        }).getView();
        win4.open({
            transition: Ti.UI.iPhone.AnimationStyle.CURL_UP
        });
    }
    function closeWindow() {
        $.win3.close({
            transition: Ti.UI.iPhone.AnimationStyle.CURL_DOWN
        });
    }
    function addNewClient() {
        var addwin = Alloy.createController("inform-addclient", {
            file: file,
            events: $.topTitle.text
        }).getView();
        addwin.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "inform-event";
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
    $.__views.win3 = Ti.UI.createWindow({
        backgroundColor: "#163318",
        id: "win3"
    });
    $.__views.win3 && $.addTopLevelView($.__views.win3);
    drawTable ? $.__views.win3.addEventListener("focus", drawTable) : __defers["$.__views.win3!focus!drawTable"] = true;
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
    $.__views.win3.add($.__views.topbar);
    $.__views.topTitle = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#fff",
        bottom: "10dp",
        font: {
            fontSize: 20
        },
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
        title: "   Add Client   "
    });
    $.__views.topbar.add($.__views.add);
    addNewClient ? $.__views.add.addEventListener("click", addNewClient) : __defers["$.__views.add!click!addNewClient"] = true;
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
        title: "   Events   "
    });
    $.__views.topbar.add($.__views.back);
    closeWindow ? $.__views.back.addEventListener("click", closeWindow) : __defers["$.__views.back!click!closeWindow"] = true;
    var __alloyId18 = [];
    $.__views.__alloyId19 = Ti.UI.createTableViewRow(function() {
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
            id: "__alloyId19"
        });
        return o;
    }());
    __alloyId18.push($.__views.__alloyId19);
    $.__views.table = Ti.UI.createTableView({
        backgroundColor: "transparent",
        top: "60dp",
        data: __alloyId18,
        id: "table",
        backgroundImage: "/Fisher-3.png",
        editable: "true",
        rowHeight: "80"
    });
    $.__views.win3.add($.__views.table);
    rowClick ? $.__views.table.addEventListener("click", rowClick) : __defers["$.__views.table!click!rowClick"] = true;
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
        title: "Add Client",
        top: "-50dp"
    });
    $.__views.win3.add($.__views.add);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var file = args.file;
    $.topTitle.text = args.events;
    $.win3.statusBarStyle = Ti.UI.iPhone.StatusBar.LIGHT_CONTENT;
    var string = JSON.parse(file.read().text);
    drawTable();
    __defers["$.__views.win3!focus!drawTable"] && $.__views.win3.addEventListener("focus", drawTable);
    __defers["$.__views.add!click!addNewClient"] && $.__views.add.addEventListener("click", addNewClient);
    __defers["$.__views.back!click!closeWindow"] && $.__views.back.addEventListener("click", closeWindow);
    __defers["$.__views.table!click!rowClick"] && $.__views.table.addEventListener("click", rowClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;