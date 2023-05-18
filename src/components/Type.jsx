

const Type = (props) => {
  let colorVariable

  switch (props.type) {
    case 'Vegan':
      colorVariable = "#558B6E"
      break
    case 'Vegetarian':
      colorVariable = "#07393C"
      break
    case 'Game Meat':
      colorVariable = "#4C191B"
      break
    case 'Seafood':
      colorVariable = "#2292A4"
      break
    case 'Dog Food & Treats':
      colorVariable = "#07393C"
      break
  default:
      colorVariable = ''
  }


  return ( 
    <div className="types" style ={{color: colorVariable}}>
        &nbsp;{props.type}&nbsp;
    </div>
  )
  } 

  export default Type