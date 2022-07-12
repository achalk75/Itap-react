import React, { useState } from "react";
import Item from "./Item";

const DataCompo = ({ data }) => {
  const [query, setQuery] = useState("");
//   

  const handleChange = e => {
      setQuery(e.target.value);
  };


  return (
    <>
      <div className="datacompo">
        <h1>Users List</h1>
        <input type="text" id="queryInput" onChange={(e)=>{handleChange(e)}} />

        <div className="dataList">
          {
           data.filter(
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
                <Item key={i*3} name={e.name} username={e.username} email={e.email} serial={i+1} phone={e.phone} web={e.website} />
                </>
            )
          })
          }
        </div>
      </div>
    </>
  );
};

export default DataCompo;
