"use strict";

const imageToAscii = require("../lib");
const Your_Img = ''

imageToAscii(Your_Img, (err, converted) => {
    console.log(err || converted);
});
