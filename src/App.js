import React, { useEffect, useState } from 'react';
import './App.css';
import DataCompo from './DataCompo';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        (result) => {
          setData(result);
          // console.log(result);
        },
        (error) => {
          setData([])
        }
      )
  }, [])

  return (
    <div className="app">
      <DataCompo data={data}/>
    </div>
  );
}

export default App;
