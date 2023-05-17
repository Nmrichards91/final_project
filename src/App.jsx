import './App.css'
import data from './recipes.json'
import Recipe from './components/Recipes'

const App = () => {

  return (
      <div>
      <h1 className="title">Rhowdy Chef</h1>
      <main>
      <div className="page">
      {data.recipes.map((recipe) => (
      <Recipe recipe={recipe}
        key={recipe.name}/> ))} 
      </div>
    </main>
      </div>

  )
}

export default App