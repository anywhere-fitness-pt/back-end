const express = require('express');
// const bcrypt = require("bcryptjs"
const db=require("./classes-model")

const router = express.Router()
 
// ============workes============//
router.get('/', async (req, res, next) => {
    try{
        const classes = await db.find()
        res.json(classes)  
    
    }catch(err){
        next(err)
    }
})


// ============workes============//

router.get('/:classId', async (req, res, next) => {
    try{
        const classes = await db.findById(req.params.classId)
        if (!classes) {
			return res.status(404).json({
				message: "classes not found",
			})
		}
    res.json(classes)
    }catch(err){
        next(err)
    }
})



// ============working============//
router.get('/categories/:categoriesId', async (req, res, next) => {
    try{
        const classList = await db.findByCatId(req.params.categoriesId)
        if (!classList) {
			return res.status(404).json({
				message: "classList not found",
			})
		}
    res.json(classList)
    }catch(err){
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try{
        const classes = await db.add(req.body)
        
        if (classes.length > 0) {
			return res.status(404).json({
				message: "please add class",
			})
        }
       
    res.status(201).json(classes)
    }catch(err){
        next(err)
    }
})

// router.put('/:id', async (req, res, next) => {
//     try{
//         const classes = await db.update(req.params.id, req.body)
      
//     }catch(err){
//         next(err)
//     }
// })

// router.delete('/:id', async (req, res, next) => {
//     try{
//         const classes = await db.remove(req.params.id)
      
//     }catch(err){
//         next(err)
//     }
// })


module.exports = router