

const Flavor = (props) => {
  let colorVariable

  switch (props.flavor) {
    case 'Spicy':
      colorVariable = "#93032E"
      break
    case 'Sweets & Treats':
      colorVariable = "#07393C"
      break
  default:
      colorVariable = ''
  }


  return ( 
    <div className="flavor" style ={{color: colorVariable}}>
        &nbsp;{props.flavor}&nbsp;
    </div>
  )
  } 

  export default Flavor