'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CaracteristicaSchema extends Schema {
  up () {
    this.create('caracteristicas', (table) => {
      table.increments()
      table.string('nome', 100)
      table.timestamps()
    })
  }

  down () {
    this.drop('caracteristicas')
  }
}

module.exports = CaracteristicaSchema
