const { Router } = require('express');
const router = Router();




router.get('/test', (req,res) => {

    const data = {
        "nombre": "Pepe",
        "website": "pepe.com"
    }
    res.json(data);

});

module.exports = router;