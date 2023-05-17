import Type from './Type'
import Meal from './Meal'


const Recipe = (props) => {
  console.log(props.recipe.name)

  return ( 
    <div className="app">
    <h1>{props.recipe.name}</h1>
      <img src={props.recipe.image} />
      <div>
        <h2>{props.recipe.subtitle}</h2>
        <h4>{props.recipe.nutrition}</h4>
        <h4>{props.recipe.flavor}</h4>
        <h4>{props.recipe.difficulty}</h4>
        <h4>{props.recipe.time.hours}:{props.recipe.time.minutes}</h4>
        <h4>{props.recipe.ingredients.ing1}</h4>
        <h4>{props.recipe.recipe.step1}</h4>
      </div>
        <div className="types"> 
        <Type type={props.recipe.type} />
        <Meal meal={props.recipe.meal} />

    </div>
    </div>
    )
  } 

  export default Recipe