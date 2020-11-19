const express = require("express")
const bcrypt = require("bcryptjs")
const jwt=require("jsonwebtoken")
const db = require("../clients/clients-model")

const router = express.Router()

// ============working============//


router.get("/", async (req, res, next) => {
	try {
		const clients = await db.find()
        res.json(clients)
        
	} catch(err) {
		next(err)
	}
})


// ============working============//

router.post("/register", async (req, res, next) => {
	try {
        const { fullname,username, password } = req.body
		const client = await db.findBy({ username }).first()

		if (client) {
			return res.status(409).json({
				message: "Username is already taken",
			})
		}

		const newClient = await db.add({
           
            fullname,
            username,
			password: await bcrypt.hash(password, 14),
		})

		res.status(201).json(newClient)

	} catch(err) {
		next(err)
	}
})



// ============working============//

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

// !!!!=========notworkig yet=========!!!!//

router.post("/:client_id/classes/signUp/:class_id", async (req, res, next) => {
	try {
        const signUp={ 
            client_id:req.params.clientId,
            classes_id:req.params.classId,
        }
		const classes = await db.clientClaSignUp(signUp)
		if(classes.length > 0){
		res.status(404).json({message:"please enter required field"})
		}else{
			res.status(200).json({message:"class created"})
		} 
        
	} catch(err) {
		next(err)
	}
})


// !!!!=========notworkig yet=========!!!!//
router.get("/:id/classes", async (req, res, next) => {
	try {
		const clients = await db.findClientClasses(req.params.id)
        if (!clients) {
			return res.status(404).json({
				message: "classes not found",
			})
		}
		res.json(clients)
	} catch(err) {
		next(err)
	}
})

module.exports = router