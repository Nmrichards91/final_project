

const Type = (props) => {
  let colorVariable

  switch (props.type) {
    case 'Vegan':
      colorVariable = "#775253"
      break
    case 'Vegetarian':
      colorVariable = "#775253"
      break
    case 'Game':
      colorVariable = "#775253"
      break
    case 'Seafood':
      colorVariable = "#775253"
      break
  default:
      colorVariable = ''
  }


  return ( 
    <div className="types" style ={{color: colorVariable}}>
        {props.type}
    </div>
  )
  } 

  export default Type