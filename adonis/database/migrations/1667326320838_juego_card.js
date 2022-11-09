'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('juegos', (table) => {
      table.increments()
      table.string('titulo', 254).notNullable()
      table.string('lanzamientoFecha', 254).notNullable()
      table.string('descripcion', 60).notNullable()
      table.string('clasificacion', 60).notNullable()
      table.integer('descargas', 60).notNullable()
      table.string('comingSoon', 60)

      table.timestamps()
    })
  }

  down () {
    this.drop('juego')
  }
}

module.exports = UserSchema
