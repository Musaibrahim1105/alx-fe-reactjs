import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from '../components/recipeStore';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(id))
  );
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  const handleDelete = () => {
    deleteRecipe(recipe.id);
    navigate('/');
  };

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <button onClick={handleDelete}>Delete Recipe</button>
      <EditRecipeForm recipe={recipe} />
    </div>
  );
};

export default RecipeDetails;
