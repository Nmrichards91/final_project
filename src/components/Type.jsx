

const Type = (props) => {
  let colorVariable

  switch (props.recipe.type) {
    case 'Vegan':
      colorVariable = 'red'
      break
    case 'Vegetarian':
      colorVariable = 'green'
      break
    case 'Game':
      colorVariable = 'blue'
      break
    default:
      colorVariable = 'black'
  }


  return ( 
    <div className="types" style ={{backgroundColor: colorVariable}}>
        {props.recipe.type}
    </div>
  )
  } 

  export default Type