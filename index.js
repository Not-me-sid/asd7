function app() {
  return "Application deployed successfully using GitHub Actions!";
}

module.exports = app;

if (require.main === module) {
  console.log(app());
}