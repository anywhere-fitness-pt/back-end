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

 function clientClaSignUp(cls) {
     return  db("signUp")
            .insert(cls)

}


function findClientClasses(id) {
    return db("signUp as s")
    .innerJoin("classes as c", "c.id", "s.classes_id")
    .innerJoin("client as u", "u.id", "s.client_id ")
    .select(
"s.client_id as clientId",
"c.id as classId",
"c.categories_id as categoriesId ",
"c.description",
"c.intensity",
"c.time",
"c.date",
"c.location",
"c.maxClassSize",
    )
    .where( "c.id", id );
}

module.exports = {
    find,
    findBy,
    findById,
    add,
    findClientClasses,
    clientClaSignUp
}