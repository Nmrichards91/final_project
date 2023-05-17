import Type from './Type'
import Meal from './Meal'
import Difficulty from './Difficulty'
import Nutrition from './Nutrition'


const Recipe = (props) => {
  console.log(props.recipe.name)

  return ( 
    <div className="recipecard">
    <h2>{props.recipe.name}</h2>
      <img src={props.recipe.image} />
      <div className="components">
      {/* <div class="recipecard"> 
        <Type type={props.recipe.type} />
        <Meal meal={props.recipe.meal} />
        <Nutrition nutrition={props.recipe.nutrition} />
        <Difficulty difficulty={props.recipe.difficulty} />
    </div> */}
      </div>
      <div>
        <div className="subtitle">{props.recipe.subtitle}</div>
        <h3 clasNames="flavor">{props.recipe.flavor}</h3>
        <h3 className="time">Time: {props.recipe.time.hours}h{props.recipe.time.minutes}m</h3>
        <div className="recipescroll">
        <h4>Ingredients ↓</h4>
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
        <h4>Recipe</h4>
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
    </div>
    )
  } 

  export default Recipe