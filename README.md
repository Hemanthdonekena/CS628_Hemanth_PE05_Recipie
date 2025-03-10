# CS628_Hemanth_PE05_Recipie

**input**
The user inputs data related to a recipe, including the recipe's name, ingredients, instructions, and additional details such as preparation time and servings. This data is entered through an interactive form on the web interface of the "Recipe Finder" app.

**Process**
Once the user submits the recipe information, the application processes the data by sending a POST request to the server. The backend, powered by Node.js and Express, takes the data and stores it in the MongoDB Atlas database. The recipe details are stored in a recipe model, which includes fields such as name, ingredients, and instructions. When clicks on a recipe, a GET request is sent to fetch the specific recipe’s details. Updates and deletions can also be made through PUT and DELETE requests.

**Output**
The output is displayed in the form of a Recipe List on the front-end, showing all stored recipes. Clicking a recipe name redirects the user to the detailed view of that recipe. Additionally, users can view updated information and see the list dynamically change after adding, updating, or deleting recipes.

