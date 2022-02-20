import Button from "./Button";
import styles from "././App.module.css";
import {useState, useEffect} from "react";

function Hello(){
  useEffect( () => {
    console.log("created :)");
    return () => console.log("destroyed :(");
  }, []);
  return <h1>Hello</h1>
}
function App() {
  /* const [counter, setValue] = useState(0); */
  const [keyword, setKeyword] = useState("");
  /* const onClick = () => setValue((prev) => prev + 1); */
  const onChange = (e) => setKeyword(e.target.value);
  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes.")
  }, [keyword])
  /* useEffect(() => {
    console.log("I run when 'counter' changes.")
  }, [counter]) */
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      <input onChange={onChange} placeholder="search"/>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
