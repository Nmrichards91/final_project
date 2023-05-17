

const Difficulty= (props) => {
  let colorVariable

  switch (props.difficulty) {
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
        {props.difficulty}
    </div>
  )
  } 

  export default Difficulty