

const Minutes= (props) => {
  let colorVariable

  switch (props.minutes) {
    case '00m':
      colorVariable = "#536B78"
      break
    case '15m':
      colorVariable = "#536B78"
      break
    case '20m':
      colorVariable = "#536B78"
      break
    case '25m':
      colorVariable = "#536B78"
      break
    case '30m':
      colorVariable = "#536B78"
      break
    case '35m':
      colorVariable = "#536B78"
      break
    case '40m':
      colorVariable = "#536B78"
      break
    case '45m':
      colorVariable = "#536B78"
      break
  default:
      colorVariable = ''
  }


  return ( 
    <div className="types" style ={{color: colorVariable}}>
        {props.minutes}
    </div>
  )
  } 

  export default Minutes