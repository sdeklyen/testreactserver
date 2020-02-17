const router = require('express').Router();
const sequelize = require('../db');
const Cat = sequelize.import('../models/cat');

router.post('/add', (req, res) => {
    const newCat = {
        catName: req.body.catName, 
        catAge: req.body.catAge, 
        catColor: req.body.catColor, 
        catMedicine: req.body.catMedicine, 
        catOtherInfo: req.body.catOtherInfo
    }

    Cat.create(newCat)
    .then(cat => res.status(200).json(cat))
    .catch(err => res.status(500).json({
        error: err
    }))
}); 

router.get('/', (req, res) => {
    Cat.findAll()
    .then(cat => res.status(200).json(cat))
    .catch(err => res.status(500).json({
        error: err
    }))
});

router.get('/:id', (req, res) => {
    Cat.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(bet => res.status(200).json(bet))
    .catch(err => res.status(500).json({
        error: err
    }))
})

router.put('/:id', (req, res) => {
    Cat.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(bet => res.status(200).json(bet))
    .catch(err => res.status(500).json({
        error: err
    }))
});

router.delete('/:id', (req, res) => {
    Cat.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(bet => res.status(200).json(bet))
    .catch(err => res.status(500).json({
        error: err
    }))
});

module.exports = router;