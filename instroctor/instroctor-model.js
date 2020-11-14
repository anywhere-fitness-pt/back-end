const db = require("../data/config")


function find() {
    return db("instructor")
    .select("id", "username")
}

function findBy(filter) {
	return db("instructor")
        .select("id", "username", "password")
        
		.where(filter)
}  

function findById(id) {
    return db("instructor")
    .select("id", "username")
    .where({id})
    .first()
}


async function add(data) {
    const [id] = await db("client").insert(data)
     return findById(id)  
}

module.exports = {
    find,
    findBy,
    findById,
    add
}