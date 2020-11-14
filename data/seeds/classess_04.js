exports.seed = async function(knex) {
  await knex("classes").insert([
 
     {instructor_id:2, categories_id:1, name:"Tantra ", description:"group work", intensity:"very Light", location:"Northgate"},
     {instructor_id:1, categories_id:2, name:"Swimming", description:"group work", intensity:"Light", location:"Seattle"},
     {instructor_id:2, categories_id:3, name:"Kids Zumba",description:"group work", intensity:"Light", location:"Everett"},
     {instructor_id:1, categories_id:4, name:"Weightlifting ",description:"private ", intensity:"Hard", location:"Lynwood"},
     {instructor_id:2, categories_id:5, name:"Ballet Dance",description:"private lesson", intensity:"Light", location:"Millcreek"}
   ])
 };
