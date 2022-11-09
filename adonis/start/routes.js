'use strict'

const Route = use('Route')

Route.post('/login','AuthController.login')

Route.resource('users','UserController')
.apiOnly()
.validator(new Map([
  [['users.store'], ['StoreUser']]
]))


Route.post('/crearJuego','JuegoController.store')
Route.get('/juegos','JuegoController.todosLosJuegos')
