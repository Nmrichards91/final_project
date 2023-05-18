

const Difficulty= (props) => {
  let colorVariable

  switch (props.difficulty) {
    case 'Easy':
      colorVariable = "#536B78"
      break
    case 'Moderate':
      colorVariable = "#536B78"
      break
    case 'Hard':
      colorVariable = "#536B78"
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