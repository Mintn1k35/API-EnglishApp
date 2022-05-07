const express = require('express')
const router = express.Router()
const InserController = require('../controllers/InsertController')
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './src/public/img');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
const upload = multer({ storage: storage });

router.post('',InserController.index)
router.post('/uploadFile',upload.single('myfile'),InserController.uploadFile)

module.exports = router