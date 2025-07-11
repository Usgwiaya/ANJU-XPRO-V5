//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0E3OER0ZUF3WHRWcHBTelBBT2x6UHEzc3B1Tm4rM1hXa0VCRHFORWdWOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkJjcUYvSzVGbTR0SkJmWGhOT1V6bCtieDFSYnA4d1VHTHJ3clgzUzRqaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSXNBTy92ZXU2Yms4ajNwa2JReWpWODUxR3JXWUpxQngzQjB6ZHlKMEVjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzbjZlOU50MFdiaXZ3K3UyQnJycUZReHM3SkNJZUNFcHhPSlVhWlBhWUdVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitBSGttRlFZOWlJL3ZKSW9Fdk5hZnRoelhhd0hnQWdQazRsbXk2TUV3RUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlcrMzcra3ZMSnVBT3JHY0hiRlNvL1Y1VDkwRFpBemIxKzNOZmo4S25uamc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1BuYUJXV1p0SjNXUFFGYzJlWW52eVE5Z3UxeXZkMTdBSmFoMWh0T3lFdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUJ2SkVhaHMvcWhvK3IwbE9lQjhWbFVKT2xhdC9MeTltTFNROENybGVHND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpqUUYxcUZEVm84VU1rNG9DbXZsaDhRMFFMK0JUMWpvQ2I0K2Rqcm1ZVTNzQUxVU1N3VlVlUVVsK2dFQ2dzWWpWbkVxTkw4Mm1oTHIrVHBLME5OT2p3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTksImFkdlNlY3JldEtleSI6IllKMGlITE9MbnBmYXVXNzNZNmRpNWpVUXBtcWRKV2M0ZFFJWnBmcjVRc3c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Inh4dEtLWEE0U1JDSTdOeHpwdmJtT0EiLCJwaG9uZUlkIjoiMzY1NzExYmMtYTQ5MC00ZWMzLTk4ZGQtYWYyNjg5ZTQ0N2E5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxLRmtGYmJDcDkwNmJYZjJ5Wm1UTlJJYkgvaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RE00NjBSbnVjVUxVa0lFNUlWR0dsY2pYODA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOVNBWVdEUkQiLCJtZSI6eyJpZCI6Ijk0Nzc0MzkxNTYwOjg0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlUgUCBsIG8gYSBkIGUgciAgOiApIiwibGlkIjoiNzA3MjE1NTIyNzc2NDM6ODRAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKclVuSm9HRUkvWnhNTUdHQW9nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJub0Fnc2RqMkdHNXlzaW9ta05idzRKTTFnRXI4Qll4bllqaXJOWHhSMWpJPSIsImFjY291bnRTaWduYXR1cmUiOiIxZi9SdlNGR1BVOENHU2o2cEt3NnBOcmpxaXRpRS8vZUdZQVd1a1ptblJiV3pVdkFIcVNrRm9VcGpqTjBxT2E1Wms5VmhhMFRSNjBZSG02aTVPYW5DQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiN0pLVUhkVUR5NXFOZ1NYeUx0V2xjajFFYnl6MHFVdkdYak15K09DcllvL252N2dZMHBBNVQ4TFVnSnNxYXZhMUZzTmxGc2JnVnhkOHJ2d2xYdm1NZ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3NDM5MTU2MDo4NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaNkFJTEhZOWhodWNySXFKcERXOE9DVE5ZQksvQVdNWjJJNHF6VjhVZFl5In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTIyNDc0NTMsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSXFVIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "0774391560",
  PASSWORD: 
    process.env.PASSWORD || "Kavi@1234",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
