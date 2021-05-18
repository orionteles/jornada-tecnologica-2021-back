'use strict'

/*
|--------------------------------------------------------------------------
| CaracteristicaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Caracteristica = use('App/Models/Caracteristica')

class CaracteristicaSeeder {
  async run () {
    await Caracteristica.createMany([
      {id: 1, nome: 'Tipo'},
      {id: 2, nome: 'Cor'},
      {id: 3, nome: 'Som'},
      {id: 4, nome: 'Memória interna'},
      {id: 5, nome: 'Slot para cartão'},
      {id: 6, nome: 'Rádio FM'},
      {id: 7, nome: 'Processador'},
      {id: 8, nome: 'Bluetooth'},
      {id: 9, nome: 'Mensagens'},
      {id: 10, nome: 'Características Gerais'},
    ])
  }
}

module.exports = CaracteristicaSeeder
