<h1 align="center">Welcome to log-img 👋</h1>

![result](https://github.com/neimadVN/img-console-log/blob/master/core/screen-shot.png?raw=true)

This package help you to console.log image into your console or print out an image file into terminal cli

---
## ✨ Installation

`log-img` can be install be installed by command:
```sh
npm i log-img
```

But we highly recommend using it as a global package, so you can use cli command everywhere and making sure that this package does not occupy your project hardware:
```sh
npm i -g log-img
```

---
## 🚀 Usage
Using as cli
```sh
log-img lenna.jpg
log-img https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png
log-img https://source.unsplash.com/random
```

Using as package
```js
const logImg = require('log-img');

console.log('this is image:');
logImg(Blob_Base64_Path2File_anyJimpLibCanRead);
```

`log-img` can log any thing that Jimp lib support. Such as path to a file, URL, dimensions, ...

[Go to Jimp?](https://www.npmjs.com/package/jimp)

---
