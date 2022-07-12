import React, { useState } from 'react';

export default function Item({name,username,email,serial,phone,web}) {

    const [status, setStatus] = useState(false);

  return (
    <div className="item">
        <li className='items' onClick={()=>{status ? setStatus(false) : setStatus(true)}}>
            <span id="serial">{serial}</span>
            <span id="name">{name}</span>
            <span id="username">@ {username}</span>
        </li>

        <div className={status ? "iteminfos": "hidden"}>
                <div>
                <summary>EMAIL: </summary><span>{email}</span>
                </div>
                <div><summary>PHONE: </summary><span> {phone}</span></div>
                <div><summary>WEBSITE: </summary> <span> {web}</span></div>
        </div>
    </div>
  );
}
