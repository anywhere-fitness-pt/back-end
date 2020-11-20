
exports.up = async function(knex) {
    await knex.schema.createTable("instructor", (table)=>{
        table.increments("id")
        table.text("fullname").notNull()
        table.text("username").notNull().unique()
		table.text("password").notNull()
      })

      await knex.schema.createTable("categories", (table)=>{
        table.increments("id")
        table.text("name").notNull().unique()
        table.text("description").notNull()
      })

      await knex.schema.createTable("classes", (table)=>{
        table.increments("id")
        table
            .integer("instructor_id")
            .references("id")
            .inTable("instructor")
            .onDelete("SET NULL")
            .onUpdate("CASCADE")
            .notNull()
        table
            .integer("categories_id").notNull()
            .references("id")
            .inTable("categories")
            .onDelete("SET NULL")
            .onUpdate("CASCADE")
            

        table.text("name")
            .notNull()
            .unique()

        table.text("description")
            .notNull()
            .defaultTo("cureent")

        table
            .text("intensity")

            table
            .text("duration")    
            

        table
            .time("time")
            .defaultTo("cureent")   

        table
            .date("date")
            .defaultTo(knex.raw("current_timestamp"))

        table
            .text("location")
            .defaultTo("cureent")  

            table
            .text("maxClassSize")
             


      })
};

exports.down = async function(knex) {
    knex.schema.dropTableIfExists("classes")
    knex.schema.dropTableIfExists("categories")
    knex.schema.dropTableIfExists("instructor")
  
};
