

const Flavor = (props) => {
  let colorVariable

  switch (props.nutrition) {
    case 'Flavor':
      colorVariable = 'red'
      break
  default:
      colorVariable = ''
  }


  return ( 
    <div className="flavor" style ={{color: colorVariable}}>
        {props.flavor}
    </div>
  )
  } 

  export default Flavor