

const Difficulty= (props) => {
  let colorVariable

  switch (props.recipe.difficulty) {
    case 'Easy':
      colorVariable = 'green'
      break
    case 'Moderate':
      colorVariable = 'red'
      break
    case 'Hard':
      colorVariable = 'blue'
      break
  default:
      colorVariable = 'white'
  }


  return ( 
    <div className="types" style ={{backgroundColor: colorVariable}}>
        {props.recipe.difficulty}
    </div>
  )
  } 

  export default Difficulty