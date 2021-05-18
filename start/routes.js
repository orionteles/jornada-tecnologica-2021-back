'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// V1
Route.group(() => {
  
  Route.resource('/marcas', 'V1/MarcaController')
       .apiOnly()
       .validator(new Map([
         [['store', 'update'], 'Marca'],
       ]))
  
  Route.resource('/categorias', 'V1/CategoriaController').apiOnly()

  Route.resource('/produtos', 'V1/ProdutoController').apiOnly()
  Route.get('/catogorias/:id/produtos', 'V1/CategoriaController.produtos')
  Route.get('/produtos/:id/caracteristicas', 'V1/ProdutoController.caracteristicas')
  
}).prefix('api/v1')

// V2
Route.group(() => {

  Route.resource('/produtos', 'V2/ProdutoController').apiOnly()
  
}).prefix('api/v2')