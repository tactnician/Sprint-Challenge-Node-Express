const express = require('express');

const router = express.Router();

const Projects= require('../data/helpers/projectModel');

//get()
router.get('/', async (req, res) => {
    try {
        const id =  await req.params.id;
        const resourceArr = await Projects.get(id);
        console.log(" resource Array :" , resourceArr);
        res.status(200).json(resourceArr);
    } catch (error) {
        console.log(`error in get method ${error}`);
        res.status(500).json({message: `error getting resources: ${error}`});
    }
});


//getById()
router.get('/:id', async (req, res) => {
    try {
        // const {id} =  await req.params.id;
        const resourceArr = await Projects.get(req.params.id);
        console.log(" resource Array :" , resourceArr);
        res.status(200).json(resourceArr);
    } catch (error) {
        console.log(`error in get method ${error}`);
        res.status(500).json({message: `error getting resources: ${error}`});
    }
});


//insert()
router.post('/', async (req, res) => {
    try {
        const newResource = await Projects.insert(req.body)
        res.status(200).json(newResource);
    } catch (error) {
        res.status(500).json(`error creating resource ${error}`)
    }
});

//update()
router.put('/:id', async (req, res) => {
    try {
        const resourceId = await Projects.get(req.params.id);
        if (resourceId) {
            const updated = await Projects.update(req.params.id, req.body);
            res.status(200).json(updated);
        } else {
            res.status(404).json({message: `resource not found`});
        }
    } catch (error) {
        res.status(500).json(`error updating resource ${error}`);
    }
});

//remove()
router.delete('/:id', async (req, res) => {
    try {
        const quantityDeleted = await Projects.remove(req.params.id);
        res.status(200).json(quantityDeleted);
    } catch (error) {
        res.status(500).json(`error removing resource: ${error}`);
    }
});


module.exports = router;