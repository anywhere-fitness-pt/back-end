
exports.seed = async function(knex) {
  await knex("classes").del()
  await knex("classes").insert([

    {instructor_id:3, classList_id:1, name:"Poses", description:"group work"},
    {instructor_id:1, classList_id:2, name:"Swimming", description:"group work"},
    {instructor_id:2, classList_id:3, name:"ZumbaKids",description:"group work"},
    {instructor_id:1, classList_id:4, name:"Weightlifting",description:"group work"},
    {instructor_id:2, classList_id:5, name:"Jazz",description:"group work"}
  ])
};
