import React, {useEffect, useState} from "react"
import './App.css';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/api").then(
      data => data.json()
    ).then (
      data => {
        setData(data)
      }
    )
  }, [])

  return (
    <div className="App">
      <h1>Users:</h1>
      { typeof data.users === "undefined" ?
        <h3>Loading...</h3> :
        data.users.map(user => (
          <p>{user}</p>
        ))
    }
    </div>
  );
}

export default App;
