const db = require("../data/config")

function find() {
    return db("client")
    .select("id", "username")
}

function findBy(filter) {
	return db("client")
        .select("id", "username", "password")
        
		.where(filter)
}  

function findById(id) {
    return db("client")
    .select("id", "username")
    .where({id})
    .first()
}


async function add(data) {
    const [id] = await db("client").insert(data)
     return findById(id)  
}

async function clientClasses(id) {
    const clientsignUp = await db("signUp")
    console.log(clientsignUp)

    return db("classesas cl")
    .join ("signUp as su","su.classes_id", "cl.id")
    .select(
"su.client_id as clientId",
"cl.id as classId",
"cl.categories_id as categoriesId ",
"cl.name className",
"cl.description",
"cl.intensity",
"cl.time",
"cl.date",
"cl.location",
"cl.maxClassSize",
    )
    .where({ client_id: id });
}

module.exports = {
    find,
    findBy,
    findById,
    add,
    clientClasses
}