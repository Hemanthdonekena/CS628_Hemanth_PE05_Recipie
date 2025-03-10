import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        axios.get('https://zany-invention-g4567w4jvr5qh9r6-5000.app.github.dev/recipes')
        .then(res => setRecipes(res.data))
        .catch(err => console.log(err));
    }, []);
    return (
        <div className="container">
    <h1>Recipe List</h1>
    <div className="recipe-list">
    {recipes.map(recipe => (
        <div key={recipe._id} className="recipe-card">
        <Link to={`/recipes/${recipe._id}`}>{recipe.name}</Link>
        </div>
        ))}
</div>
<Link to="/add" className="link-button">Add Recipe</Link>
</div>
 );
}
export default RecipeList;
