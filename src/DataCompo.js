import React, { useState } from "react";
import Item from "./Item";

const DataCompo = ({ data }) => {
  const [query, setQuery] = useState("");

  const handleChange = e => {
      setQuery(e.target.value);
  };


  return (
    <>
      <div className="datacompo">
        <h1 style={{textAlign:"center", marginBottom:"20px"}}>Users List</h1>
        <input type="text" id="queryInput" onChange={(e)=>{handleChange(e)}} />

        <div className="dataList">
          {

React.Children.toArray(data.filter(
    (person) => {
      return (
        person
        .name
        .toLowerCase()
        .includes(query.toLowerCase()) ||
        person
        .email
        .toLowerCase()
        .includes(query.toLowerCase())
      );
    }
  ).map((e,i)=>{
    return(
        <>
        <Item name={e.name} username={e.username} email={e.email} serial={i+1} phone={e.phone} web={e.website} />
        </>
    )
  }))

           
          }
        </div>
      </div>
    </>
  );
};

export default DataCompo;
