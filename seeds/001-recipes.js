
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};





// {
//   "recipe_name": "Spaghetti Bolognese",
//   "steps": [
//     {
//       "step_number": 1,
//       "step_instructions": "Put a large saucepan on a medium heat",
//     },
//     {
//       "step_number": 2,
//       "step_instructions": "Mix eggs and ham",
//       "ingredients": [
//         { "ingredient_id": 27, "quantity": 2 },
//         { "ingredient_id": 48, "quantity": 0.1 }
//       ]
//     },
//   ]
// }