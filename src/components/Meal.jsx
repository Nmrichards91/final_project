

const Meal= (props) => {
  let colorVariable

  switch (props.meal) {
    case 'Breakfast':
      colorVariable = "#536B78"
      break
    case 'Lunch & Dinner':
      colorVariable = "#536B78"
      break
    case 'Dessert':
      colorVariable = "#536B78"
      break
    case 'Dog Food':
        colorVariable = "#536B78"
        break
  default:
      colorVariable = ""
  }


  return ( 
    <div className="types" style ={{color: colorVariable}}>
        {props.meal}
    </div>
  )
  } 

  export default Meal