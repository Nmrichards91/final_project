

const Type = (props) => {
  let colorVariable

  switch (props.type) {
    case 'Vegan':
      colorVariable = 'red'
      break
    case 'Vegetarian':
      colorVariable = 'green'
      break
    case 'Game':
      colorVariable = 'blue'
      break
    case 'Seafood':
      colorVariable = 'purple'
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