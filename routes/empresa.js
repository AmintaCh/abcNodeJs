const express = require('express');
const router = express.Router();
const empresaController = require('../controllers/empresaController');

router.post('/crear', empresaController.createEmpresa);
router.get('/', empresaController.getEmpresas);
router.put('/actualizar', empresaController.updateEmpresa);
router.delete('/eliminar/:idEmpresa', empresaController.deleteEmpresa);

module.exports = router;
