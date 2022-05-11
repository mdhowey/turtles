import TurtleList from './components/TurtleList';
import { useEffect, useState } from "react";

const App = () => {
  const url = 'http://localhost:4500/api/turtles';

  const [turtles, setTurtles] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json();
        setTurtles(data);
      } catch(err) {
        console.log(err)
      }
    }
    getData();
  }, []);

  return (
    <>
      <TurtleList turtles={turtles}/>
    </>
  )
}

export default App
