

const Type = (props) => {
  let colorVariable
  console.log(props)

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
      colorVariable = 'black'
  }


  return ( 
    <div classNameName="types" style ={{backgroundColor: colorVariable}}>
        {props.type}
    </div>
  )
  } 

  export default Type