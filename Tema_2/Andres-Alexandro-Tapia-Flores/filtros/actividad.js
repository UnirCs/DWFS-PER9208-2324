const ImageHandler = require("./ImageHandler.js");

let path = "input/tucan.jpg";
let handler = new ImageHandler(path);

/**
 * Ejemplo de construccion de una imagen
 */
function ejemplo() {
  let outputPath = "output/ejemplo.jpg";
  let pixeles = [];
  let filas = 2;
  let columnas = 2;
  for (let i = 0; i < filas; i++) {
    let nuevaFila = [];
    console.log("Fila: " + i);
    for (let j = 0; j < columnas; j++) {
      console.log("Columna:" + j);
      let pixel = [0, 0, 0]; // R G B -> Red Green Blue -> Rojo Verde Azul
      if ((i + j) % 2 === 0) {
        // Si la suma de la fila y la columna es par....
        pixel = [255, 255, 255];
      }
      console.log(
        "Vamos a añadir el pixel " + pixel + " a la fila " + i + " columna " + j
      );
      nuevaFila.push(pixel);
    }
    console.log(nuevaFila);
    pixeles.push(nuevaFila);
  }
  console.log(pixeles);
  handler.savePixels(pixeles, outputPath, filas, columnas);
}

/**
 * Esta función debe transformar una imagen en escala de rojos.
 *
 * Una forma de conseguirlo es simplemente poner los canales G y B a 0 para cada pixel.
 */
function redConverter() {
  const outputPath = "output/tucan_red.jpg";
  const pixelsMatrix = handler.getPixels();

  for (const rowOfPixels of pixelsMatrix) {
    for (const pixel of rowOfPixels) {
      pixel[1] = 0;
      pixel[2] = 0;
    }
  }

  handler.savePixels(pixelsMatrix, outputPath);
}

/**
 * Esta función debe transformar una imagen en escala de verdes.
 *
 * Una forma de conseguirlo es simplemente poner los canales R y B a 0 para cada pixel.
 */
function greenConverter() {
  const outputPath = "output/tucan_green.jpg";
  const pixelsMatrix = handler.getPixels();

  for (const rowOfPixels of pixelsMatrix) {
    for (const pixel of rowOfPixels) {
      pixel[0] = 0;
      pixel[2] = 0;
    }
  }

  handler.savePixels(pixelsMatrix, outputPath);
}

/**
 * Esta función debe transformar una imagen en escala de azules.
 *
 * Una forma de conseguirlo es simplemente poner los canales R y G a 0 para cada pixel.
 */
function blueConverter() {
  const outputPath = "output/tucan_blue.jpg";
  const pixelsMatrix = handler.getPixels();

  for (const rowOfPixels of pixelsMatrix) {
    for (const pixel of rowOfPixels) {
      pixel[0] = 0;
      pixel[1] = 0;
    }
  }

  handler.savePixels(pixelsMatrix, outputPath);
}

/**
 * Esta función debe transformar una imagen a su equivalente en escala de grises.
 *
 * Una forma de conseguirlo es calcular la media de los valores RGB de cada pixel y
 * asignarle a cada canal de RGB esa media.
 *
 * Es decir, si un pixel tiene el valor [100, 120, 200], su media es 140 y por lo tanto
 * lo debemos transformar en el pixel [140, 140, 140].
 */
function greyConverter() {
  const outputPath = "output/tucan_grey.jpg";
  const pixelsMatrix = handler.getPixels();

  for (const rowOfPixels of pixelsMatrix) {
    for (const pixel of rowOfPixels) {
      const median = (pixel[0] + pixel[1] + pixel[2]) / 3;
      pixel[0] = median;
      pixel[1] = median;
      pixel[2] = median;
    }
  }

  handler.savePixels(pixelsMatrix, outputPath);
}

/**
 * Esta función debe transformar una imagen a su equivalente en Blanco y negro.
 *
 * Una forma de conseguirlo es calcular la media de los valores RGB de cada pixel y
 * si esta es menor que 128 transforamr el pixel en negro [0, 0, 0] o, en caso contrario,
 * transformar el pixel en blanco [255, 255, 255].
 */
function blackAndWhiteConverter() {
  const outputPath = "output/tucan_black_and_white.jpg";
  const pixelsMatrix = handler.getPixels();

  for (const rowOfPixels of pixelsMatrix) {
    for (const pixel of rowOfPixels) {
      const median = (pixel[0] + pixel[1] + pixel[2]) / 3;
      pixel[0] = median >= 128 ? 255 : 0;
      pixel[1] = median >= 128 ? 255 : 0;
      pixel[2] = median >= 128 ? 255 : 0;
    }
  }

  handler.savePixels(pixelsMatrix, outputPath);
}

/**
 * Esta función debe reducir la imagen a la mitad.
 *
 * Una forma de conseguirlo es quitar los valores de las filas y columnas pares.
 * Otra forma es crear la imagen de nuevo unicamente con los valores de las filas y columnas pares.
 */
function scaleDown() {
  const outputPath = "output/tucan_scale_down.jpg";
  const pixelsMatrix = handler.getPixels();

  handler.savePixels(
    pixelsMatrix
      .filter((_, index) => index % 2 === 0)
      .map((rowOfPixels) => rowOfPixels.filter((_, index) => index % 2 === 0)),
    outputPath,
    handler.getShape()[0] / 2,
    handler.getShape()[1] / 2
  );
}

/**
 * Esta función debe reducir el brillo de la imagen según el parámetro qye recibe la función.
 *
 * Una forma de conseguirlo es dividir el valor de cada pixel por el parámetro dimFactor.
 */
function dimBrightness(dimFactor) {
  const outputPath = "output/tucan_dimed.jpg";
  const pixelsMatrix = handler.getPixels();

  for (const rowOfPixels of pixelsMatrix) {
    for (const pixel of rowOfPixels) {
      pixel[0] = pixel[0] / dimFactor;
      pixel[1] = pixel[1] / dimFactor;
      pixel[2] = pixel[2] / dimFactor;
    }
  }

  handler.savePixels(pixelsMatrix, outputPath);
}

/**
 * Esta función debe invertir el color de la imagen.
 *
 * Una forma de conseguirlo es asignar a cada valor RGB de cada píxel el valor 255 - valorRGB.
 *
 * Por ejemplo, si un pixel tiene valor [10, 20, 50] su nuevo valor sera [255 - 10, 255 - 20, 255 - 50] => [245, 235, 205]
 */
function invertColors() {
  const outputPath = "output/tucan_inverse.jpg";
  const pixelsMatrix = handler.getPixels();

  for (const rowOfPixels of pixelsMatrix) {
    for (const pixel of rowOfPixels) {
      pixel[0] = 255 - pixel[0];
      pixel[1] = 255 - pixel[1];
      pixel[2] = 255 - pixel[2];
    }
  }

  handler.savePixels(pixelsMatrix, outputPath);
}

/**
 * merge - Junta dos imagenes con cierto factor de fusion
 * Una forma de conseguirlo es sumar el valor de cada canal de cada píxel de cada imagen, habiéndolo multiplicado antes por el factor de fusión correspondiente.
 * @param alphaFirst - Factor de fusion para la primera imagen
 * @param alphaSecond - Factor de fusion para la segunda imagen
 */
function merge(alphaFirst, alphaSecond) {
  const catHandler = new ImageHandler("input/cat.jpg");
  const dogHandler = new ImageHandler("input/dog.jpg");
  const outputPath = "output/merged.jpg";

  const catPixels = catHandler.getPixels();
  const dogPixels = dogHandler.getPixels();

  const pixels = [];

  for (const i in catPixels) {
    const rowOfPixels = catPixels[i];
    pixels[i] = [];
    for (const j in rowOfPixels) {
      pixels[i][j] = [];
      const dogPixel = dogPixels[i][j];
      const catPixel = rowOfPixels[j];
      const pixel = pixels[i][j];
      pixel[0] = catPixel[0] * alphaSecond + dogPixel[0] * alphaFirst;
      pixel[1] = catPixel[1] * alphaSecond + dogPixel[1] * alphaFirst;
      pixel[2] = catPixel[2] * alphaSecond + dogPixel[2] * alphaFirst;
    }
  }

  dogHandler.savePixels(pixels, outputPath);
}

/**
 * Programa de prueba
 * NO DEBES MODIFICAR ESTAS LÍNEAS DE CÓDIGO
 *
 * Ejecuta el archivo actividad.js tal como se indica en el archivo Readme.md
 * En la carpeta output/ apareceran los resultados para cada uno de los casos
 *
 *     Ejecutar ejemplo: 0
 *     Conversor a rojos: 1
 *     Conversor a verdes: 2
 *     Conversor a azules: 3
 *     Conversor a grises: 4
 *     Conversor blanco y negro: 5
 *     Redimensionar: 6
 *     Reducir brillo: 7
 *     Negativo: 8
 *     Fusion de imagenes: 9
 */
let optionN = 9;

switch (optionN) {
  case 1:
    redConverter();
    break;
  case 2:
    greenConverter();
    break;
  case 3:
    blueConverter();
    break;
  case 4:
    greyConverter();
    break;
  case 5:
    blackAndWhiteConverter();
    break;
  case 6:
    scaleDown();
    break;
  case 7:
    dimBrightness(2);
    break;
  case 8:
    invertColors();
    break;
  case 9:
    merge(0.3, 0.7);
    break;
  default:
    ejemplo();
}
