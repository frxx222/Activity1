# Activity1

Group Name: JJE 

Group Members:
Jayvee Enobay
John Paul Mangui
Eliezer Mangui

Overview:
The Recipe Sharing API simplifies recipe management, allowing users to easily view, add, edit, and delete recipes. With endpoints, users can post new recipes, retrieve existing ones, and remove unwanted entries. This user-friendly platform streamlines cooking experiences for all skill levels, making it effortless to organize and access culinary creations.

Features
•	View all recipes
•	View a single recipe by its ID/Title
•	Add a new recipe
•	Edit an existing recipe
•	Delete a recipe

Dependencies
•	Express.js: Web framework for Node.js
•	Joi: Object schema validation library for JavaScript

API Endpoints
Get All Recipes:
•	URL: http://localhost:3000/api/recipes
•	Method: GET
•	Description: Retrieves all recipes stored.
•	Response: An array of recipe.
Get Recipe by ID:
•	URL: http://localhost:3000/api/recipes/{id of the recipe}
•	Method: GET
•	Description: Retrieves a single recipe by its ID.
•	Response: The recipe object corresponding to the provided ID.
Get Recipe by Title:
•	URL: http://localhost:3000/api/recipes/title/{Title of the recipe}
•	Method: GET
•	Description: Retrieves a single recipe by its Title.
•	Response: The recipe object corresponding to the provided Title.
Add New Recipe
•	URL: http://localhost:3000/api/recipes
•	Method: POST
•	Description: Adds a new recipe to the database.
•	Request Body: JSON object with title, ingredients, and instructions fields.
•	Response: The newly added recipe object.
Update Recipe
•	URL: http://localhost:3000/api/recipes/api/recipes/{id of the recipe}
•	Method: PUT
•	Description: Updates an existing recipe with the provided ID.
•	Request Body: JSON object with title, ingredients, and instructions fields.
•	Response: The updated recipe.
Delete Recipe
•	URL: http://localhost:3000/api/recipes/api/recipes/{id of the recipe}
•	Method: DELETE
•	Description: Deletes the recipe with the provided ID.
•	Response: The deleted recipe.
