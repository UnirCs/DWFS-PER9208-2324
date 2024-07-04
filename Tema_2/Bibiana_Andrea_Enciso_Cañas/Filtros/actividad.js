const ImageHandler = require('./ImageHandler.js');

let path = 'input/tucan.jpg';
let handler = new ImageHandler(path);

/**
 * Ejemplo de construcción de una imagen
 */
function ejemplo() {
  let outputPath = 'output/ejemplo.jpg';
  let pixeles = [];
  let filas = 2;
  let columnas = 2;
  for (let i = 0; i < filas; i++) {
    let nuevaFila = [];
    console.log("Fila: " + i);
    for (let j = 0; j < columnas; j++) {
      console.log("Columna:" + j);
      let pixel = [0, 0, 0]; // R G B -> Red Green Blue -> Rojo Verde Azul
      if ((i + j) % 2 === 0) { // Si la suma de la fila y la columna es par....
        pixel = [255, 255, 255];
      }
      console.log("Vamos a añadir el pixel " + pixel + " a la fila " + i + " columna " + j);
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
  let outputPath = 'output/tucan_red.jpg';
  let pixels = handler.getPixels();

  for (let i = 0; i < pixels.shape[0]; i++) {
    for (let j = 0; j < pixels.shape[1]; j++) {
      pixels.set(i, j, 0, 255);   // Red
      pixels.set(i, j, 1, 0);     // Green
      pixels.set(i, j, 2, 0);     // Blue
    }
  }

  handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe transformar una imagen en escala de verdes.
 *
 * Una forma de conseguirlo es simplemente poner los canales R y B a 0 para cada pixel.
 */
function greenConverter() {
  let outputPath = 'output/tucan_green.jpg';
  let pixels = handler.getPixels();

  for (let i = 0; i < pixels.shape[0]; i++) {
    for (let j = 0; j < pixels.shape[1]; j++) {
      pixels.set(i, j, 0, 0);     // Red
      pixels.set(i, j, 1, 255);   // Green
      pixels.set(i, j, 2, 0);     // Blue
    }
  }

  handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe transformar una imagen en escala de azules.
 *
 * Una forma de conseguirlo es simplemente poner los canales R y G a 0 para cada pixel.
 */
function blueConverter() {
  let outputPath = 'output/tucan_blue.jpg';
  let pixels = handler.getPixels();

  for (let i = 0; i < pixels.shape[0]; i++) {
    for (let j = 0; j < pixels.shape[1]; j++) {
      pixels.set(i, j, 0, 0);     // Red
      pixels.set(i, j, 1, 0);     // Green
      pixels.set(i, j, 2, 255);   // Blue
    }
  }

  handler.savePixels(pixels, outputPath);
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
  let outputPath = 'output/tucan_grey.jpg';
  let pixels = handler.getPixels();

  for (let i = 0; i < pixels.shape[0]; i++) {
    for (let j = 0; j < pixels.shape[1]; j++) {
      let avg = Math.floor((pixels.get(i, j, 0) + pixels.get(i, j, 1) + pixels.get(i, j, 2)) / 3);
      pixels.set(i, j, 0, avg);   // Red
      pixels.set(i, j, 1, avg);   // Green
      pixels.set(i, j, 2, avg);   // Blue
    }
  }

  handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe transformar una imagen a su equivalente en Blanco y negro.
 *
 * Una forma de conseguirlo es calcular la media de los valores RGB de cada pixel y
 * si esta es menor que 128 transforamr el pixel en negro [0, 0, 0] o, en caso contrario,
 * transformar el pixel en blanco [255, 255, 255].
 */
function blackAndWhiteConverter() {
  let outputPath = 'output/tucan_black_and_white.jpg';
  let pixels = handler.getPixels();

  for (let i = 0; i < pixels.shape[0]; i++) {
    for (let j = 0; j < pixels.shape[1]; j++) {
      let avg = Math.floor((pixels.get(i, j, 0) + pixels.get(i, j, 1) + pixels.get(i, j, 2)) / 3);
      if (avg < 128) {
        pixels.set(i, j, 0, 0);   // Red
        pixels.set(i, j, 1, 0);   // Green
        pixels.set(i, j, 2, 0);   // Blue
      } else {
        pixels.set(i, j, 0, 255); // Red
        pixels.set(i, j, 1, 255); // Green
        pixels.set(i, j, 2, 255); // Blue
      }
    }
  }

  handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe reducir la imagen a la mitad.
 *
 * Una forma de conseguirlo es quitar los valores de las filas y columnas pares.
 * Otra forma es crear la imagen de nuevo unicamente con los valores de las filas y columnas pares.
 */
function scaleDown() {
  let outputPath = 'output/tucan_scale_down.jpg';
  let pixels = handler.getPixels();

  let newPixels = [];
  for (let i = 0; i < pixels.shape[0]; i += 2) {
    let newRow = [];
    for (let j = 0; j < pixels.shape[1]; j += 2) {
      newRow.push([
        pixels.get(i, j, 0),   // Red
        pixels.get(i, j, 1),   // Green
        pixels.get(i, j, 2)    // Blue
      ]);
    }
    newPixels.push(newRow);
  }

  handler.savePixels(newPixels, outputPath, newPixels.length, newPixels[0].length);
}

/**
 * Esta función debe reducir el brillo de la imagen según el parámetro qye recibe la función.
 *
 * Una forma de conseguirlo es dividir el valor de cada pixel por el parámetro dimFactor.
 */
function dimBrightness(dimFactor) {
  let outputPath = 'output/tucan_dimed.jpg';
  let pixels = handler.getPixels();

  for (let i = 0; i < pixels.shape[0]; i++) {
    for (let j = 0; j < pixels.shape[1]; j++) {
      pixels.set(i, j, 0, Math.floor(pixels.get(i, j, 0) / dimFactor));   // Red
      pixels.set(i, j, 1, Math.floor(pixels.get(i, j, 1) / dimFactor));   // Green
      pixels.set(i, j, 2, Math.floor(pixels.get(i, j, 2) / dimFactor));   // Blue
    }
  }

  handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe invertir el color de la imagen.
 *
 * Una forma de conseguirlo es asignar a cada valor RGB de cada píxel el valor 255 - valorRGB.
 *
 * Por ejemplo, si un pixel tiene valor [10, 20, 50] su nuevo valor sera [255 - 10, 255 - 20, 255 - 50] => [245, 235, 205]
 */
function invertColors() {
  let outputPath = 'output/tucan_inverse.jpg';
  let pixels = handler.getPixels();

  for (let i = 0; i < pixels.shape[0]; i++) {
    for (let j = 0; j < pixels.shape[1]; j++) {
      pixels.set(i, j, 0, 255 - pixels.get(i, j, 0));   // Red
      pixels.set(i, j, 1, 255 - pixels.get(i, j, 1));   // Green
      pixels.set(i, j, 2, 255 - pixels.get(i, j, 2));   // Blue
    }
  }

  handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe fusionar dos imágenes.
 *
 * Para fusionar dos imágenes debemos cargar ambas imágenes con ImageHandler,
 * obtener sus pixeles, y combinar los pixeles de ambas imágenes segun los valores de los parámetros alphaFirst y alphaSecond.
 *
 * Al final debemos guardar la imagen fusionada en la carpeta de salida (output)
 */
function merge(alphaFirst, alphaSecond) {
  let catHandler = new ImageHandler('input/cat.jpg');
  let dogHandler = new ImageHandler('input/dog.jpg');
  let outputPath = 'output/merged.jpg';

  let catPixels = catHandler.getPixels();
  let dogPixels = dogHandler.getPixels();

  let pixels = [];


  let minWidth = Math.min(catPixels.shape[0], dogPixels.shape[0]);
  let minHeight = Math.min(catPixels.shape[1], dogPixels.shape[1]);

  for (let i = 0; i < minWidth; i++) {
    let newRow = [];
    for (let j = 0; j < minHeight; j++) {
      let blendedPixel = [
        Math.floor(catPixels.get(i, j, 0) * alphaFirst + dogPixels.get(i, j, 0) * alphaSecond),   // Red
        Math.floor(catPixels.get(i, j, 1) * alphaFirst + dogPixels.get(i, j, 1) * alphaSecond),   // Green
        Math.floor(catPixels.get(i, j, 2) * alphaFirst + dogPixels.get(i, j, 2) * alphaSecond)    // Blue
      ];
      newRow.push(blendedPixel);
    }
    pixels.push(newRow);
  }

  handler.savePixels(pixels, outputPath, pixels.length, pixels[0].length);
}

/**
 * Opción elegida para ejecutar.
 *
 * Modifica este valor para ejecutar la función deseada.
 * 0: Ejemplo de construcción de imagen
 * 1: Convertir a Rojos
 * 2: Convertir a Verdes
 * 3: Convertir a Azules
 * 4: Convertir a Grises
 * 5: Convertir a Blanco y Negro
 * 6: Redimensionar a la Mitad
 * 7: Reducir Brillo
 * 8: Invertir Colores
 * 9: Fusionar Imágenes
 */
let optionN = 0;

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