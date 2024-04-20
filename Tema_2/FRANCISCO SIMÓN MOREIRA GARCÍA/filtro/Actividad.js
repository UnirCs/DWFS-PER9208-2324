const ImageHandler = require('./ImageHandler.js')
let path = 'input/61527609_604.jpg';
let handler = new ImageHandler(path);


function ejemplo() {

    let outputPath = 'output/ejemplo.jpg';
    let pixeles = [];
    let filas = 2;
    let columnas = 2;
    for (let i = 0; i < filas; i++) {
        let nuevaFila = [];
        console.log("Fila: " + i);
        for (let j = 0; j < columnas; j++) {
            console.log("Columna:" + j)
            let pixel = [0, 0, 0]; // R G B -> Red Green Blue -> Rojo Verde Azul
            if ((i + j) % 2 === 0) { // Si la suma de la fila y la columna es par....
                pixel = [255, 255, 255];
            }
            console.log("Vamos a añadir el pixel " + pixel + " a la fila " + i + " columna " + j)
            nuevaFila.push(pixel);
        }
        console.log(nuevaFila)
        pixeles.push(nuevaFila);
    }
    console.log(pixeles);
    handler.savePixels(pixeles, outputPath, filas, columnas);
}

function redConverter() {
    let outputPath = 'output/pele_red.jpg';
    let pixels = handler.getPixels();

    for (const row of pixels) {
        for (const pixel of row) {
            pixel[1] = 0;
            pixel[2] = 0;

        }
    }

    handler.savePixels(pixels, outputPath);
}
function greenConverter() {
    let outputPath = 'output/pele_green.jpg';
    let pixels = handler.getPixels();
    for (const row of pixels) {
        for (const pixel of row) {
            pixel[0] = 0;
            pixel[2] = 0;

        }
    }

    handler.savePixels(pixels, outputPath);
}
function blueConverter() {
    let outputPath = 'output/pele_blue.jpg';
    let pixels = handler.getPixels();

    for (const row of pixels) {
        for (const pixel of row) {
            pixel[0]=0;
            pixel[1]=0;


        }
    }

    handler.savePixels(pixels, outputPath);
}
function greyConverter() {
    let outputPath = 'output/pele_grey.jpg';
    let pixels = handler.getPixels();

    for (const row of pixels) {
        for (const pixel of row) {
            let avg = (pixel[0] + pixel[1] + pixel[2]) / 3;
            pixel[0]= avg;
            pixel[1]= avg;
            pixel[2] = avg;
        }
    }

    handler.savePixels(pixels, outputPath);
}
function blackAndWhiteConverter() {
    let outputPath = 'output/pele_black_and_white2.jpg';
    let pixels = handler.getPixels();

    for (let row of pixels) {
        for (let pixel of row) {
            let average = Math.floor((pixel[0] + pixel[1] + pixel[2]) / 3);
            let bw_pixel = average < 128 ? 0 : 255;
            pixel[0]= bw_pixel;
            pixel[1]= bw_pixel;
            pixel[2] = bw_pixel;
        }
    }
    handler.savePixels(pixels, outputPath);
}
function scaleDown() {
    let outputPath = 'output/pele_scale_down.jpg';
    let pixels = handler.getPixels();
    let nuevaEscla = [];

    for (let i = 0; i < pixels.length; i += 2) {
        let scaledRow = pixels[i].filter((_, index) => index % 2 === 0);
        nuevaEscla.push(scaledRow);

    }
    let newWidth = Math.floor(handler.getShape()[0] / 2);
    let newHeight = Math.floor(handler.getShape()[1] / 2);


    handler.savePixels(nuevaEscla, outputPath, newWidth, newHeight);


}
function invertColors() {
    let outputPath = 'output/tucan_inverse.jpg';
    let pixels = handler.getPixels();


    for (const row of pixels) {
        for (const pixel of row) {
            pixel[0] = 255 - pixel[0];
            pixel[1] = 255 - pixel[1];
            pixel[2] = 255 - pixel[2];
        }
    }

    handler.savePixels(pixels, outputPath);
}
function merge(alphaFirst, alphaSecond) {
    let RonaldoHandler = new ImageHandler('input/f.elconfidencial.com_original_36a_e15_4ac_36ae154acded8663e9bd0402a78ab17f.jpg');
    let MessiHandler = new ImageHandler('input/lionel-messi_imago1019567000h.jpg');
    let outputPath = 'output/merged.jpg';

    let RonaldoPixels = RonaldoHandler.getPixels();
    let MessiPixels = MessiHandler.getPixels();

    let pixels = [];

    for (let i = 0; i < RonaldoPixels.length; i++) {
        let mergedRow = [];
        for (let j = 0; j < RonaldoPixels[i].length; j++) {
            let mergedPixel = [];
            for (let k = 0; k < 3; k++) {
                mergedPixel.push(Math.floor(alphaFirst * RonaldoPixels[i][j][k] + alphaSecond * MessiPixels[i][j][k]));
            }
            mergedRow.push(mergedPixel);
        }
        pixels.push(mergedRow);
    }

    MessiHandler.savePixels(pixels, outputPath);
}
function dimBrightness(dimFactor) {
    let outputPath = 'output/pele_dimed.jpg';
    let pixels = handler.getPixels();
    for (let i = 0; i < pixels.length; i++) {
        for (let j = 0; j < pixels[i].length; j++) {
            if (pixels[i][j].length >= 3) {
                pixels[i][j][0] /= dimFactor;
                pixels[i][j][1] /= dimFactor;
                pixels[i][j][2] /= dimFactor;
            }
        }
    }

    handler.savePixels(pixels, outputPath);
}
let optionN = 5;
switch (optionN) {
    case 1: redConverter(); break;
    case 2: greenConverter(); break;
    case 3: blueConverter(); break;
    case 4: greyConverter(); break;
    case 5: blackAndWhiteConverter(); break;
    case 6: scaleDown(); break;
    case 7: dimBrightness(2); break;
    case 8: invertColors(); break;
    case 9: merge(0.3, 0.7); break;
    default: ejemplo();
}