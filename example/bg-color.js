"use strict";

const imageToAscii = require("../lib");
const Your_Img = ''

imageToAscii(Your_Img, {
    bg: true
}, (err, converted) => {
    console.log(err || converted);
});
