console.log("Welcome to Operating System");
const os = require("os");

console.log("Architecture: " + os.arch());
console.log("Free Memory: " + os.freemem()/(1024 * 1024 * 1024) + "GB");
console.log("Total Memory: " + os.totalmem()/(1024 * 1024 * 1024) + "GB");
console.log("Platform: " + os.platform());
console.log("Current User Information: " + os.userInfo().username);