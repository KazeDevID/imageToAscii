"use strict";

const imageToAscii = require("../lib");

const Your_Img = ''

// Without options
imageToAscii(Your_Img, (err, converted) => {
    console.log(err || converted);
});

// With options
imageToAscii(Your_Img, {
    colored: false
}, (err, converted) => {
    console.log(err || converted);
});
