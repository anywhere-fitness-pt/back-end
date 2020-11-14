
exports.seed = async function(knex) {
  await knex("categories").truncate()
  await knex("categories").insert([
{name: 'yoga', description:"group"},
{name: 'Cardio', description:"group"},
{name: 'Zumba', description:"group"},
{name: 'Strength', description:"private"},
{name: 'Dance', description:"private"},
  ])
};
