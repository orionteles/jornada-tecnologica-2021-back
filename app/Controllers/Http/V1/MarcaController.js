'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Marca = use('App/Models/Marca')

/**
 * Resourceful controller for interacting with marcas
 */
class MarcaController {
  /**
   * Show a list of all marcas.
   * GET marcas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const {page, perPage} = request.all()
    return Marca.query().paginate(page, perPage)
  }

  /**
   * Create/save a new marca.
   * POST marcas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const campos = Marca.getCamposCadastro()
    const dados = request.only(campos)

    return await Marca.create(dados)
  }

  /**
   * Display a single marca.
   * GET marcas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Marca.findOrFail(params.id)
  }

  /**
   * Update marca details.
   * PUT or PATCH marcas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const campos = Marca.getCamposCadastro()
    const dados = request.only(campos)

    const marca = await Marca.findOrFail(params.id)

    marca.merge(dados)
    await marca.save()

    return marca
  }

  /**
   * Delete a marca with id.
   * DELETE marcas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const marca = await Marca.findOrFail(params.id)

    if(await marca.delete()){
      return {type: 'success', id: params.id}
    }
    
    return {type: 'error', id: params.id}
  }
}

module.exports = MarcaController
