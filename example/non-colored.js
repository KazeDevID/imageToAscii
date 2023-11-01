"use strict";

const imageToAscii = require("../lib");

const Your_Img = ''

imageToAscii(Your_Img, {
    colored: false
}, (err, converted) => {
    console.log(err || converted);
});
