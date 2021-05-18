'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Produto extends Model {
  static getCamposCadastro(){
    return [
      'nome',
      'capa',
      'preco',
      'marca_id',
      'modelo_id',
      'categoria_id',
    ]
  }  

  marca(){
    return this.belongsTo('App/Models/Marca').select(['id', 'nome'])
  }

  modelo(){
    return this.belongsTo('App/Models/Modelo').select(['id', 'nome'])
  }

  caracteristicas(){
    return this.hasMany('App/Models/ProdutoCaracteristica')
  }
}

module.exports = Produto
