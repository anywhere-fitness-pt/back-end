const express = require("express")
const clientsRouter = require("./clients/client-router")
cookieParser=require("cookie-parser")
const instroctors = require("./instroctor/instroctor-router")
const classes = require("./classes/classes-router")




const server = express()
const port = 4000
server.use(express.json())
server.use("/api/clients",clientsRouter)
server.use("/api/instroctor",instroctors)
server.use("/api/classes",classes)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})
server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})