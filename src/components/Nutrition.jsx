

const Nutrition = (props) => {
  let colorVariable

  switch (props.nutrition) {
    case 'Healthy':
      colorVariable = "#00916E"
      break
  default:
      colorVariable = ''
  }


  return ( 
    <div className="nutrition" style ={{color: colorVariable}}>
      &nbsp;{props.nutrition}&nbsp;
    </div>
  )
  } 

  export default Nutrition