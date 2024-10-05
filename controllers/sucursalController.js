const db = require('../models/database');

console.log(require.body);

exports.createSucursal = async (req, res) => {
  const { idSucursal, idEmpresa, descripcion, direccion, telefono, encargado, estado } = req.body;
  
  const query = `
    INSERT INTO inv_sucursales (idSucursal, idEmpresa, descripcion, direccion, telefono, encargado, estado)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  try{
  const[results] = await db.query(query, [idSucursal, idEmpresa, descripcion, direccion, telefono, encargado, estado]);
    res.status(200).json({results, message: 'datos insertados correctamente'});
    alert('Datos insertados correctamente');
  }catch (error) {
    console.error('Error al crear la sucursales:', error);
    res.status(500).send('Error al crear la sucursales');
  };
};


exports.getSucursales = async (req, res) => {
  const query = 'SELECT * FROM inv_sucursales';
  try {
    const [sucursales] = await db.query(query);
    res.json(sucursales);
  } catch (error) {
    console.error('Error al obtener las sucursales:', error);
    res.status(500).send('Error al obtener las sucursales');
  }
};


exports.updateSucursal = async (req, res) => {
  const { idSucursal, descripcion, direccion, telefono, encargado, estado } = req.body;
  
  const query = `
    UPDATE inv_sucursales SET descripcion = ?, direccion = ?, telefono = ?, encargado = ?, estado = ?
    WHERE idSucursal = ?
  `;
  try{
  await db.query(query, [descripcion, direccion, telefono, encargado, estado, idSucursal]);
    res.status(200).send('sucursal actualizada exitosamente');
  } catch (error) {
    console.error('Error al actualizar la sucursal:', error);
    res.status(500).send('Error al actualizar la sucursal');
  }
};


exports.deleteSucursal = async (req, res) => {
  const { idSucursal } = req.params;
  
  const query = 'DELETE FROM inv_sucursales WHERE idSucursal = ?';
  try{
  await db.query(query, [idSucursal]);
  res.status(200).send('sucursal eliminada exitosamente');
  } catch (error) {
    console.error('Error al eliminar la sucursal:', error);
    res.status(500).send('Error al eliminar la sucursal');
  }
};
