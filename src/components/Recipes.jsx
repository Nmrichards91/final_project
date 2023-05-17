import Type from './Type'
import Meal from './Meal'
import Difficulty from './Difficulty'
import Nutrition from './Nutrition'


const Recipe = (props) => {
  console.log(props.recipe.name)

  return ( 
    <div className="app">
    <h1>{props.recipe.name}</h1>
      <img src={props.recipe.image} />
      <div class="recipecard"> 
        <Type type={props.recipe.type} />
        <Meal meal={props.recipe.meal} />
        <Nutrition nutrition={props.recipe.nutrition} />
        <Difficulty difficulty={props.recipe.difficulty} />
    </div>
      <div>
        <h2>{props.recipe.subtitle}</h2>
        <h3>{props.recipe.flavor}</h3>
        <h4>{props.recipe.time.hours}:{props.recipe.time.minutes}</h4>
        <p class="ingredient">{props.recipe.ingredients.ing1}</p>
        <p class="ingredient">{props.recipe.ingredients.ing2}</p>
        <p class="ingredient">{props.recipe.ingredients.ing3}</p>
        <p class="ingredient">{props.recipe.ingredients.ing4}</p>
        <p class="ingredient">{props.recipe.ingredients.ing5}</p>
        <p class="ingredient">{props.recipe.ingredients.ing6}</p>
        <p class="ingredient">{props.recipe.ingredients.ing7}</p>
        <p class="ingredient">{props.recipe.ingredients.ing8}</p>
        <p class="ingredient">{props.recipe.ingredients.ing9}</p>
        <p class="ingredient">{props.recipe.ingredients.ing10}</p>
        <p class="ingredient">{props.recipe.ingredients.ing11}</p>
        <p class="ingredient">{props.recipe.ingredients.ing12}</p>
        <p class="ingredient">{props.recipe.ingredients.ing13}</p>
        <p class="ingredient">{props.recipe.ingredients.ing14}</p>
        <p class="ingredient">{props.recipe.ingredients.ing15}</p>
        <p class="step">{props.recipe.recipe.step1}</p>
        <p class="step">{props.recipe.recipe.step2}</p>
        <p class="step">{props.recipe.recipe.step3}</p>
        <p class="step">{props.recipe.recipe.step4}</p>
        <p class="step">{props.recipe.recipe.step5}</p>
        <p class="step">{props.recipe.recipe.step6}</p>
        <p class="step">{props.recipe.recipe.step7}</p>
        <p class="step">{props.recipe.recipe.step8}</p>
        <p class="step">{props.recipe.recipe.step9}</p>
        <p class="step">{props.recipe.recipe.step10}</p>
        <p class="step">{props.recipe.recipe.step11}</p>
        <p class="step">{props.recipe.recipe.step12}</p>
        <p class="step">{props.recipe.recipe.step13}</p>
        <p class="step">{props.recipe.recipe.step14}</p>
        <p class="step">{props.recipe.recipe.step15}</p>
      </div>
    </div>
    )
  } 

  export default Recipe