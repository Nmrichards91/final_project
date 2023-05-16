import Type from './Type'


const Recipe = (props) => {
  console.log(props)

  return ( 
    <div className="app">
      <img src={props.recipe.image} />
      <div>
        <h2>{props.recipe.subtitle}</h2>
        <h3>{props.recipe.type}</h3>
        <h4>{props.recipe.meal}</h4>
        <h4>{props.recipe.nutrition}</h4>
        <h4>{props.recipe.flavor}</h4>
        <h4>{props.recipe.difficulty}</h4>
      </div>
        <div className="types"> 
      {props.recipe.types((type) => ( 
        <Type type={type} />
      ))}

    </div>
    </div>
    )
  } 

  export default Recipe