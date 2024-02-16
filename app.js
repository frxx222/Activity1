const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());

const typeOfRecipes = [
  {
    id: 1,
    title: 'Manggo Grahams',
    ingredients: ['Mango', 'Graham', 'Milk'],
    instructions: 'Put that mango to graham',
  },
  {
    id: 2,
    title: 'Adobo',
    ingredients: ['Chicken', 'Soy Sauce', 'Vinegar'],
    instructions: 'Put all ingredients together',
  },
  {
    id: 3,
    title: 'Sinigang',
    ingredients: ['Pork', 'Tomato', 'Tamarind', 'Vegetables'],
    instructions: 'Boil the pork, after that add the other ingredients',
  }
];

// Get all recipes
app.get('/api/recipes', (req, res) => {
  res.send(typeOfRecipes);
});

// Get recipe by ID
app.get('/api/recipes/:id', (req, res) => {
  const recipe = typeOfRecipes.find((c) => c.id === parseInt(req.params.id));
  if(!recipe)
    return res.status(404).send('The recipe was not found.');
  res.send(recipe);
});

// Get recipe by title
app.get('/api/recipes/title/:title', (req, res) => {
  const recipe = typeOfRecipes.find((c) => c.title.toLowerCase() === req.params.title.toLowerCase());
  if(!recipe)
    return res.status(404).send('The recipe was not found.');
  res.send(recipe);
});

// Add new recipe
app.post('/api/recipes', (req, res) => {
  // Validation for the user input
  if(!req.body.title || req.body.title.length < 3){
    return res.status(400).send('Title is required and should be a minimum of 3 characters.');
  }
  const newRecipe = {
    id: typeOfRecipes.length + 1,
    title: req.body.title,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
  };
  typeOfRecipes.push(newRecipe);
  res.send(newRecipe);
});

// Edit a recipe
app.put('/api/recipes/:id', (req, res) => {
  const recipe = typeOfRecipes.find((c) => c.id === parseInt(req.params.id));
  if(!recipe)
    return res.status(404).send('The recipe with the given id was not found.');

  recipe.title = req.body.title;
  recipe.ingredients = req.body.ingredients;
  recipe.instructions = req.body.instructions;
  res.send(recipe);
});
// Get recipe by title
app.put('/api/recipes/title/:title', (req, res) => {
  const recipe = typeOfRecipes.find((c) => c.title.toLowerCase() === req.params.title.toLowerCase());
  if(!recipe)
    return res.status(404).send('The recipe with the given title was not found.');
  
  recipe.title = req.body.title;
  recipe.ingredients = req.body.ingredients;
  recipe.instructions = req.body.instructions;
  res.send(recipe);
});

// Delete a recipe
app.delete('/api/recipes/:id', (req, res) => {
  const recipe = typeOfRecipes.find((c) => c.id === parseInt(req.params.id));
  if(!recipe)
    return res.status(404).send('The recipe with the given id was not found.');

  const index = typeOfRecipes.indexOf(recipe);
  typeOfRecipes.splice(index, 1);

  res.send(recipe);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}...`);
});
