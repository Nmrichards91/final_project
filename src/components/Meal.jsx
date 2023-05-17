

const Meal= (props) => {
  let colorVariable

  switch (props.meal) {
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
      colorVariable = ''
  }


  return ( 
    <div className="types" style ={{color: colorVariable}}>
        {props.meal}
    </div>
  )
  } 

  export default Meal