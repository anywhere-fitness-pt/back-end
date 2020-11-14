exports.up = async function(knex) {
    await knex.schema.createTable("client", (table)=>{
        table.increments("id")
        table.text("fullname").notNull()
        table.text("username").notNull().unique()
        table.text("password").notNull()
      })     
};

exports.down = async function(knex) {
    knex.schema.dropTableIfExists("client")

  
};
