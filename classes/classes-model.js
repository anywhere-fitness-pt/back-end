const db = require("../data/config")


function find() {
    return db("classes")
    
}
 

function findById(id) {
    return db("classes")
    .where({id})
    .first()
}


async function add(data) {
    return db("classes").insert(data)
        
}

 function findByCatId(categories_id) {
     return  db("classes").where({categories_id}).first()

}

function remove(id) {
    return db('Classes')
    .where({id})
    .del()

}
function update(changes, id) {
    return db('Classes')
    .where({id})
    .update(changes);

}


module.exports = {
    find,
    findById,
    add,
    remove,
    update,
    findByCatId
}