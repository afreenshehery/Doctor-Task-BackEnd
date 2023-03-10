"use strict";

let multer = require("multer");

const mime_type = {
    "application/vnd.ms-excel": "csv",
    "application/json": "json",
    "text/csv": "csv",
    "image/png": "png",
    "image/jpg": "jpg",
    "image/jpeg": "jpg",
    "image/gif": "gif",
    "image/psd": "psd",

};

let uploadUserProfileImage = multer({

    storage: multer.diskStorage({
        destination: function (req, file, callback) {
            callback(null, "uploads");
        },
        filename: function (req, file, callback) {
            console.log("function reached");
            let fileName = Date.now() + Math.round(Math.random() * 10000) + '.' + file.originalname.split(".")[file.originalname.split(".").length - 1]
            callback(null, fileName);
        }
    })
});

module.exports = {
    uploadUserProfileImage: uploadUserProfileImage
};
