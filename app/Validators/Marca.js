'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Marca extends ValidatorAbstract {
  get rules () {
    return {
      nome: 'required|min:2|max:10'
    }
  }
}

module.exports = Marca
