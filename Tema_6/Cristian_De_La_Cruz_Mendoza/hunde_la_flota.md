# API del Juego Hundir la Flota
## Recursos Identificados
1. **partidas**: Representa una partida entre dos jugadores.
2. **usuarios**: Representa un usuario registrado en el juego.
3. **barcos**: Representa un barco dentro de una partida.
4. **disparos**: Representa un disparo realizado por un jugador a otro en una partida.

## Detalle de los Endpoints

| Método HTTP | URI                            | Query Params | Request Body                             | Response Body                              | Códigos HTTP de respuesta                   |
|-------------|--------------------------------|--------------|------------------------------------------|--------------------------------------------|---------------------------------------------|
| POST        | /api/v1/partidas               | -            | -                                        | `{"id": 1, "jugador1": "usuario1", "jugador2": "usuario2", "estado": "pendiente"}` | 201 Created, 400 Bad Request, 500 Internal Server Error |
| DELETE      | /api/v1/partidas/{id}          | -            | -                                        | `{"mensaje": "Partida eliminada"}`         | 200 OK, 404 Not Found, 500 Internal Server Error |
| PATCH       | /api/v1/partidas/{id}          | -            | `{"estado": "iniciada"}`                 | `{"id": 1, "jugador1": "usuario1", "jugador2": "usuario2", "estado": "iniciada"}` | 200 OK, 400 Bad Request, 404 Not Found, 500 Internal Server Error |
| PATCH       | /api/v1/partidas/{id}/finalizar| -            | -                                        | `{"id": 1, "estado": "finalizada", "ganador": "usuario1"}` | 200 OK, 404 Not Found, 500 Internal Server Error |
| GET         | /api/v1/partidas/{id}          | -            | -                                        | `{"id": 1, "jugador1": "usuario1", "jugador2": "usuario2", "estado": "iniciada", "ganador": null, "barcos_jugador1": [...], "barcos_jugador2": [...], "disparos_jugador1": [...], "disparos_jugador2": [...], "turno": "jugador1"}` | 200 OK, 404 Not Found, 500 Internal Server Error |
| POST        | /api/v1/barcos                | -            | `{"partidaId": 1, "jugador": "jugador1", "tipo": "cuatro_cuadrados", "posicion": {"inicio": {"fila": 1, "columna": 1}, "fin": {"fila": 1, "columna": 4}}}` | `{"id": 1, "partidaId": 1, "jugador": "jugador1", "tipo": "cuatro_cuadrados", "posicion": {"inicio": {"fila": 1, "columna": 1}, "fin": {"fila": 1, "columna": 4}}}` | 201 Created, 400 Bad Request, 500 Internal Server Error |
| DELETE      | /api/v1/barcos/{id}           | -            | -                                        | `{"mensaje": "Barco eliminado"}`           | 200 OK, 404 Not Found, 500 Internal Server Error |
| GET         | /api/v1/barcos/{jugador}/{partidaId} | -       | -                                        | `[{"id": 1, "partidaId": 1, "jugador": "jugador1", "tipo": "cuatro_cuadrados", "posicion": {"inicio": {"fila": 1, "columna": 1}, "fin": {"fila": 1, "columna": 4}}}, ...]` | 200 OK, 404 Not Found, 500 Internal Server Error |
| POST        | /api/v1/disparos              | -            | `{"partidaId": 1, "jugador": "jugador1", "posicion": {"fila": 1, "columna": 1}}` | `{"id": 1, "partidaId": 1, "jugador": "jugador1", "posicion": {"fila": 1, "columna": 1}, "resultado": "agua"}` | 201 Created, 400 Bad Request, 500 Internal Server Error |
| POST        | /api/v1/usuarios               | -            | `{"nombre": "Usuario1"}`                 | `{"id": 1, "nombre": "Usuario1"}`          | 201 Created, 400 Bad Request, 500 Internal Server Error |
| GET         | /api/v1/usuarios/{id}          | -            | -                                        | `{"id": 1, "nombre": "Usuario1"}`          | 200 OK, 404
