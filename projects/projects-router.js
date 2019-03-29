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


// //getById()
// router.get();

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


// //insert()
// router.post();

// //update()
// router.put();

// //remove()
// router.delete();


module.exports = router;