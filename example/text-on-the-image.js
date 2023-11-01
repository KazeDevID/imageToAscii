"use strict";

const imageToAscii = require("../lib")
    , stringify = require("asciify-pixel-matrix")
    ;

const Your_Img = ''
    ;
    
imageToAscii(Your_Img, {
    bg: true
  , fg: false
  , stringify: false
  , concat: false
}, (err, converted) => {
    var snip = "Yes we code! ";
    var i = 0;
    converted.forEach(cRow => {
        cRow.forEach(px => {
            px.char = snip[i = ++i % snip.length];
        });
    });
    console.log(stringify.stringifyMatrix(converted));
});
