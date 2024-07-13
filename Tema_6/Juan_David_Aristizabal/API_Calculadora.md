## Operaciones que la API debe soportar

- Sumar N elementos.
- Restar N elementos.
- Multiplicar 2 elementos.
- Dividir 2 elementos.
- Raíz N-ésima de un número.
- Potencia N-ésima de un número.
- Consultar el historial de operaciones realizadas.

## Recursos identificados

- **Operación (operations)**: Representa una operación matemática realizada por la calculadora.
- **Historial (history)**: Representa el historial de operaciones realizadas, permitiendo consultar los detalles de cada operación a través de un ID de operación.

## Detalles de la API

| Método HTTP | URI                    | Query Params | Cuerpo de la Petición                    | Cuerpo de la Respuesta                                              | Códigos HTTP de Respuesta                           |
|-------------|------------------------|--------------|------------------------------------------|---------------------------------------------------------------------|----------------------------------------------------|
| POST        | /operaciones/suma      | -            | ``{"numeros": [2, 2, 2]}``               | ``{"resultado": 6, "idOperacion": 1}``                               | 200 OK<br>400 Bad Request<br>500 Internal Server Error |
| POST        | /operaciones/resta     | -            | ``{"numeros": [10, 2, 3]}``              | ``{"resultado": 5, "idOperacion": 2}``                               | 200 OK<br>400 Bad Request<br>500 Internal Server Error |
| POST        | /operaciones/multiplicacion | -         | ``{"numeros": [2, 3]}``                  | ``{"resultado": 6, "idOperacion": 3}``                               | 200 OK<br>400 Bad Request<br>500 Internal Server Error |
| POST        | /operaciones/division  | -            | ``{"numeros": [10, 2]}``                 | ``{"resultado": 5, "idOperacion": 4}``                               | 200 OK<br>400 Bad Request<br>500 Internal Server Error |
| POST        | /operaciones/raiz      | -            | ``{"numero": 8, "indice": 3}``           | ``{"resultado": 2, "idOperacion": 5}``                               | 200 OK<br>400 Bad Request<br>500 Internal Server Error |
| POST        | /operaciones/potencia  | -            | ``{"base": 2, "exponente": 3}``          | ``{"resultado": 8, "idOperacion": 6}``                               | 200 OK<br>400 Bad Request<br>500 Internal Server Error |
| GET         | /historial             | -            | -                                        | ``{"operaciones": [{"idOperacion": 1, "operacion": "suma", "resultado": 6, "numeros": [2, 2, 2]}, {"idOperacion": 2, "operacion": "resta", "resultado": 5, "numeros": [10, 2, 3]}]}`` | 200 OK<br>500 Internal Server Error |
| GET         | /historial/{id}        | -            | -                                        | ``{"idOperacion": 1, "operacion": "suma", "resultado": 6, "numeros": [2, 2, 2]}``      | 200 OK<br>404 Not Found<br>500 Internal Server Error |