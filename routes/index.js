var express = require("express");
var router = express.Router();
const upload = require("../utils/multerEngine");
const { registerUser, searchUser } = require("../controllers/userControllers");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  addToGroup,
  removeFromGroup,
} = require("../controllers/chatController");
const {
  sendMessage,
  allMessages,
  uploadFileUsingMulter,
} = require("../controllers/messageController");


router.get("/", function (req, res, next) {
  res.send("API running");
});

router.post("/registeruser", registerUser);
router.get("/searchuser", searchUser);

router.post("/accesschat", accessChat);
router.get("/fetchchat", fetchChats);
router.post("/group", createGroupChat);
router.put("/groupadd", addToGroup);
router.put("/groupremove", removeFromGroup);

router.post("/sendmessage", sendMessage);
router.get("/:chatId", allMessages);
router.post("/uploadfilemulter",upload.array("uploaded_file"),uploadFileUsingMulter);

module.exports = router;
