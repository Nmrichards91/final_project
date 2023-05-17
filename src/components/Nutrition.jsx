

const Nutrition = (props) => {
  let colorVariable

  switch (props.recipe.nutrition) {
    case 'Healthy':
      colorVariable = 'green'
      break
  default:
      colorVariable = ''
  }


  return ( 
    <div className="nutrition" style ={{backgroundColor: colorVariable}}>
        {props.recipe.nutrition}
    </div>
  )
  } 

  export default Nutrition