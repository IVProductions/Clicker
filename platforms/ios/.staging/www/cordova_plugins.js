cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.statusbar/www/statusbar.js",
        "id": "org.apache.cordova.statusbar.statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.plugins.StatusBar/www/StatusBar.js",
        "id": "org.apache.cordova.plugins.StatusBar.StatusBar",
        "merges": [
            "plugins.statusBar"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.statusbar": "0.1.3",
    "org.apache.cordova.plugins.StatusBar": "0.1.0"
}
// BOTTOM OF METADATA
});