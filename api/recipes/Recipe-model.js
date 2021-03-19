const db = require('../../db-config')
function find(){
return db('recipes')
}
function findById(recipe_id){
return db('recipe_steps as r' )
.join('steps as st', 'r.ingredient_id', 'st.step_id')
.where('recipe_id', recipe_id)
.select('ingredient_name as ingredient', 'quantity as Quantity')
}
function getSteps(recipeId){
    return db('steps as st')
    .join('recipes as r', 'st.recipe_id', 'st.ingredient_id')
    .where('r.recipe_id', recipeId)
    .select('step_number as Step', 'step_instruction as Instruction')
    .orderBy('step_number')
}
module.exports = {
    findById,
    find,
    getSteps
}