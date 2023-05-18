import Type from './Type'
import Meal from './Meal'
import Difficulty from './Difficulty'
import Nutrition from './Nutrition'
import Flavor from './Flavor'
import Hours from './Hours'
import Minutes from './Minutes'

var aDiv = document.getElementById("testScroll");

function changeWidth() 
{
    var scrollVal = window.pageYOffset;
    var scrollSlow  = (scrollVal / 4);
    
    //Changing CSS Width
    aDiv.style.width = Math.min(Math.max(scrollSlow, 20), 100) + "%";
}

window.addEventListener('scroll', function() 
{
    requestAnimationFrame(changeWidth);
}, false);

const Recipe = (props) => {

  return ( 
    <div className="recipecard">
    <h2>{props.recipe.name}</h2>
    <img src={props.recipe.image} />
      <div className="center">
        <div className="subtitle">{props.recipe.subtitle}</div>
        <br></br>
        <div className="components">
        <Nutrition nutrition={props.recipe.nutrition} />
        <Type type={props.recipe.type} />
        <Flavor flavor={props.recipe.flavor} />
      </div> 
      <br></br>
        <div className="timedifficulty">
          <h3 className="difficulty">Difficulty:&nbsp;<Difficulty difficulty={props.recipe.difficulty} /></h3>
          <h3 className="time">Time:&nbsp;<Hours hours={props.recipe.time.hours} /><Minutes minutes={props.recipe.time.minutes} /></h3>
        </div>
        <div className="meal">
          <h3 className="meal">Meal: &nbsp;<Meal meal={props.recipe.meal} /></h3>
        </div>
        <div className="recipescroll" id="testScroll">
        <h4>↓ RECIPE ↓</h4>
        <br></br>
        <h5>INGREDIENTS</h5>
          <p className="ingredient">{props.recipe.ingredients.ing1}</p>
          <p className="ingredient">{props.recipe.ingredients.ing2}</p>
          <p className="ingredient">{props.recipe.ingredients.ing3}</p>
          <p className="ingredient">{props.recipe.ingredients.ing4}</p>
          <p className="ingredient">{props.recipe.ingredients.ing5}</p>
          <p className="ingredient">{props.recipe.ingredients.ing6}</p>
          <p className="ingredient">{props.recipe.ingredients.ing7}</p>
          <p className="ingredient">{props.recipe.ingredients.ing8}</p>
          <p className="ingredient">{props.recipe.ingredients.ing9}</p>
          <p className="ingredient">{props.recipe.ingredients.ing10}</p>
          <p className="ingredient">{props.recipe.ingredients.ing11}</p>
          <p className="ingredient">{props.recipe.ingredients.ing12}</p>
          <p className="ingredient">{props.recipe.ingredients.ing13}</p>
          <p className="ingredient">{props.recipe.ingredients.ing14}</p>
          <p className="ingredient">{props.recipe.ingredients.ing15}</p>
          <p className="ingredient">{props.recipe.ingredients.ing16}</p>
          <p className="ingredient">{props.recipe.ingredients.ing17}</p>
          <p className="ingredient">{props.recipe.ingredients.ing18}</p>
          <br></br>
        <h5>INSTRUCTIONS</h5>
          <div className="recipe">
          <p className="step">{props.recipe.recipe.step1}</p>
          <p className="step">{props.recipe.recipe.step2}</p>
          <p className="step">{props.recipe.recipe.step3}</p>
          <p className="step">{props.recipe.recipe.step4}</p>
          <p className="step">{props.recipe.recipe.step5}</p>
          <p className="step">{props.recipe.recipe.step6}</p>
          <p className="step">{props.recipe.recipe.step7}</p>
          <p className="step">{props.recipe.recipe.step8}</p>
          <p className="step">{props.recipe.recipe.step9}</p>
          <p className="step">{props.recipe.recipe.step10}</p>
          <p className="step">{props.recipe.recipe.step11}</p>
          <p className="step">{props.recipe.recipe.step12}</p>
          <p className="step">{props.recipe.recipe.step13}</p>
          <p className="step">{props.recipe.recipe.step14}</p>
          <p className="step">{props.recipe.recipe.step15}</p>
          </div>
          </div>

      </div>
    </div>
    )
  } 

  export default Recipe