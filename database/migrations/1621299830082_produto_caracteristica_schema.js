'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutoCaracteristicaSchema extends Schema {
  up () {
    this.create('produto_caracteristicas', (table) => {
      table.increments()
      table.string('valor')
      table.integer('produto_id').unsigned().references('id').inTable('produtos').notNullable()
      table.integer('caracteristica_id').unsigned().references('id').inTable('caracteristicas').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('produto_caracteristicas')
  }
}

module.exports = ProdutoCaracteristicaSchema
