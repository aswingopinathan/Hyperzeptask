var express = require('express');
var router = express.Router();
const { registerUser, searchUser } = require('../controllers/userControllers')
const { accessChat, fetchChats, createGroupChat, addToGroup, removeFromGroup } = require('../controllers/chatController')
const { sendMessage, allMessages, uploadFile } = require('../controllers/messageController')
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('API running')
});

router.post('/registeruser',registerUser);
router.get('/searchuser',searchUser);

router.post('/accesschat',accessChat);
router.get('/fetchchat',fetchChats);
router.post('/group',createGroupChat);
router.put('/groupadd',addToGroup);
router.put('/groupremove',removeFromGroup);

router.post('/sendmessage',sendMessage);
router.get('/:chatId',allMessages);
router.post('/uploadfile',uploadFile);




module.exports = router;
















// const chats = require('../data/data')
 
// router.get('/api/chats', function(req, res, next) {
//   res.send(chats);
// });

// router.get('/api/chats/:id', function(req, res, next) {
// // console.log(req.params.id);
// const singleChat = chats.find((c)=> c._id === req.params.id)
// res.send(singleChat)
// });

