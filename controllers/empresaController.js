const db = require('../models/database');

console.log(require.body);

exports.createEmpresa = async (req, res) => {
  const { idEmpresa, nombre, direccion, direccionfacturacion, representantelegal, telefono, correoelectronico, codigopostal, estado, principal, adiciono } = req.body;
  
  console.log(req.body);
  const query = `
    INSERT INTO gen_empresas (idEmpresa, nombre, direccion, direccionfacturacion, representantelegal, telefono, correoelectronico, codigopostal, estado, principal, adiciono, fechaadicion)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURDATE())
  `;

  try {
    const [results] = await db.query(query, [idEmpresa, nombre, direccion, direccionfacturacion, representantelegal, telefono, correoelectronico, codigopostal, estado, principal, adiciono]);
    res.status(200).json({results, message: 'datos insertados correctamente'});
    alert('Datos insertados correctamente');
  } catch (error) {
    console.error('Error al crear la empresa:', error);
    res.status(500).send('Error al crear la empresa');
  }
};


exports.getEmpresas = async (req, res) => {
  const query = 'SELECT * FROM gen_empresas'
  try {
    const [empresas] = await db.query(query);
    res.json(empresas);
  } catch (error) {
    console.error('Error al obtener las empresas:', error);
    res.status(500).send('Error al obtener las empresas');
  }
};


exports.updateEmpresa = async (req, res) => {
  const { idEmpresa, nombre, direccion, direccionfacturacion, representantelegal, telefono, correoelectronico, codigopostal, estado, principal } = req.body;
  
  const query = `
    UPDATE gen_empresas SET nombre = ?, direccion = ?, direccionfacturacion = ?, representantelegal = ?, telefono = ?, correoelectronico = ?, codigopostal = ?, estado = ?, principal = ?
    WHERE idEmpresa = ?
  `;

  try {
    await db.query(query, [nombre, direccion, direccionfacturacion, representantelegal, telefono, correoelectronico, codigopostal, estado, principal, idEmpresa]);
    res.status(200).send('Empresa actualizada exitosamente');
  } catch (error) {
    console.error('Error al actualizar la empresa:', error);
    res.status(500).send('Error al actualizar la empresa');
  }
};


exports.deleteEmpresa = async (req, res) => {
  const { idEmpresa } = req.params;
  
  const query = 'DELETE FROM gen_empresas WHERE idEmpresa = ?';

  try {
    await db.query(query, [idEmpresa]);
    res.status(200).send('Empresa eliminada exitosamente');
  } catch (error) {
    console.error('Error al eliminar la empresa:', error);
    res.status(500).send('Error al eliminar la empresa');
  }
};

