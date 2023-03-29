var express = require('express');
var router = express.Router();
const chats = require('../data/data')
const { registerUser, searchUser } = require('../controllers/userControllers')
const { accessChat, fetchChats } = require('../controllers/chatController')

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('API running')
});

router.post('/registeruser',registerUser);
router.get('/searchuser',searchUser);

router.post('/accesschat',accessChat);
router.get('/fetchchat',fetchChats);
// router.post('/group',createGroup);
// router.put('/rename',renameGroup);
// router.put('/groupremove',removeFromGroup);
// router.put('/groupadd',addToGroup);




 
router.get('/api/chats', function(req, res, next) {
  res.send(chats);
});

router.get('/api/chats/:id', function(req, res, next) {
// console.log(req.params.id);
const singleChat = chats.find((c)=> c._id === req.params.id)
res.send(singleChat)
});

module.exports = router;
