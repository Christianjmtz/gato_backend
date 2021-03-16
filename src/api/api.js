'use strict'

// Requires
const express           = require('express');
const api               = express.Router();
const usuarioController = require('../../controllers/usuario');

/**
 * User CRUD
 */
api.post('/api/usuario/create/username/:username/status/:status', usuarioController.create);
api.get('/usuario/list', usuarioController.list);
api.get('/usuario/find/username/:username', usuarioController.find);

module.exports = api;