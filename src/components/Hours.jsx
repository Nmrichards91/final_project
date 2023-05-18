

const Hours= (props) => {
  let colorVariable

  switch (props.hours) {
    case '0h':
      colorVariable = "#536B78"
      break
    case '1h':
      colorVariable = "#536B78"
      break
    case '2h':
      colorVariable = "#536B78"
      break
  default:
      colorVariable = ''
  }


  return ( 
    <div className="types" style ={{color: colorVariable}}>
        {props.hours}
    </div>
  )
  } 

  export default Hours