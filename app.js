const Joi = require('joi');
const express = require('express');
const app = express();


app.use(express.json());

const typeOfRecipes = [
  {
    id: 1,
    title: 'Manggo Grahams',
    categories: 'Dessert',
    ingredients: ['Mango', 'Graham', 'Milk'],
    instructions: 'Put that mango to graham',
  },
  {
    id: 2,
    title: 'Adobo',
    categories: 'Dinner',
    ingredients: ['Chicken', 'Soy Sauce', 'Vinegar'],
    instructions: 'Put all ingredients together',
  },
  {
    id: 3,
    title: 'Scramble Egg',
    categories: 'Breakfast',
    ingredients: ['Egg', 'salt', 'oil', ],
    instructions: 'open the egg the scramble it then cook it',
  }
];
// users
const users = [];
// viewing users
app.get('/api/users', (req, res) => {
  res.send(users);
});
// user registration
app.post('/api/registration', (req, res) => {
  if(!req.body.name || req.body.name.length < 3){
    return res.status(400).send('name is required and should be a minimum of 3 characters.');
  }
  const newUsers = {
    id: users.length + 1,
    name: req.body.name,
    password: req.body.password,
  };
  users.push(newUsers);
  
  res.redirect('/api/recipes');
});


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
    categories: req.body.categories,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
  };
  typeOfRecipes.push(newRecipe);
  res.send(newRecipe);
  res.render(typeOfRecipes);
});

// Edit a recipe
app.put('/api/recipes/:id', (req, res) => {
  const recipe = typeOfRecipes.find((c) => c.id === parseInt(req.params.id));
  if(!recipe)
    return res.status(404).send('The recipe with the given id was not found.');

  recipe.title = req.body.title;
  recipe.categories = req.body.categories;
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
  recipe.categories = req.body.categories;
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
