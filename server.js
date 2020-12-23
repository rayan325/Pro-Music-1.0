const http = require("http");
const express = require("express");
const cmd = require("node-cmd");
const app = express();

app.get("/", (_, r) => r.sendStatus(200));
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 4 * 60 * 1000);

cmd.run("java -Dnogui=true -jar jmusic.jar");
//الرابط : https://pro-music-pg.glitch.me