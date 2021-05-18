'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Modelo = use('App/Models/Modelo')

/**
 * Resourceful controller for interacting with modelos
 */
class ModeloController {
  /**
   * Show a list of all modelos.
   * GET modelos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const {page, perPage} = request.all()
    return Modelo.query().paginate(page, perPage)
  }

  /**
   * Create/save a new modelo.
   * POST modelos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const campos = Modelo.getCamposCadastro()
    const dados = request.only(campos)

    return await Modelo.create(dados)
  }

  /**
   * Display a single modelo.
   * GET modelos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Modelo.findOrFail(params.id)
  }

  /**
   * Update modelo details.
   * PUT or PATCH modelos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const campos = Modelo.getCamposCadastro()
    const dados = request.only(campos)

    const modelo = await Modelo.findOrFail(params.id)

    modelo.merge(dados)
    await modelo.save()

    return modelo
  }

  /**
   * Delete a modelo with id.
   * DELETE modelos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const modelo = await Modelo.findOrFail(params.id)
    return await modelo.delete()
  }
}

module.exports = ModeloController
