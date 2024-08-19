//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUEwbEVpQnNVOElwbm5xRUFOaThHcFRJRkNwVHU5Y3REcWpBVldTZGIwYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiazZ2SUJvWWpxVWZiSzRWK0FPdzJmbWh0VmNNZlRXT25GdlgwV2VjSXVRdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpRU1sRXBTc0NyZ2N1amphZi9INTJWY3QwK0pvNzViWFI2bTY2a1Mya1dBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5bjJGV2hoWHNYazRCWE1nMFEzWGVyOUxYY09ERUVwZjk5QndYUVRwSGhjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNCNDdWb29QeUloUE5lYzlneFZoanRoa1RLbC84dTlydHQwTWMwMm00bmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFlRld3R1hPV0xGMWQyRjdLSlVVazVuM1lzVkxpR1lxVFFjTDV2NkJCM3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUlWRE5ad0ZRbzRwOUt2bmpUTFAzMW9vZW5XN3hMaE51MWFYc0M2RXFXRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVQyNlFOZEYvSGVWN1NLV3BNNExLeHQ4cXpOWkxtNWE0aXRXWkY2Um94RT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhpajRVZ0JLMms2TVNUblN3NnF3QU5iQk9aREFxVmVOYXhSbzB0cjd4SkJieHhlL0o4Z25hYzJQbzZLa0t1VGVrdEtlclpXSUtlYWx6Smw2M2RBSUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMxLCJhZHZTZWNyZXRLZXkiOiJtL3pOL1NNbDQyS01IRTZPcFZvTlFLaWJneUJSSER3bDBBU2JJdGx4NWpBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI1NjUyNDU1N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJERDhGMjU3RTVGRDkwM0QzMDZBQzNBQTU4OUMzMzJGRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI0MDU0NDQ5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMyNTY1MjQ1NTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNEI4QUUxRDk1OTlDQUUzQTcyQjgzNjc2NEJGRTA4ODgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNDA1NDQ0OX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMUFJRm5IMktUMU82X092Ri0zZ0NFQSIsInBob25lSWQiOiJjZTZjN2ZhMS1iYmQ2LTRmMWYtYjM2ZS04NjFlMjE0Y2UyODEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibjh5YWxRQWtYOGVwRGIyU0duVlladUpubXhzPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhNeWFZS0pneXhKcGhnTjRIVjJMZTVEOWVVZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJOMjFISjdUTSIsIm1lIjp7ImlkIjoiOTIzMjU2NTI0NTU3OjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoicjR6NHBybyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHFFdTE4UW9mZUx0Z1lZQkNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMGQyRmJZeWJ1akM1VzNCcE83Y3BCb2t5V01VODlzQlZVOFlXbGl5QW5DND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVEI4MmtBSHl5SlQ5MTNCRkxOYUNiWHJTaUE0VmxBdHpGNVNkcFdPd2Z1eHZuYUFIU1c5MmFSS0s4VEhLaE9lNXRpa0EwNjhhWEZBVUxOUGNpdGJlQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6Inhhbk52eWJZTUpYbjBwNGlMNEpqVjJjbkpvTFpxVGR1R3dYRFVBMy93aStaeWVXYjc3L28xaC8rKzg1NXdhWExpdVhGQkpLWkl5ZUw2WFVWd3FsOUN3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMjU2NTI0NTU3OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZEhkaFcyTW03b3d1VnR3YVR1M0tRYUpNbGpGUFBiQVZWUEdGcFlzZ0p3dSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDA1NDQ0NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQKzUifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
