import { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    //alert("Clicked");
  }
  function resetCount() {
    setCount(0);
  }
  return (
    <div>
      <button onClick={handleClick}>{count} Clicks</button>
      <br />
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

function Greeting({ name }) {
  return <h2>Hello, {name}</h2>;
}

const names = [
  { title: "Carlos", isMember: false, id: 1 },
  { title: "Juan", isMember: true, id: 2 },
  { title: "Pepe", isMember: false, id: 3 },
];

export default function App() {
  const nameList = names.map((names) => (
    <li
      key={names.id}
      style={{ color: names.isMember ? "darkgreen" : "magenta" }}
    >
      {names.title}
    </li>
  ));

  return (
    <div>
      <h1>This is my Testing Website</h1>
      <Greeting name={"Blitza"} />
      <Button />
      <h2>
        <br />
        Members
      </h2>
      <ul>{nameList}</ul>
    </div>
  );
}
