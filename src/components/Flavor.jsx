

const Flavor = (props) => {
  let colorVariable

  switch (props.flavor) {
    case 'Flavor':
      colorVariable = "#93032E"
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