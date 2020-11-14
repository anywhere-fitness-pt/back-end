

exports.seed = async function(knex) {
	await knex("instructor").truncate()
	await knex("instructor").insert([
		{ id: 1, fullname:"ksech1 Isaac",username: "kasi1", password: 123},
		{ id: 2, fullname:"ksech2 Isaac",username: "kasi2", password: 123},
	])
}
