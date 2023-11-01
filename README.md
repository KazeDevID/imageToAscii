# imageToAscii

Convert image to ASCII art.


## :cloud: Installation

```sh
# Using npm
npm install --save @kazesolo/ImgToAscii

# Using yarn
yarn add @kazesolo/ImgToAscii
```

Check out the [INSTALLATION.md](INSTALLATION.md) guide for more information.







## :clipboard: Example



```js
// Dependencies
const imageToAscii = require("@kazesolo/ImgToAscii");
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
```







In order to run the `webcam.sh` provided in the `example` folder, you will also need streamer. The script uses streamer to make webcam pictures and converts them into ASCII art using the `webcam.js`

```sh
# Ubuntu
$ sudo apt-get install streamer

# CentOS / RHEL
$ sudo yum install --enablerepo epel GraphicsMagick
```


To run the script just use:

```sh
sh webcam.sh
```







## :question: Get Help

There are few ways to get help:



 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:





## :memo: Documentation


### `imageToAscii(source, options, callback)`
Converts the provided image in ASCII art.

#### Params

- **String|Buffer** `source`: The path/url to the image or a Buffer object.
- **Object|String** `options`: The path to the image or an object containing the following fields:

 **Size Options**:
  - `pxWidth` (Number): The pixel width used for aspect ratio (default: `2`).
  - `size` (Object): The size of the result image (ASCII art)
    - `height` (Number|String): The height value (default: `"100%"`).
    - `width` (Number|String): The width value (default: computed value to
       keep aspect ratio). This is optional if the height is provided.
    - `screen_size` (Object): The screen size (defaults to terminal width
    and height):
        - `width` (Number): The screen width.
        - `height` (Number): The screen height.
    - `px_size` (Object): The pixel size.
        - `width` (default: `1`)
        - `height` (default: `1`)
    - `preserve_aspect_ratio` (Boolean): If `false`, the aspect ratio will
      not be preserved (default: `true`).
    - `fit_screen` (Boolean): If `false`, the result size will not fit to
      screen (default: `true`).

 **Matrix asciifier options**:
  - `stringify` (Boolean): If `false`, the pixel objects will not be
    stringified.
  - `concat` (Boolean): If `false`, the pixel objects will not be joined
    together.

 **Pixel asciifier options**:

  - `pixels` (Array|String): An array or string containing the characters
     used for converting the pixels in strings
     (default: `" .,:;i1tfLCG08@"`).
  - `reverse` (Boolean): If `true`, the pixels will be reversed creating a
     *negative image* effect (default: `false`).
  - `colored` (Boolean): If `true`, the output will contain ANSI styles
    (default: `true`).
  - `bg` (Boolean): If `true`, the **background** color will be used for
    coloring (default: false).
  - `fg` (Boolean): If `true`, the **foreground** color will be used for
    coloring (default: true).
  - `white_bg` (Boolean): Turn on the white background for transparent
    pixels (default: `true`).
  - `px_background` (Object): An object containing the `r` (red), `g`
    (green) and `b` (blue) values of the custom background color.

 **Other options**:
  - `image_type` (String): Use this to explicitely provide the image type.
  - `stringify_fn` (Function): A function getting the `pixels` matrix and
    the `options` in the arguments. Use this option to implement your own
    stringifier.
- **Function** `callback`: The callback function.














## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects
I open-source almost everything I can, and I try to reply to everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).



## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

Coming soon 





## :scroll: License

[MIT][license] © [KazeDevID][website]






[license]: /LICENSE
[website]: https://github.com/KazeDevID 
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md