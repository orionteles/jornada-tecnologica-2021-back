'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutoSchema extends Schema {
  up () {
    this.create('produtos', (table) => {
      table.increments()
      table.string('nome', 50).notNullable()
      table.string('capa')
      table.decimal('preco')
      table.integer('marca_id').unsigned().references('id').inTable('marcas').notNullable()
      table.integer('modelo_id').unsigned().references('id').inTable('modelos').notNullable()
      table.integer('categoria_id').unsigned().references('id').inTable('categorias').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('produtos')
  }
}

module.exports = ProdutoSchema
