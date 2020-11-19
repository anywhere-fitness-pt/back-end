const express = require('express');
// const bcrypt = require("bcryptjs"
const db=require("./classes-model")
const {cliRestrict}=require("../clients/restrict")
const {insRestrict}=require("../instructor/ins-middleware")


const router = express.Router()
 
// ============workes============//
router.get('/classes',async (req, res, next) => {
    try{
        const classes = await db.find()
        res.json(classes)  
    
    }catch(err){
        next(err)
    }
})


// ============workes============//

router.get('/:classId',insRestrict(), async (req, res, next) => {
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
router.get('/categories/:categoriesId',insRestrict(), async (req, res, next) => {
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

router.post('/',insRestrict(), async (req, res, next) => {
    try{
        const classes = await db.add(req.body)
        
        if (!classes) {
			return res.status(404).json({
				message: "please add class",
			})
        }
       
    res.status(201).json(classes)
    }catch(err){
        next(err)
    }
})

router.put('/:id',insRestrict(), async (req, res, next) => {
    try{
      const classes = await db.update(req.params.id, req.body)
    res.status(201).json(classes).end()
    }catch(err){
        console.log(err)
        next(err)
    }
})

router.delete('/:id',insRestrict(), async (req, res, next) => {
    try{
        const deleted = await db.remove(req.params.id)
        res.status(200).json(deleted).end()
    }catch(err){
        next(err)
    }
})


module.exports = router