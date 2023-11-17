const controller = {};

controller.list = (req, res) => {
    db.query('SELECT * FROM dispositivos_electronicos')
      .then(customers => {
        console.log(customers);
        // Pasa los datos a la vista 'customers'
        res.render('customers', { customers });
      })
      .catch(error => {
        console.error(error);
        res.status(500).json(error);
      });
  };

module.exports = controller;