class UnitChangerAPI {
<<<<<<< HEAD
    ByteCal(bytes) {
        var bytes = parseInt(bytes);
        var s = ["bytes", "KB", "MB", "GB", "TB", "PB", "ZB", "HB"];

        var e = Math.floor(Math.log(bytes) / Math.log(1024));
=======
	ByteCal(bytes) {
		var bytes = parseInt(bytes);
		var s = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
		
		var e = Math.floor(Math.log(bytes) / Math.log(1024));
>>>>>>> 06e81d12aeb15e56fce89e6b0402d6d20a0d226d

        if (e == "-Infinity") return "0 " + s[0];
        else return (bytes / Math.pow(1024, Math.floor(e))).toFixed(2) + " " + s[e];
    }
}

module.exports = new UnitChangerAPI();