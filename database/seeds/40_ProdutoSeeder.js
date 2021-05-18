'use strict'

/*
|--------------------------------------------------------------------------
| ProdutoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Produto = use('App/Models/Produto')

class ProdutoSeeder {
  async run () {
    await Produto.createMany([
      
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 7000, nome: 'Smartphone Samsung Galaxy A01 Preto 32GB', capa: 'A01.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 5500, nome: 'iPhone 11 Apple 64GB branco tela 7"', capa: 'iphoe11_branco.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 3, preco: 3400, nome: 'Smartphone Samsung Galaxy A01 Vermelho', capa: 'A01vermelho.webp'},
      {categoria_id: 1, marca_id: 2, modelo_id: 2, preco: 2100, nome: 'LG K51S Titânio 64GB, RAM de 3GB, Tela de 6,55', capa: 'k51.webp'},
      {categoria_id: 1, marca_id: 3, modelo_id: 1, preco: 7800, nome: 'iPhone 11 Apple 128GB Preto Tela de 6,1', capa: 'i12.webp'},
      {categoria_id: 1, marca_id: 1, modelo_id: 4, preco: 1900, nome: 'Smartphone Samsung Galaxy A71 Preto 128GB', capa: 'A71.webp'},

    ])
  }
}

module.exports = ProdutoSeeder
