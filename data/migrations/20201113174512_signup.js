exports.up = async function(knex) {
    await knex.schema.createTable("signUp", (table)=>{
        table.increments("id")
        
        table.integer("client_id")
            .notNull()
            .references("id") 
            .inTable("client")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")

        table.integer("classes_id")
            .notNull()
            .references("id") 
            .inTable("classes")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")

       

      })
      
};

exports.down = async function(knex) {
    knex.schema.dropTableIfExists("signUp")
  
};
