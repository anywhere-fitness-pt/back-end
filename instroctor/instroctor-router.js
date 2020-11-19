const express = require("express")
const bcrypt = require("bcryptjs")
const jwt=require("jsonwebtoken")
const ins_db = require("../instroctor/instroctor-model")
const {restrict, passwordValid}=require("../instroctor/ins-middleware")

const router = express.Router()





// ============working============//
router.get("/", async (req, res, next) => {
	try {
		const instroctor = await ins_db.find()
        res.json(instroctor)
        
	} catch(err) {
		next(err)
	}
})



// ============working============//

router.post("/register", async (req, res, next) => {
	try {
        const { username,fullname, password } = req.body
		const instroctor = await ins_db.findBy({ username}).first()

		if (instroctor) {
			return res.status(409).json({
				message: "Username is already taken",
			})
		}

		const newInstroctor = await ins_db.add({
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
		const instroctor = await ins_db.findBy({ username }).first()
		
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

router.get("/:id/classes", async (req, res, next) => {
	try {
		const instroctor = await ins_db.findInsClasses(req.params.id)
        res.status(200).json(instroctor)
        
	} catch(err) {
		next(err)
	}
})

// |POST |  /api/instructor/:instructorId/classes 

// |PUT |  /api/instructor/:instructorId/classes/:id 

// |DELETE |  /api/instructor/:instructorId/classes/:id 

module.exports = router