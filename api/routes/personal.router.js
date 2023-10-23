const { getAllPersonal, getOnePersonal, createPersonal, updatePersonal, deletePersonal, getPersonal } = require('../controllers/personal.controller.js')
//const { checkAuth, checkAdmin } = require('../middleware')


const router = require('express').Router() //le indicamos que vamos a usar el router de express para que maneje las peticiones

//definimos las rutas por verbo
router.get('/',  getAllPersonal) // trae todos los registros del modelo - todos los usuarios
router.get('/getPersonal', getPersonal)
router.get('/:id',  getOnePersonal) //trae un solo registro - le indicamos el id por params
router.post('/',  createPersonal) // crea un nuevo registro en el modelo - los datos se los pasamos por el body
router.put('/:id',  updatePersonal) // actualiza un solo registro - le enviamos el id por params y los datos a actualizar por el body
router.delete('/:id',  deletePersonal)  // elimina un recurso - le indicamos el id por params

module.exports = router