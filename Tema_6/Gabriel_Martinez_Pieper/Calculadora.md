# API de una calculadora online

## Recursos

- **additions:** Sumar N elementos
- **subtractions:** Restar N elementos
- **multiplications:** Multiplicar 2 elementos
- **divisions:** Dividir 2 elementos
- **roots:** Raiz N-ésima de un número
- **powers:** Potencia N-ésima de un número
- **operations:** Historial de operaciones

| Método HTTP | URI                       | Query Params | Cuerpo de la Petición          | Cuerpo de la Respuesta                                                                                                                                                           | Códigos de Respuesta                                          |
|-------------|---------------------------|--------------|--------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| POST        | /api/v1/additions         | N/A          | `{"numbers": [2,2,2]}`         | `{"id": 1,"result": 6}`                                                                                                                                                          | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST        | /api/v1/subtractions      | N/A          | `{"numbers": [2,2,2]}`         | `{"id": 2,"result": -2}`                                                                                                                                                         | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST        | /api/v1/multiplications   | N/A          | `{"number1": 2,"number2": 2}`  | `{"id": 3,"result": 4}`                                                                                                                                                          | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST        | /api/v1/divisions         | N/A          | `{"dividend": 2,"divisor": 2}` | `{"id": 4,"result": 1}`                                                                                                                                                          | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST        | /api/v1/roots             | N/A          | `{"radicand": 4,"index": 2}`   | `{"id": 5,"result": 2}`                                                                                                                                                          | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST        | /api/v1/powers            | N/A          | `{"base": 2,"exponent": 3}`    | `{"id": 6,"result": 8}`                                                                                                                                                          | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| GET         | /api/v1/operations        | type         | N/A                            | `{"operations": [{"id": 1,"type": "addition", "parameters":{"numbers": [2,2,2]},result": 6}, {"id": 2,"type": "subtraction", "parameters":{"numbers": [2,2,2]},result": -2}]}`   | 200 Ok<br/>400 Bad Request<br/>500 Internal Server Error      |
| GET         | /api/v1/operations/{id}   | N/A          | N/A                            | `{"id": 1,"type": "addition","parameters":{"numbers": [2,2,2]},result": 6}`                                                                                                      | 200 Ok<br/>404 Not Found<br/>500 Internal Server Error        |