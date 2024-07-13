## Operaciones 
Las operaciones que la API debe soportar son las siguientes:
- Crear una partida.
- Eliminar una partida.
- Modificar datos de una partida.
- Iniciar una partida.
- Finalizar una partida.
- Consultar todos los datos (jugadores asociados, barcos de cada jugador, disparos realizados, ganador...) de una partida.
- Añadir un barco a la cuadrícula de un jugador en una partida.
- Eliminar un barco de la cuadrícula de un jugador en una partida.
- Consultar todos los barcos de un jugador de una partida.
- Registrar un disparo de un jugador a otro en una partida.
- Crear un usuario.
- Obtener datos de un usuario.
- Eliminar un usuario.

## Recursos Identificados

- **Partida (partidas)**: Representa una partida en el sistema de juego.
- **Jugador (jugadores)**: Representa un jugador participante en una partida.
- **Barco (barcos)**: Representa un barco en la cuadrícula de un jugador.
- **Disparo (disparos)**: Representa un disparo realizado por un jugador contra otro en una partida.
- **Usuario (usuarios)**: Representa un usuario registrado en el sistema.

## Detalles de la API

| Método HTTP | URI                                | Query Params                | Cuerpo de la Petición                                     | Cuerpo de la Respuesta                                | Códigos HTTP de Respuesta                  |
|-------------|------------------------------------|-----------------------------|-----------------------------------------------------------|-------------------------------------------------------|-------------------------------------------|
| POST        | /api/v1/partidas                   | -                           | -                                                         | ``{"id": 123, ...}``                                  | 201 Creado<br>400 Solicitud Incorrecta<br>500 Error Interno del Servidor |
| DELETE      | /api/v1/partidas/{id}              | -                           | -                                                         | ``{"mensaje": "Partida eliminada correctamente"}``    | 200 OK<br>404 No Encontrado<br>500 Error Interno del Servidor |
| PATCH       | /api/v1/partidas/{id}              | -                           | ``{"estado": "Finalizada"}``                               | ``{"id": 123, ...}``                                  | 200 OK<br>400 Solicitud Incorrecta<br>404 No Encontrado<br>500 Error Interno del Servidor |
| POST        | /api/v1/jugadores                  | -                           | ``{"nombre": "Jugador Ejemplo", "email": "jugador@example.com"}`` | ``{"id": 456, ...}``                                  | 201 Creado<br>400 Solicitud Incorrecta<br>500 Error Interno del Servidor |
| DELETE      | /api/v1/jugadores/{id}             | -                           | -                                                         | ``{"mensaje": "Jugador eliminado correctamente"}``    | 200 OK<br>404 No Encontrado<br>500 Error Interno del Servidor |
| PATCH       | /api/v1/jugadores/{id}             | -                           | ``{"nombre": "Nuevo Nombre"}``                               | ``{"id": 456, ...}``                                  | 200 OK<br>400 Solicitud Incorrecta<br>404 No Encontrado<br>500 Error Interno del Servidor |
| POST        | /api/v1/barcos/{jugadorId}         | -                           | ``{"tipo": "Destructor", "posicion": "A1"}``               | ``{"id": 789, ...}``                                  | 201 Creado<br>400 Solicitud Incorrecta<br>404 No Encontrado<br>500 Error Interno del Servidor |
| DELETE      | /api/v1/barcos/{jugadorId}/{barcoId} | -                        | -                                                         | ``{"mensaje": "Barco eliminado correctamente"}``      | 200 OK<br>404 No Encontrado<br>500 Error Interno del Servidor |
| GET         | /api/v1/barcos/{jugadorId}         | -                           | -                                                         | ``{"barcos": [...]}``                                 | 200 OK<br>404 No Encontrado<br>500 Error Interno del Servidor |
| POST        | /api/v1/disparos/{jugadorId}/{objetivoId} | -                    | ``{"posicion": "B2"}``                                    | ``{"id": 987, ...}``                                  | 201 Creado<br>400 Solicitud Incorrecta<br>404 No Encontrado<br>500 Error Interno del Servidor |
| POST        | /api/v1/usuarios                   | -                           | ``{"nombre": "Usuario Ejemplo", "email": "usuario@example.com"}`` | ``{"id": 654, ...}``                                  | 201 Creado<br>400 Solicitud Incorrecta<br>500 Error Interno del Servidor |
| GET         | /api/v1/usuarios/{id}              | -                           | -                                                         | ``{"id": 654, ...}``                                  | 200 OK<br>404 No Encontrado<br>500 Error Interno del Servidor |
| DELETE      | /api/v1/usuarios/{id}              | -                           | -                                                         | ``{"mensaje": "Usuario eliminado correctamente"}``    | 200 OK<br>404 No Encontrado<br>500 Error Interno del Servidor |
| GET         | /api/v1/partidas/{id}/detalle      | -                           | -                                                         | Detalles completos de la partida, incluyendo jugadores, barcos y disparos realizados. | 200 OK<br>404 No Encontrado<br>500 Error Interno del Servidor |