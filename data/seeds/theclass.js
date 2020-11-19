
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {instructor_id:2, categories_id:1, name:"Tantra ", description:"group work", intensity:"very Light", duration:"30 minutes",location:"Northgate", maxClassSize:10},
        {instructor_id:1, categories_id:2, name:"Swimming", description:"group work", intensity:"Light", duration:"45 minutes",location:"Seattle", maxClassSize:10},
        {instructor_id:2, categories_id:3, name:"Kids Zumba",description:"group work", intensity:"Light",duration:"30 minutes", location:"Everett", maxClassSize:10},
        {instructor_id:1, categories_id:4, name:"Weightlifting ",description:"private ", intensity:"Hard", duration:"1 hour",location:"Lynwood", maxClassSize:1},
        {instructor_id:2, categories_id:5, name:"Ballet Dance",description:"private lesson", intensity:"Light", duration:"30 minutes",location:"Millcreek", maxClassSize:1}
      ]);
    });
};
