const router = require("express").Router();
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

// Set up Multer for handling file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  });

const upload = multer({ storage: storage });

router.post('/upload', upload.single('image'), (req, res) => {
    const { filename, originalname, path } = req.file;
    const newImage = new Image({
        filename,
        originalname,
        path
    })
})