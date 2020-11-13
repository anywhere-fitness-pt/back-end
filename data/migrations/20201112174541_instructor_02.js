
exports.up = async function(knex) {
    await knex.schema.createTable("instructor", (table)=>{
        table.increments("id")
        table.text("username").notNull().unique()
		table.text("password").notNull()
      })

      await knex.schema.createTable("classList", (table)=>{
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
            .integer("classList_id").notNull()
            .references("id")
            .inTable("classList")
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
            .time("time")
            .defaultTo("cureent")   

        table
            .date("date")
            .defaultTo(knex.raw("current_timestamp"))

        table
            .text("location")
            .defaultTo("cureent")  
             


      })
};

exports.down = async function(knex) {
    knex.schema.dropTableIfExists("classes")
    knex.schema.dropTableIfExists("classList")
    knex.schema.dropTableIfExists("instructor")
  

};
