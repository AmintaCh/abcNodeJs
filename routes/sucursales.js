const express = require('express');
const router = express.Router();
const sucursalController = require('../controllers/sucursalController');

router.post('/crear', sucursalController.createSucursal);
router.get('/', sucursalController.getSucursales);
router.put('/actualizar', sucursalController.updateSucursal);
router.delete('/eliminar/:idSucursal', sucursalController.deleteSucursal);

module.exports = router;
