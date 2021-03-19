
exports.up = function(knex) {
  return knex.shema
  .createTable('recipes', tb =>{
tb.increment('recipe_id')
tb.string('recipe_name').notNullable()
  })
  .createTable('steps', tb =>{
tb.increment('step_id')
tb.integer('step_number').notNullable()
tb.text('step_instructions').notNullable()
tb.integer('recipe_id').references('recipe_id').notNullable()
  })
  .createTable('step_ingredients',tb =>{
tb.increment('step_ingredients_id')
tb.integer('step_id').notNullable().unsigned().references('recipe_id').onDelete("CASCADE")
tb.integer('ingredient_id').references('recipe_id').notNullable()
tb.float('quantity').notNullable()
  })
  .createTable('ingredients', tb=>{
tb.increment('ingredient_id').references('recipe_id').notNullable()
tb.string('ingredient_name').notNullable()
  })
};

exports.down = function(knex) {
    return knex.shema
  .dropTableIfExist('ingredients')
  .dropTableIfExist('step_ingredients')
  .dropTableIfExist('steps')
  .dropTableIfExist('recipes')
};
