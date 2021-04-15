class UnitChangerAPI {
    ByteCal(bytes) {
        var bytes = parseInt(bytes);
        var s = ["bytes", "KB", "MB", "GB", "TB", "PB", "ZB", "HB"];

        var e = Math.floor(Math.log(bytes) / Math.log(1024));

        if (e == "-Infinity") return "0 " + s[0];
        else return (bytes / Math.pow(1024, Math.floor(e))).toFixed(2) + " " + s[e];
    }
}

module.exports = new UnitChangerAPI();