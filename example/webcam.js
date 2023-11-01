const imageToAscii = require("../lib");

// Convert to ascii this image local 
imageToAscii(`${__dirname}/out.jpeg`, {
    bg: true
}, (err, converted) => {
    console.log(err || converted);
});
