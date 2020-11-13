
exports.seed = async function(knex) {
  await knex("classList").del()
  await knex("classList").insert([
    {name: 'yoga', description:"group"},
{name: 'Cardio', description:"group"},
{name: 'Zumba', description:"group"},
{name: 'Strength', description:"group"},
{name: 'Dance', description:"group"},
  ])
};


