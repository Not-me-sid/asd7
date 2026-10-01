const app = require("./index");

if (app() !== "Application deployed successfully using GitHub Actions!") {
  throw new Error("Test failed");
}

console.log("Test passed successfully.");