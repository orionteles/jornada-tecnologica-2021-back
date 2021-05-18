'use strict'

/*
|--------------------------------------------------------------------------
| ModeloSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Modelo = use('App/Models/Modelo')

class ModeloSeeder {
  async run () {
    await Modelo.createMany([
      {id: 1, nome: 'iPhone 11'},
      {id: 2, nome: 'K51'},
      {id: 3, nome: 'A01'},
      {id: 4, nome: 'A71'},
    ])
  }
}

module.exports = ModeloSeeder
