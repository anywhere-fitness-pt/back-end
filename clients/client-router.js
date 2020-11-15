const express = require("express")
const bcrypt = require("bcryptjs")
const jwt=require("jsonwebtoken")
const db = require("../clients/clients-model")

const router = express.Router()

// we need to add restriction
router.get("/", async (req, res, next) => {
	try {
		const clients = await db.find()
        res.json(clients)
        
	} catch(err) {
		next(err)
	}
})

// we need to add restriction
router.post("/register", async (req, res, next) => {
	try {
        const { username,fullname, password } = req.body
		const client = await db.findBy({ username }).first()

		if (client) {
			return res.status(409).json({
				message: "Username is already taken",
			})
		}

		const newUser = await db.add({
            username,
            fullname,
			password: await bcrypt.hash(password, 14),
		})

		res.status(201).json(newUser)

	} catch(err) {
		next(err)
	}
})

// we need to add restriction
router.post("/login", async (req, res, next) => {
	try {
		const { username, password } = req.body
		const client = await db.findBy({ username }).first()
		
		if (!client) {
			return res.status(401).json({
				message: "Invalid Credentials",
			})
        }
        
        const passwordValid = await bcrypt.compare(password, client.password)
        if (!passwordValid) {
			return res.status(401).json({
				message: "Invalid Credentials",
			})
        }
        
        const token = jwt.sign({
            clientId: client.id,
            username:client.username
		},process.env.JWT_SECRET)
		res.cookie("token", token)
		res.json({
		message: `Welcome ${client.username}!`,
			
		})
        
	} catch(err) {
		next(err)
	}
})

router.get("/:id/classes", async (req, res, next) => {
	try {
		const clients = await db.findClientClasses(req.params.id)
        res.json(clients)
        
	} catch(err) {
		next(err)
	}
})

// we need to add restriction
router.post("/:client_id/classes/signUp/:class_id", async (req, res, next) => {
	try {
        const signUp={ 
            client_id:req.params.clientId,
            classes_id:req.params.classId,
        }
		const classes = await db.clientClaSignUp(signUp)
        res.status(201).json(classes)
        
	} catch(err) {
		next(err)
	}
})


module.exports = router