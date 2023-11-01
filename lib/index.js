"use strict";

const ul = require("ul")
    , imgpx = require("imgpx")
    , oneByOne = require("one-by-one")
    , ImageParser = require("image-parser")
    , asciifyPixelMatrix = require("asciify-pixel-matrix")
    , computeSize = require("compute-size")
    , charWidth = require("terminal-char-width")
    ;

const DEFAULTS = {
    size_options: {
        px_size: {
            width: 1 / charWidth
        }
    }
  , stringify: true
  , concat: true
  , size: {
        height: "100%"
    }
  , stringify_fn: asciifyPixelMatrix
};

module.exports = function imageToAscii (source, options, callback) {

    if (typeof options === "function") {
        callback = options;
        options = {};
    }

    options = ul.deepMerge(options, DEFAULTS);

    oneByOne([
        next => new ImageParser(source).parse(next)
      , (next, img) => {
            var newSize = computeSize(options.size, {
                width: img.width()
              , height: img.height()
            }, options.size_options);
            imgpx(img, {
                resize: [newSize.width, newSize.height]
              , image_type: options.image_type
            }, next);
        }
      , (next, pixels) => next(null, options.stringify_fn(pixels, options))
    ], function (err, data) {
        if (err) { return callback(err); }
        callback(null, data.slice(-1)[0], data[0], data[1]);
    });
};

module.exports.defaults = DEFAULTS;
         
