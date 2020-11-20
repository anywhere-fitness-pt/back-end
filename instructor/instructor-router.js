const express = require("express")
const bcrypt = require("bcryptjs")
const jwt=require("jsonwebtoken")
const db = require("./instructor-model")
const {insRestrict}=require("./ins-middleware")

const router = express.Router()





// ============working============//
router.get("/", async (req, res, next) => {
	try {
		const instroctor = await db.find()
        res.json(instroctor)
        
	} catch(err) {
		next(err)
	}
})

// ============working============//

router.post("/register", async (req, res, next) => {
	try {
        const { username,fullname, password } = req.body
		const instroctor = await db.findBy({ username}).first()

		if (instroctor) {
			return res.status(409).json({
				message: "Username is already taken",
			})
		}

		const newInstroctor = await db.add({
            username,
            fullname,
			password: await bcrypt.hash(password, 14),
		})

		res.status(201).json(newInstroctor)

	} catch(err) {
		next(err)
	}
})

// ============working============//

router.post("/login", async (req, res, next) => {
	try {
		const { username, password } = req.body
		const instroctor = await db.findBy({ username }).first()
		
		if (!instroctor) {
			return res.status(401).json({
				message: "Invalid Credentials",
			})
        }
        
        const passwordValid = await bcrypt.compare(password, instroctor.password)
        if (!passwordValid) {
			return res.status(401).json({
				message: "Invalid Credentials",
			})
        }
        
        const token = jwt.sign({
            instroctorId: instroctor.id,
			username:instroctor.username
			
		
		},process.env.JWT_SECRET)
		res.cookie("token", token)
		res.json({
		message: `Welcome ${instroctor.username}!`,
			
		})
        
	} catch(err) {
		next(err)
	}
})



// ============working============//

router.get("/:id/classes",insRestrict(), async (req, res, next) => {
	try {
		const instroctor = await db.findInsClasses(req.params.id)
		if(!instroctor){
			return res.status(404).json({
				message: "can not find",
			})
		}
        res.status(200).json(instroctor)
        
	} catch(err) {
		next(err)
	}
})

// |POST |  /api/instructor/:instructorId/classes 
router.post('/:instructorId/classes', insRestrict(), async (req, res, next) => {
    try{
        const classes = await db.addclasses(req.body)
	   
	res.status(201).json(classes)
    }catch(err){
        next(err)
    }
})

// working
router.put('/:instructorId/classes/:id', insRestrict(), async (req, res, next) => {
    try{
		console.log(req.body)
        const classes = await db.update(req.params.id, req.body)
    res.status(201).json(classes)
    }catch(err){

        next(err)
    }
})

// |DELETE |  /api/instructor/:instructorId/classes/:id insRestrict(),

router.delete('/:instructorId/classes/:id ',  async (req, res, next) => {
    try{
        const deleted = await db.remove(req.params.id)
        res.status(200).json(deleted)
    }catch(err){
        next(err)
    }
})
module.exports = router