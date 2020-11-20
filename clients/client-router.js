const express = require("express")
const bcrypt = require("bcryptjs")
const jwt=require("jsonwebtoken")
const db = require("../clients/clients-model")
const {cliRestrict}=require("../clients/restrict")

const router = express.Router()




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

// ============working============//
// clint could find classes list
router.get("/classes", cliRestrict(), async (req, res, next) => {
	try {
		const clients = await db.find()
        res.json(clients)
        
	} catch(err) {
		next(err)
	}
})

// !!!!=========am getting null???=========!!!!//

router.post("/:client_id/classes/signUp/:class_id", cliRestrict(), async (req, res, next) => {
	console.log(signUp)
	try {
		
        const signUp={ 
            client_id:req.params.clientId,
			classes_id:req.params.classId,	
		}
		const classes = await db.clientClaSignUp(signUp)
		if(!classes){
		return res.status(404).json({message:"please enter required field"})
		}
			res.status(200).json({message:"class created"})
		 
	} catch(err) {
		next(err)
	}
})


// !!!!=========its working empty r[] since sign up is null yet=========!!!!//
router.get("/:id/classes", cliRestrict(), async (req, res, next) => {
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