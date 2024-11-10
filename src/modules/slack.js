const { App } = require("@slack/bolt");
const expressApp = require("./express");
console.log(expressApp._router.stack, expressApp._router.stack.filter(r=> r.name == "bound dispatch").map((r) => ({
  handler: expressApp,
   route: r.route.path,
   method: r.route.methods,
 })))
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  port: process.env.PORT,
  ignoreSelf: true,
  //   developerMode: true,
  customRoutes: expressApp._router.stack.filter(r=> r.name == "bound dispatch").map((r) => ({
   handler: expressApp,
    path: r.route.path,
    method: Object.keys(r.route.methods).map(e=>e.toUpperCase()),
  })),
});
module.exports = app;
