const TurtleList = ({ turtles }) => {

  return (
    <div>
      <h1>Turtles!</h1>
      {turtles.map((turtle, index) => {
        return (
          <div key={index}>
            <h3>{turtle.name}</h3>
            <h5>{turtle.role}</h5>
          </div>
        )
      })}
    </div>
  )
}

export default TurtleList