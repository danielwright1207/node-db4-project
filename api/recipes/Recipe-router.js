const express = require('express')
const router = express.Router()
const Recipe = require('./Recipe-model')

router.get('/', async (req, res, next) =>{
    try{
        const recipe = await Recipe.find()
        res.status(200).json(recipe)
    }catch(err) {
        next(err)
    }
})

router.get('/:id',async (req, res, next)=> {
    try{
    const recipeById = await Recipe.findById(req.params.id)
res.status(200).json(recipeById)
    }catch (err){
        next(err) 
    }
})
router.get('/:id/steps',async (req, res, next)=> {
    try{
    const recipeSteps = await Recipe.findSteps(req.params.id)
res.status(200).json(recipeSteps)
    }catch (err){
        next(err) 
    }
})

module.exports = router