'use strict'
const Juegos = use('App/Models/Juegos')

class JuegoController
{
  async store({request, response})
  {

    const juegoData = request.only(['titulo','lanzamientoFecha','descripcion', 'clasificacion','descargas','comingSoon'])
    const juego = await Juegos.create(juegoData);

    return response.status(200).json({
      status: "200", //ok
      data: juego
    })
  }
  async todosLosJuegos({response})
  {
    const juegos = await Juegos.all()

        return response.status(200).json({
           status: "200", //ok
           data: juegos
        })
  }

}

module.exports = JuegoController
