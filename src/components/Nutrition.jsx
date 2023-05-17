

const Nutrition = (props) => {
  let colorVariable

  switch (props.nutrition) {
    case 'Healthy':
      colorVariable = 'green'
      break
  default:
      colorVariable = ''
  }


  return ( 
    <div className="nutrition" style ={{color: colorVariable}}>
        {props.nutrition}
    </div>
  )
  } 

  export default Nutrition