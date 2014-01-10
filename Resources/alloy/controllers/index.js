function Controller() {
    function play() {
        sound.play();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.webview = Ti.UI.createWebView({
        id: "webview",
        url: "/pages/helloworld2.html"
    });
    $.__views.index.add($.__views.webview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var sound = Titanium.Media.createSound({
        url: "Sound/12.mp3",
        preload: true
    });
    Titanium.App.addEventListener("webButtonClick", function() {
        alert("Button in webpage was clicked!");
        play();
        Titanium.App.fireEvent("musicIsPlaying");
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;