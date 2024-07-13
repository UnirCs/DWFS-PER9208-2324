# API REST para un Cine
- Crear, eliminar y modificar películas.
- Crear, eliminar y modificar (parcialmente) salas.
- Crear, eliminar y modificar (parcialmente) usuarios.
- Crear una reserva para un usuario en una sala.
- Cancelar una reserva para un usuario en una sala.
- Modificar una reserva para un usuario en una sala.
- Registrar un pago de una reserva.

## Recursos Identificados

- **Película (peliculas)**: Representa una película en el catálogo del cine.
- **Sala (salas)**: Representa una sala de proyección en el cine.
- **Usuario (usuarios)**: Representa un usuario registrado en el sistema del cine.
- **Reserva (reservas)**: Representa una reserva de un usuario en una sala para una película específica.
- **Pago (pagos)**: Representa el registro de un pago asociado a una reserva.

## Detalles de la API

| Método HTTP | URI                                | Query Params                | Cuerpo de la Petición                                     | Cuerpo de la Respuesta                                | Códigos HTTP de Respuesta                  |
|-------------|------------------------------------|-----------------------------|-----------------------------------------------------------|-------------------------------------------------------|-------------------------------------------|
| POST        | /api/v1/peliculas                  | -                           | ``{"titulo": "Nombre de la Película", "director": "Nombre del Director", "duracion": 120}`` | ``{"id": 123, "titulo": "Nombre de la Película", "director": "Nombre del Director", "duracion": 120}`` | 201 Creado<br>400 Solicitud Incorrecta<br>500 Error Interno del Servidor |
| DELETE      | /api/v1/peliculas/{id}             | -                           | -                                                         | ``{"mensaje": "Película eliminada correctamente"}``    | 200 OK<br>404 No Encontrado<br>500 Error Interno del Servidor |
| PATCH       | /api/v1/peliculas/{id}             | -                           | ``{"titulo": "Nuevo Título"}``                              | ``{"id": 123, "titulo": "Nuevo Título", "director": "Nombre del Director", "duracion": 120}`` | 200 OK<br>400 Solicitud Incorrecta<br>404 No Encontrado<br>500 Error Interno del Servidor |
| POST        | /api/v1/salas                      | -                           | ``{"nombre": "Sala 1", "capacidad": 100}``                   | ``{"id": 456, "nombre": "Sala 1", "capacidad": 100}``   | 201 Creado<br>400 Solicitud Incorrecta<br>500 Error Interno del Servidor |
| DELETE      | /api/v1/salas/{id}                 | -                           | -                                                         | ``{"mensaje": "Sala eliminada correctamente"}``         | 200 OK<br>404 No Encontrado<br>500 Error Interno del Servidor |
| PATCH       | /api/v1/salas/{id}                 | -                           | ``{"nombre": "Nueva Sala 1"}``                               | ``{"id": 456, "nombre": "Nueva Sala 1", "capacidad": 100}`` | 200 OK<br>400 Solicitud Incorrecta<br>404 No Encontrado<br>500 Error Interno del Servidor |
| POST        | /api/v1/usuarios                   | -                           | ``{"nombre": "Usuario Ejemplo", "email": "usuario@example.com"}`` | ``{"id": 789, "nombre": "Usuario Ejemplo", "email": "usuario@example.com"}`` | 201 Creado<br>400 Solicitud Incorrecta<br>500 Error Interno del Servidor |
| DELETE      | /api/v1/usuarios/{id}              | -                           | -                                                         | ``{"mensaje": "Usuario eliminado correctamente"}``      | 200 OK<br>404 No Encontrado<br>500 Error Interno del Servidor |
| PATCH       | /api/v1/usuarios/{id}              | -                           | ``{"nombre": "Nuevo Nombre"}``                               | ``{"id": 789, "nombre": "Nuevo Nombre", "email": "usuario@example.com"}`` | 200 OK<br>400 Solicitud Incorrecta<br>404 No Encontrado<br>500 Error Interno del Servidor |
| POST        | /api/v1/reservas/{userId}/{roomId}/{movieId} | -                     | ``{"fecha": "2024-07-15", "asientos": ["A1", "A2"]}``      | ``{"id": 987, "userId": 789, "roomId": 456, "movieId": 123}`` | 201 Creado<br>400 Solicitud Incorrecta<br>404 No Encontrado<br>500 Error Interno del Servidor |
| DELETE      | /api/v1/reservas/{userId}/{reservationId}   | -                     | -                                                         | ``{"mensaje": "Reserva cancelada correctamente"}``      | 200 OK<br>404 No Encontrado<br>500 Error Interno del Servidor |
| PATCH       | /api/v1/reservas/{userId}/{reservationId}   | -                     | -                                                         | ``{"id": 987, "userId": 789, "roomId": 457, "movieId": 123}`` | 200 OK<br>400 Solicitud Incorrecta<br>404 No Encontrado<br>500 Error Interno del Servidor |
| POST        | /api/v1/pagos                      | -                           | ``{"reservationId": 987, "amount": 15.99}``                | ``{"id": 654, "reservationId": 987, "amount": 15.99}`` | 201 Creado<br>400 Solicitud Incorrecta<br>500 Error Interno del Servidor |