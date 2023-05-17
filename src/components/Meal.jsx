

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
      colorVariable = 'white'
  }


  return ( 
    <div classNameName="types" style ={{backgroundColor: colorVariable}}>
        {props.meal}
    </div>
  )
  } 

  export default Meal