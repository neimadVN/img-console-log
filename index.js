const chalk = require('chalk');
const Jimp = require('jimp');

const PX_CHR = '▀'; // █ ▒ ▓ ▀
const VW = process.stdout.columns;
const VH = process.stdout.rows ;
const V_ASPECT_RATIO = ( VW / VH );

function calcFitResulution ({w, h}) {
  const aspectRatio = w / h;
  const isWidthBig = aspectRatio >= V_ASPECT_RATIO;

  if (isWidthBig) {
    // calc by witdh
    return [VW, Jimp.AUTO];
  } else {
    // calc fit height
    const fitSpaceHOfConsole = Math.floor(VH / 2) * 2;
    return [Jimp.AUTO, fitSpaceHOfConsole * 2]; // 1 line = 2 pixel
  }
}

function genHorizonParedPixels(upperOne, restOne) {
  const upperOneRGB = Jimp.intToRGBA(upperOne);
  const restOneRGB = Jimp.intToRGBA(restOne);
  return chalk`{rgb(${upperOneRGB.r},${upperOneRGB.g},${upperOneRGB.b}).bgRgb(${restOneRGB.r},${restOneRGB.g},${restOneRGB.b}) ${PX_CHR}}`
}

Jimp.read('lenna.png')
  .then(async img => {
    await img.resize(...calcFitResulution({w: img.bitmap.width, h: img.bitmap.height}));

    for (let y = 1; y < img.bitmap.height;) {
      let currLine = chalk``;
      
      for (let x = 1; x <= img.bitmap.width; x++) {
        currLine += genHorizonParedPixels(img.getPixelColor(x, y), img.getPixelColor(x, y + 1));
      }
      console.log(currLine);
      y += 2;
    }
  })
  .then(() => {
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
  });

process.stdin.resume();