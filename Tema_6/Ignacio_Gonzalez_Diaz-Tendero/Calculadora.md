### API de una calculadora online

En este ejercicio vamos a diseñar la API REST de una calculadora.

Las operaciones que la API debe soportar son las siguientes:

- Sumar N elementos (2+2, 2+2+2).
- Restar N elementos (2-2, 2-2-2).
- Multiplicar 2 elementos (2x2).
- Dividir 2 elementos (2/2).
- Raiz N-ésima de un número (Raíz cuadrada de 4, Raíz cúbica de 8).
- Potencia N-ésima de un número (2^2, 3^3, 4^4).

#### Recursos identificados:

- Operación (operations): Representa una operación realizada en la calculadora.

| Método HTTP | URI                       | Query Params | Cuerpo de la Petición         | Cuerpo de la Respuesta                          | Códigos de Respuesta                                                   |
|-------------|---------------------------|--------------|-------------------------------|-------------------------------------------------|------------------------------------------------------------------------|
| GET         | /operations/{operationId} | -            | N/A                           | {"operation": {"id": 123, "expression": "2+2"}} | 200 OK  <br/>404 Not Found  <br/>500 Internal Server Error             |
| POST        | /operations/sum           | -            | {"numbers": [2, 2, 2]}        | {"operationId": 123, "result": 6}               | 201 Created  <br/> 400 Bad Request  <br/>500 Internal Server Error     |
| POST        | /operations/subtract      | -            | {"numbers": [5, 3]}           | {"operationId": 124, "result": 2}               | 201 Created   <br/> 400 Bad Request  <br/>500 Internal Server Error    |
| POST        | /operations/multiply      | -            | {"numbers": [3, 4]}           | {"operationId": 125, "result": 12}              | 201 Created    <br/> 400 Bad Request  <br/>500 Internal Server Error   |
| POST        | /operations/divide        | -            | {"dividend": 8, "divisor": 2} | {"operationId": 126, "result": 4}               | 201 Created     <br/> 400 Bad Request  <br/>500 Internal Server Error  |
| POST        | /operations/square-root   | -            | {"number": 16}                | {"operationId": 127, "result": 4}               | 201 Created   <br/> 400 Bad Request  <br/>500 Internal Server Error    |
| POST        | /operations/power         | -            | {"base": 2, "exponent": 3}    | {"operationId": 128, "result": 8}               | 201 Created      <br/> 400 Bad Request  <br/>500 Internal Server Error |

