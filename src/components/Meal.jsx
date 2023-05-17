

const Meal= (props) => {
  let colorVariable

  switch (props.recipe.meal) {
    case 'Breakfast':
      colorVariable = 'red'
      break
    case 'Lunch & Dinner':
      colorVariable = 'green'
      break
    case 'Dessert':
      colorVariable = 'blue'
      break
  default:
      colorVariable = 'white'
  }


  return ( 
    <div className="types" style ={{backgroundColor: colorVariable}}>
        {props.recipe.meal}
    </div>
  )
  } 

  export default Type