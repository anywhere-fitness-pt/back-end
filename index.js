
const express = require("express")
const clientsRouter = require("./clients/client-router")
const cookieParser=require("cookie-parser")
const instroctors = require("./instructor/instructor-router")
const classes = require("./classes/classes-router")

const server = express()
const port = process.env.PORT || 5000

server.use(express.json())
server.use(cookieParser())
server.use("/api/clients",clientsRouter)
server.use("/api/instructor",instroctors)
server.use("/api/classes",classes)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})
server.listen(port, () => {
	console.log(` Running at http://localhost:${port}`)
})