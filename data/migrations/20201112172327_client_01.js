
exports.up = async function(knex) {
    await knex.schema.createTable("client", (table)=>{
        table.increments("id")
        table.text("username").notNull().unique()
		table.text("password").notNull()
      })

      await knex.schema.createTable("clientSignUp", (table)=>{
        table.increments("id")

        table.integer("client_id")
        .references("id") // creates the foreign key
        .inTable("client")
        .onDelete("SET NULL")
        .onUpdate("CASCADE")

        table.integer("price")
        .notNull()
        .defaultTo(3000)

      })
      
};

exports.down = async function(knex) {
    knex.schema.dropTableIfExists("client")
    knex.schema.dropTableIfExists("clientSignUp")
  
};
