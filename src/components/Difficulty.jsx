

const Difficulty= (props) => {
  let colorVariable

  switch (props.difficulty) {
    case 'Easy':
      colorVariable = "#775253"
      break
    case 'Moderate':
      colorVariable = "#775253"
      break
    case 'Hard':
      colorVariable = "#775253"
      break
  default:
      colorVariable = ''
  }


  return ( 
    <div className="types" style ={{color: colorVariable}}>
        {props.difficulty}
    </div>
  )
  } 

  export default Difficulty