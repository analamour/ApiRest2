const { Router, request } = require ('express');
const router = Router();

const productos = require ('../sample.json');



router.get('/', (req, res) =>{
    res.json(productos);
});

router.post('/', (req,res) =>{
    const { producto, talle, precio } = req.body;
    if (producto && talle && precio) {
        const id = productos.length + 1;
        const newProducto = {...req.body, id};
        productos.push(newProducto);
        res.json(productos);
    } else {
        res.send('Wrong request');
    }
    res.send('Recibido');


})

module.exports = router;