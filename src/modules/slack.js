const { App } = require("@slack/bolt");
const expressApp = require("express")();
expressApp.get("/", (req, res) => {
  res.send("Hello World!");
});
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  port: process.env.PORT,
  ignoreSelf: true,
  //   developerMode: true,
  customRoutes: [
    {
      path: "/",
      method: "GET",
      handler: expressApp,
    },
  ],
});
module.exports = app;
