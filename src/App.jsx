import './App.css'
import data from './recipes.json'
import Recipe from './components/Recipe'

const App = () => {

  return (
      <div>
      <h1 classNameName="title">Rhowdy Chef</h1>
      <main>
      <div classNameName="page">
      {data.recipes.map((recipe) => (
      <Recipe recipe={recipe}
        key={recipe.name}/> ))} 
      </div>
    </main>
      </div>

  )
}

export default App