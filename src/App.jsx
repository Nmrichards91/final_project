import './App.css'
import recipeArray from './recipes.json'
import Recipe from './components/Recipes'

const App = (props) => {

  return (
      <div>
      <h1 className="title">Rhowdy Chef</h1>
      <main>
      <div className="recipecard">
      {recipeArray.map((recipe) => (
      <Recipe recipe={recipe}
        key={recipe.name}/> ))} 
      </div>
    </main>
      </div>

  )
}

export default App