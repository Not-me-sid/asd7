const fs = require("fs");

fs.mkdirSync("dist", { recursive: true });
fs.copyFileSync("index.js", "dist/index.js");
console.log("Application build completed successfully.");