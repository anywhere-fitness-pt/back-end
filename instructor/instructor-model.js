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
    const [id] = await db("instructor").insert(data)
     return findById(id)  
}

async function addclasses(data) {
    const [id] = await db("classes").insert(data)
     return findById(id)  
}

function remove(id) {
    return db('Classes')
    .where({id})
    .del()

}

function update(id,changes) {
    return db('classes')
    .where({id})
    .update(changes)
}

function findInsClasses(id) {
    return db("classes as c")
    .join("instructor as i", "c.instructor_id", "i.id")

    .select('c.id as classId', 
            'i.id as instructorId', 
            'c.name as className',
             'i.fullname as instructorName',
             'c.description',
             'c.time',
             'c.date',
             'c.location',
             'c.duration',
             'c.maxClassSize',
             'c.intensity',
            
             )
    .where({ instructor_id: id })
    .first()
}

module.exports = {
    find,
    findBy,
    findById,
    add,
    findInsClasses,
    update,
    remove,
    addclasses
}